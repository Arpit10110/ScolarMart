import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC6QQtYOsC-bbJPuceLo4Rj8IReaWHeZp4",
    authDomain: "mart-ab162.firebaseapp.com",
    projectId: "mart-ab162",
    storageBucket: "mart-ab162.appspot.com",
    messagingSenderId: "1006977119868",
    appId: "1:1006977119868:web:32dbdc8d883db1addbbbf9",
    measurementId: "G-GS08YMDJDP"
  };
const app = initializeApp(firebaseConfig);
const imgdb=getStorage(app);
const db=getFirestore(app);
export{imgdb,db};