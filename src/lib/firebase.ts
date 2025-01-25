import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3-1lDL4XZ8mPcj--AmvyLQKffcjI_oow",
  authDomain: "e-commerce-ca043.firebaseapp.com",
  projectId: "e-commerce-ca043",
  storageBucket: "e-commerce-ca043.firebasestorage.app",
  messagingSenderId: "890999388570",
  appId: "1:890999388570:web:339358453d58cb76836223",
  measurementId: "G-Y017JLLGGT"
};

export const firebaseApp = initializeApp(firebaseConfig);