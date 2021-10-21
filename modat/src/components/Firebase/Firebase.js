import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJ0JtVxfVC-osVsZVfqB7eXCYbKfzq9tE",
  authDomain: "costumer-devs.firebaseapp.com",
  projectId: "costumer-devs",
  storageBucket: "costumer-devs.appspot.com",
  messagingSenderId: "671088112639",
  appId: "1:671088112639:web:ffcd8c1323438cce196dca",
  measurementId: "G-MZ1XJVSCTH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const collection = process.env.REACT_APP_FIREBASE_COLLECTION;

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {// This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;// ...
  })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);// ...
      });};

      const signInEmailAndPassword = (email, password) => 
      {signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed inconst user = 
          userCredential.user;//
          //const token = userCredential.accessToken;
          //localStorage.setItem('user', JSON.stringify(user));// ...
        })
        
        .catch((error) => {const errorCode = error.code;
          const errorMessage = error.message;});};

          const registerWithEmailAndPassword = async (name, email, password) => {
            try {
              const res = await createUserWithEmailAndPassword(email, password);
              const user = res.user;
              await db.collection(collection).add({
                uid: user.uid,
                name,
                authProvider: "local",
                email,
              });
            } catch (err) {
              console.error(err);
              alert(err.message);
            }
          };
          
          const sendPasswordResetEmail = (email) => {
            try {
              //await auth.sendPasswordResetEmail(email);
              alert("Password reset link sent!");
            } catch (err) {
              console.error(err);
              alert(err.message);
            }
          };
          
          const logout = () => {
            auth.signOut();
          };



export {auth,signInEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithGoogle,
  logout,};