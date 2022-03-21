import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA5ClOR7xvfmTVO1QGm3Qy23yJm63Gm97o",
  authDomain: "auth-d1e40.firebaseapp.com",
  projectId: "auth-d1e40",
  storageBucket: "auth-d1e40.appspot.com",
  messagingSenderId: "217198571599",
  appId: "1:217198571599:web:fa2e59931fbe25f3b8fa3a",
  measurementId: "G-FJ5WHWW1E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const sign_in_with_google = async () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

         localStorage.setItem("name", name)
         localStorage.setItem("email", email)
         localStorage.setItem("profilePic", profilePic)

    }).catch((err) => alert(err))
}