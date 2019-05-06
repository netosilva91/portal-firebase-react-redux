import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCMQI__AY6hJ6Br66t5muKpKgQAlfA3rxM",
    authDomain: "appeventoreact.firebaseapp.com",
    databaseURL: "https://appeventoreact.firebaseio.com",
    projectId: "appeventoreact",
    storageBucket: "appeventoreact.appspot.com",
    messagingSenderId: "963386865389"
};
firebase.initializeApp(config);

export default firebase