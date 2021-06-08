import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCfr3xHf6qIW6MVLw1NgyPd9Rl-k3h_fzc",
    authDomain: "quotes-app-8db0c.firebaseapp.com",
    projectId: "quotes-app-8db0c",
    storageBucket: "quotes-app-8db0c.appspot.com",
    messagingSenderId: "847600870005",
    appId: "1:847600870005:web:4920848e417ebc4f878e3c",
    measurementId: "G-FFVKXXKGCR"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;
