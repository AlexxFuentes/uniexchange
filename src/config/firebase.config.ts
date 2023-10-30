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
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();
export { app, auth, db, storage };