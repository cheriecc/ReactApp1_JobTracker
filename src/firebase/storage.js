import { ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "./firebase";


export const uploadFile = (file, callback) => {
    const storageRef = ref(storage, `users/${auth.currentUser.uid}/files`)
    uploadBytes(storageRef, file)
    .then((snapshot) => callback())
    .catch((e) => console.log(e))
}