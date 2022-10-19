// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7D-nFSfStYTXobcWheExJjZYU0q40NXE",
  authDomain: "imagenes-67a26.firebaseapp.com",
  projectId: "imagenes-67a26",
  storageBucket: "imagenes-67a26.appspot.com",
  messagingSenderId: "901193971670",
  appId: "1:901193971670:web:a8a4a711eed26de5d35677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadFile = async (file) => {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url;
}