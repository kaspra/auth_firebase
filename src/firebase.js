import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDe2m29oR_fmDsxNFtLZ-8lRgRIiiYmwCA",
  authDomain: "allinone-51568.firebaseapp.com",
  projectId: "allinone-51568",
  storageBucket: "allinone-51568.appspot.com",
  messagingSenderId: "828290928948",
  appId: "1:828290928948:web:2ab10cb37b4dc3f32f9561"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();