import * as firebase from 'firebase';
import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqsBUEexy1yJr8YjoPoJ-tHJye4gR4Bkc",
    authDomain: "scheduler-990e5.firebaseapp.com",
    databaseURL: "https://scheduler-990e5.firebaseio.com",
    projectId: "scheduler-990e5",
    storageBucket: "scheduler-990e5.appspot.com",
    messagingSenderId: "617802983463",
    appId: "1:617802983463:web:40b9e33a3aec472422c602",
    measurementId: "G-99J08C1XE0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;