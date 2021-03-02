import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBSgoxa9d8DPe5TLkWWs6nNxUbou0K9cHw",
  authDomain: "directed-fabric-283007.firebaseapp.com",
  projectId: "directed-fabric-283007",
  storageBucket: "directed-fabric-283007.appspot.com",
  messagingSenderId: "377370323640",
  appId: "1:377370323640:web:37a106678f402cf347e24d"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;