// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import "./env.json";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "something",
//   authDomain: "secret",
//   projectId: "nothing",
//   storageBucket: "don't look",
//   messagingSenderId: "Princess Peach is in another file",
//   appId: "nothing to see here",
//   measurementId: "go look somewhere else",
// };
const firebaseConfig = require("./env.json");

/**
 * The Firebase app instance that is initialized with the provided configuration.
 *
 * @type {import("firebase/app").App}
 */
const app = initializeApp(firebaseConfig);

/**
 * Firebase analytics instance for tracking user interactions.
 *
 * @type {import("firebase/analytics").Analytics}
 */
export const analytics = getAnalytics(app);

/**
 * Firebase authentication instance for user authentication.
 *
 * @type {import("firebase/auth").Auth}
 */
export const auth = getAuth(app);

/**
 * Firebase Firestore instance for accessing the Firestore database.
 *
 * @type {import("firebase/firestore").Firestore}
 */
export const db = getFirestore(app);

/**
 * Firebase Storage instance for accessing the Firestore storage.
 *
 * @type {import("firebase/storage").Firestore}
 */
export const storage = getStorage(app);
