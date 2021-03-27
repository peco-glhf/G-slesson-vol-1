import firebase from "firebase";
//config jsを読み込んでくる。
import { firebaseConfig } from "./config";

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase;
