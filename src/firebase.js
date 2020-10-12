import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: 'AIzaSyC5NDUakiysQEwYPqMT9Opf19Nki15vDOo',
  authDomain: 'react-slack-clone-c1a7c.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-c1a7c.firebaseio.com',
  projectId: 'react-slack-clone-c1a7c',
  storageBucket: 'react-slack-clone-c1a7c.appspot.com',
  messagingSenderId: '1040356304045',
  appId: '1:1040356304045:web:36ddce2b11ff68a451d224',
  measurementId: 'G-BRNQB21T5P',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
