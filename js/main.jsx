import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';
import TestComponent from './components/test.jsx';

firebase.initializeApp(firebaseConfig);
firebase.auth().signInWithEmailAndPassword('test@test.com', 'password');

ReactDOM.render(<TestComponent />, document.getElementById('root'));
