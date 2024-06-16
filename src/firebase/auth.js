import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";


export const logIn = (email, password, successCallback, failedCallback) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(user => successCallback())
    .catch(e => failedCallback(e))
}

export const logOut = callback => {
    signOut(auth)
    .then(callback())
    .catch(e => console(e))
}