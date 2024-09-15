// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkjggUcnmwPX1QfcBYshw7IVBuYAEPd1o",
  authDomain: "invitacion-milo.web.app",
  projectId: "tarjetas-teinvite",
  storageBucket: "tarjetas-teinvite.appspot.com",
  messagingSenderId: "10490895819",
  appId: "1:10490895819:web:7322faa491073aa00aaa4e",
  measurementId: "G-VTMC6P70GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializa Firebase Storage
const storage = getStorage(app);

export { storage };