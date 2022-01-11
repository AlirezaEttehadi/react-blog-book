import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDLZweWGjxBltNhwSPoIf4ZZHHO33LP3c4",
    authDomain: "react-book-mahdi.firebaseapp.com",
    projectId: "react-book-mahdi",
    storageBucket: "react-book-mahdi.appspot.com",
    messagingSenderId: "1086836421304",
    appId: "1:1086836421304:web:1a8b271c238b7436d13a4d"
  })

export const auth = app.auth()
export default app;