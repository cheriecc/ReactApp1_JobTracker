import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";


export const logIn = (email, password, callback) => {
    console.log('try to log')
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => callback())
    .catch(e => console(e))

}

export const logOut = callback => {
    signOut(auth)
    .then(callback())
    .catch(e => console(e))
}