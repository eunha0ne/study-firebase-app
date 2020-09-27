import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { FIREBASE_CONFIG } from "const";

firebase.initializeApp(FIREBASE_CONFIG);

export const instance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
