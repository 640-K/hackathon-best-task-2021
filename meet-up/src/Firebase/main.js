import {initializeApp} from "firebase/app";
import {getFirestore, updateDoc, getDoc, getDocs, where, setDoc, collection, doc, query} from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {
    getAuth,
    signOut,
    updateProfile,
    signInWithPopup,
    FacebookAuthProvider,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from "firebase/auth";
import {getMessaging, getToken, onMessage,} from 'firebase/messaging';
import firebaseConfig from "./config";

import firebaseConfig from "./config"

let CryptoJS = require("crypto-js");

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app)
const messaging = getMessaging(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const getTokens = () => {
    return getToken(messaging, {vapidKey: 'BHTmol5rVjBkxYrfCoZXqHRYbsqY_5ox7P04YRp24CRADPAAps88NUy7YLhNzEscuIMSv2k3TObt3KTJ2r8HGS4'}).then((currentToken) => {
        if (currentToken) {
            setDoc(doc(collection(db, "alerts"), auth.currentUser.uid), {'token': currentToken});
        } else {
            console.log('No registration token available. Request permission to generate one.');
            // shows on the UI that permission is required
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

async function facebookLogin() {
    return await signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const user = result.user;
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            if (user.photoURL.includes('firebasestorage') === false) {
                console.log(123)
                uploadBlob(user.photoURL + "?access_token=" + accessToken, user.uid).then(url => {
                    updateProfile(user, {photoURL: url})
                });
            }
            return user
        })
        .catch((error) => {
            console.log(error)
            return false;
        });
}


async function googleLogin() {
    return await signInWithPopup(auth, googleProvider)
        .then((result) => {
            return result.user;
        }).catch((error) => {
            console.log(error)
            return false;
        });
}

async function githubLogin() {
    return await signInWithPopup(auth, githubProvider)
        .then((result) => {
            return result.user;
        }).catch((error) => {
            console.log(error)
            return false;
        });
}

async function uploadBlob(url, path) {
    try {
        const metadata = {
            contentType: 'image/jpeg'
        };
        const storageRef = await ref(storage, "img/" + path + ".jpeg");
        return fetch(url).then(res => {
            return res.blob();
        }).then(blob => {
            return uploadBytes(storageRef, blob, metadata).then((snapshot) => {
                return getDownloadURL(snapshot.ref).then((downloadURL) => {
                    return downloadURL
                });
            });
        })
    } catch (error) {
        console.log(error)
    }

}

async function register(email, password, firstName, lastName) {
    console.log(email)
    return await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return updateProfile(userCredential.user, {
                displayName: firstName + " " + lastName,
                photoURL: "https://firebasestorage.googleapis.com/v0/b/meet-up-hackathon.appspot.com/o/img%2Fdefault.png?alt=media&token=51c43917-e70c-45b6-83d9-a417c9cfb025"
            }).then(a => {
                return userCredential.user
            })

        })
        .catch((error) => {
            switch (error.message) {
                case 'Firebase: Error (auth/email-already-in-use).':
                    return "Email already exists."
                default:
                    return "Some error."
            }
        });

}

async function login(email, password) {
    try {
        return await signInWithEmailAndPassword(auth, email, password).then(user => user.user);
    } catch (err) {
        switch (err.message) {
            case 'Firebase: Error (auth/user-not-found).':
                return "Account does not exist."
            case 'Firebase: Error (auth/wrong-password).':
                return "Wrong password.";
            default:
                return "Some error."
        }
    }
}

async function restore(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        return "Message sent to your email."
    } catch (err) {
        switch (err.message) {
            case 'Firebase: Error (auth/user-not-found).':
                return "Account does not exist."
            default:
                return "Some error."
        }
    }
}


async function logOut() {
    return await signOut(auth).then(() => {
        window.location.reload();
    }).catch((error) => {
        console.log(error)
    });
}


onMessage(messaging, function (payload) {
    try {  //try???
        console.log('Message received. ', payload);

        const noteTitle = payload.notification.title;
        const noteOptions = {
            body: payload.notification.body,
            icon: "typewriter.jpg", //this is my image in my public folder
        };

        console.log("title ", noteTitle, " ", payload.notification.body);
        //var notification = //examples include this, seems not needed
        new Notification(noteTitle, noteOptions).onclick = function (event) {
            // console.log(event);
            // console.log(payload.notification.click_action);
            if (payload && payload.notification && payload.notification.click_action && payload.notification.click_action.length > 0) {
                window.open(payload.notification.click_action, '_blank');
            }
            this.close();
        };
    } catch (err) {
        console.log('Caught error: ', err);
    }
});

async function saveMeet(data) {
    try {
        var file_hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(data['file']));
        var file_md5 = file_hash.toString(CryptoJS.enc.Hex)
        const metadata = {
            contentType: 'image/jpeg'
        };
        const storageRef = await ref(storage, "img/" + file_md5 + ".jpeg");
        return uploadBytes(storageRef, data["file"], metadata).then((snapshot) => {
            return getDownloadURL(snapshot.ref).then((downloadURL) => {
                data["file"] = downloadURL
                data["user"] = auth.currentUser.uid
                var meet_hash = CryptoJS.MD5(JSON.stringify(data).toString());
                var meet_md5 = meet_hash.toString(CryptoJS.enc.Hex)
                data["id"] = meet_md5
                data["who"] = []
                setDoc(doc(collection(db, "meets"), meet_md5), data);
                return meet_md5
            });
        });
    } catch (error) {
        console.log(error)
        return false
    }
}


async function getMeets(location) {
    try {
        let meetsRef = collection(db, "meets")
        const q = query(meetsRef, where("auto_address", "==", location));
        return getDocs(q).then(docs => docs.docs.map(document => document.data()))
    } catch (error) {
        console.log(error)
        return false
    }
}


async function subscribe(id) {
    try {
        const docRef = doc(db, "meets", id);
        return await getDoc(docRef).then((data) => {
            let who = data.data()['who']
            if (who.includes(auth.currentUser.uid) === true || data.data()['user'] === auth.currentUser.uid)
                return "You are subscribe yet."
            who.push(auth.currentUser.uid)
            return updateDoc(docRef, {
                who: who
            }).then(_ => {
                return true
            });
        })
    } catch (error) {
        console.log(error)
        return false
    }
}

async function saveToken(){
    getTokens()
}

function getUserToken(uid){
    return getDoc(doc(collection(db, "alerts"), uid)).then(data=>{
        if(data.data())
            return data.data()['token']
        return null
    })
}

export {
    facebookLogin,
    googleLogin,
    githubLogin,
    logOut,
    register,
    login,
    restore,
    saveToken,
    saveMeet,
    messaging,
    app,
    auth,
    getMeets,
    getUserToken,
    subscribe
}
