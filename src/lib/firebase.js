import Firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from "../seed";


const config = {
    apiKey: "AIzaSyBhJJedTkgcvr2gmddx5MTXvYJCXywJclE",
    authDomain: "netflix-57f8a.firebaseapp.com",
    projectId: "netflix-57f8a",
    storageBucket: "netflix-57f8a.appspot.com",
    messagingSenderId: "900385869443",
    appId: "1:900385869443:web:483606b872e379470a55b6"
};


const firebase = Firebase.initializeApp(config);


export { firebase };