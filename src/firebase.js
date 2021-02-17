import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0-rYXv2njVnue9q_GGjHc8kwSf7hJd2s",
  authDomain: "whatsapp-clone-21505.firebaseapp.com",
  projectId: "whatsapp-clone-21505",
  storageBucket: "whatsapp-clone-21505.appspot.com",
  messagingSenderId: "227956969108",
  appId: "1:227956969108:web:7139b58ccbc1f378072e81",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
