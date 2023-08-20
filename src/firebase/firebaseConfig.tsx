import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

interface IFirebase {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
}

const firebaseConfig: IFirebase = {
    apiKey: "AIzaSyCea99ZjCN5imHpMp5mngYO1CtHP1Izkms",
    authDomain: "thgpainting-c8196.firebaseapp.com",
    projectId: "thgpainting-c8196",
    storageBucket: "thgpainting-c8196.appspot.com",
    messagingSenderId: "413654520238",
    appId: "1:413654520238:web:c9873e828434822eeeb83f"
  };

  export const app: FirebaseApp = initializeApp(firebaseConfig)

  export const db = getFirestore(app)