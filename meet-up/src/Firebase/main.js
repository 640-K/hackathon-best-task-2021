import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import firebaseConfig from "./config";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
function facebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
}

export {facebook}