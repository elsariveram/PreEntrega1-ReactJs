import { initializeApp } from "firebase/app";
import {  getFirestore } from 'firebase/firestore';

import config from "../../config";



// web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
};

  
 
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);
  
  