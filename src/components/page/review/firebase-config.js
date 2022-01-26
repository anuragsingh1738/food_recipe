import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAQnhvhiWAr9wXZX_7ZjWjUWU2KOH4JMNM",
    authDomain: "food-review-3110c.firebaseapp.com",
    projectId: "food-review-3110c",
    storageBucket: "food-review-3110c.appspot.com",
    messagingSenderId: "153068520289",
    appId: "1:153068520289:web:69fbe12dc5eb5f8502bb20",
    measurementId: "G-MED6ZNHB2M"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore()