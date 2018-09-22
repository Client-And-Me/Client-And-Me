import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBBqeAzCXFpdwB4mcgXx_5EbcOn-HQuEG8",
    authDomain: "clientandme.firebaseapp.com",
    databaseURL: "https://clientandme.firebaseio.com",
    projectId: "clientandme",
    storageBucket: "clientandme.appspot.com",
    messagingSenderId: "1009102611673"
};

if (!firebase.app.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};