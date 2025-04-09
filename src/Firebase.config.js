
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0gm80KS-cBx2BO7Qu376CcwWtmG2pZYc",
  authDomain: "bistro-boss-6ac39.firebaseapp.com",
  projectId: "bistro-boss-6ac39",
  storageBucket: "bistro-boss-6ac39.firebasestorage.app",
  messagingSenderId: "471343846150",
  appId: "1:471343846150:web:1758bfc250b77669950487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app)