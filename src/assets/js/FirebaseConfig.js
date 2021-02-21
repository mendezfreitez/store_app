import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDIXGU3z6fJ9a5ZeJDvU8Xf5e0crQE6pp8",
    authDomain: "storeappfront-465d5.firebaseapp.com",
    databaseURL: "https://storeappfront-465d5.firebaseio.com",
    projectId: "storeappfront-465d5",
    storageBucket: "storeappfront-465d5.appspot.com",
    messagingSenderId: "848968631781",
    appId: "1:848968631781:web:cb89a966c6d63eaa521b0c",
    measurementId: "G-ELJPFXFTRV"
};

export default firebase.initializeApp(firebaseConfig)