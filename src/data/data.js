import { db, auth } from "../firebase/firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, arrayUnion, arrayRemove } from "firebase/firestore";


const citiesRef = doc(db, 'datalist', 'cities')

export const getCities = (callback) => {
    getDoc(citiesRef)
    .then(cities => callback(cities))
    .catch(e => console.log(e))
}
