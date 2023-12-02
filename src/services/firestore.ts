import { getApps, getApp, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDoiWSsKxwVNawf6RNRg0NPFlCGd7BUUjo',
  authDomain: 'chatiko-virtual-companion.firebaseapp.com',
  databaseURL:
    'https://chatiko-virtual-companion-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chatiko-virtual-companion',
  storageBucket: 'chatiko-virtual-companion.appspot.com',
  messagingSenderId: '126929189062',
  appId: '1:126929189062:web:c81b809a077959d932ffc7',
  measurementId: 'G-1R9304JCT7',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
