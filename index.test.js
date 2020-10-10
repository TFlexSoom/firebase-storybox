const { TestScheduler } = require("jest");

// Firebase App (the core Firebase SDK) is always required and must be listed first
const firebase = require("firebase/app");

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
require("firebase/analytics");

// Add the Firebase products that you want to use
require("firebase/database");

require("./index.js");

var db = firebase.database();

test("Check the endvalue is the expected value", () => {
    db.ref().once("value").then((val) => {
        expect(val.toJSON()).toStrictEqual({"message0":"Hello!","message1":"world"});
    });
});