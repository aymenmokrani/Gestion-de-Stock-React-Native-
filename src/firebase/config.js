import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC-DNmozqXXq84genBAS9UydI9442XwGzo',
  authDomain: 'grifa-stock.firebaseapp.com',
  databaseURL: 'https://grifa-stock.firebaseio.com',
  projectId: 'grifa-stock',
  storageBucket: 'grifa-stock.appspot.com',
  messagingSenderId: '597242818912',
  appId: '1:597242818912:web:e40812a4e37e053b642e05',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };