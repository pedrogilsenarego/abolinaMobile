import { auth, firestore } from "../config/firebaseConfig"
import { store } from "../slicer/createStore";




export const signOut = () => {
  auth.signOut()
}