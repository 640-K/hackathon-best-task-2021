import {initializeApp} from "firebase/app";
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
import firebaseConfig from "./config";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();


async function facebookLogin() {
    return await signInWithPopup(auth, facebookProvider)
        .then((result) => {
            const user = result.user;
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            if(user.photoURL.includes('firebasestorage')===false) {
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
            }).then(a=>{
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
    return await signInWithEmailAndPassword(auth, email, password).then(user=>user.user);
  } catch (err) {
    switch(err.message) {
      case 'Firebase: Error (auth/user-not-found).':
        return "Account does not exist."
      case 'Firebase: Error (auth/wrong-password).':
        return "Wrong password.";
      default:
        return "Some error."
    }
  }
}

async function restore(email){
  try {
    await sendPasswordResetEmail(auth, email);
    return "Message sent to your email."
  } catch (err) {
    switch(err.message) {
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



export {facebookLogin, googleLogin, githubLogin, logOut, register, login, restore, auth}