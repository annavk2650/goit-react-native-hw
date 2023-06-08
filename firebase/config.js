import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBBkHxrYMV3L12s98hysRn6a-bv7OKwBYg',
  authDomain: 'react-native-2f19a.firebaseapp.com',
  databaseURL: 'https://react-native-2f19a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-native-2f19a',
  storageBucket: 'react-native-2f19a.appspot.com',
  messagingSenderId: '402674624037',
  appId: '1:402674624037:web:7282bc0ff8a6a4225281cc',
  measurementId: 'G-V94XTRC419',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
