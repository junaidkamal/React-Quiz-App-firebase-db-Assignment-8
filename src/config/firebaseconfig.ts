// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsGXCHZKtBgYTT4f-ts223lqXFw1dRd-o",
  authDomain: "react-quiz-app-db.firebaseapp.com",
  projectId: "react-quiz-app-db",
  storageBucket: "react-quiz-app-db.appspot.com",
  messagingSenderId: "486942485855",
  appId: "1:486942485855:web:3d6510401ed0ee80ca9aea",
  measurementId: "G-0LVG4BE6WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;