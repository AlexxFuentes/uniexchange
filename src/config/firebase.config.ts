import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyCvovb-qQWkgEAMejmdkMYmB_qXAvAxU4s",
  authDomain: "uniexchage.firebaseapp.com",
  projectId: "uniexchage",
  storageBucket: "uniexchage.appspot.com",
  messagingSenderId: "578364156670",
  appId: "1:578364156670:web:5636b308427a6a2b9913af"

  /* apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID, */
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();
export { app, auth, db, storage };