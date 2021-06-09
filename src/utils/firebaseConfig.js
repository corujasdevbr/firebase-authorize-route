import firebase from 'firebase';
// import admin from 'firebase-admin';

const firebaseConfig = {
    apiKey: "AIzaSyABB99ncRdO_2r0BUZchWeQJvVJemLjPQw",
    authDomain: "chatbotlinx-5c927.firebaseapp.com",
    databaseURL: "https://chatbotlinx-5c927-default-rtdb.firebaseio.com",
    projectId: "chatbotlinx-5c927",
    storageBucket: "chatbotlinx-5c927.appspot.com",
    messagingSenderId: "992298893503",
    appId: "1:992298893503:web:bee10c2e45f7926096860a"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();

export default firebaseConfig;