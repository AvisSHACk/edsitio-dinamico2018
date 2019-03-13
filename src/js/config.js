import firebase from 'firebase/app';

var config = {
   apiKey: "AIzaSyDJ06G169BE6w64jxa3KZD4Ec8kSZ4W4r4",
   authDomain: "ed-firebase-ab5de.firebaseapp.com",
   databaseURL: "https://ed-firebase-ab5de.firebaseio.com",
   projectId: "ed-firebase-ab5de",
   storageBucket: "ed-firebase-ab5de.appspot.com",
   messagingSenderId: "805956214503"
};

const init = () => firebase.initializeApp(config);
init();