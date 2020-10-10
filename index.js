// Firebase App (the core Firebase SDK) is always required and must be listed first
const firebase = require("firebase/app");

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
require("firebase/analytics");

// Add the Firebase products that you want to use
require("firebase/database");


//import firebaseConfig from "./config";

let firebaseConfig = {
    // Point to the RTDB emulator running on localhost.
    // In almost all cases the ns (namespace) is your project ID.
    databaseURL: "http://localhost:9000?ns=fir-chat-laplace"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database();
db.ref().set(null);
db.ref().set({message0: "Hello!", message1: "derp"});
db.ref("/message1").set("world");
db.ref().once("value").then((val) => {
    console.log(val.toJSON());
});

