import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChKze0XDJCmKdn0OpPyLY7Q-Udm_y-bz4",
  authDomain: "react-ecommerce-66bc8.firebaseapp.com",
  projectId: "react-ecommerce-66bc8",
  storageBucket: "react-ecommerce-66bc8.appspot.com",
  messagingSenderId: "404954803529",
  appId: "1:404954803529:web:7e02f2d1108c07e6b7fe98"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);