/**
 * Firebase Authentication Only
 * Admin Page သို့ ဝင်ရောက်ရန် လုံခြုံရေးအတွက်သာ အသုံးပြုပါသည်။
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbPSynPV5hxw7dbLHry05dfNEi-jkj9qs",
  authDomain: "thinyanantweb.firebaseapp.com",
  projectId: "thinyanantweb",
  storageBucket: "thinyanantweb.firebasestorage.app",
  messagingSenderId: "1059431248871",
  appId: "1:1059431248871:web:a4392d819fc97b7a63c342"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, onAuthStateChanged, signOut };