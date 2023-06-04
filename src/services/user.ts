import { auth, firestore } from "../config/firebaseConfig"

export const signInEmailPassword = (values:{email:string,password:string}) =>{
  const {email, password} = values
  auth.signInWithEmailAndPassword(email, password).then(()=>{
    console.log("Logged In...")
  });
}

export const createAccount = (values:{name:string,email:string,password:string}) => {
  const {name,email, password} = values
  auth.createUserWithEmailAndPassword(email,password)
  .then(({user})=>{
    console.log("creating user...")
    const timestamp = new Date();
    const userRoles = ["user"];
    firestore.collection("users").doc(user?.uid).set(
      {
        displayName:name,
        email,
        createdDate: timestamp,
        userRoles,
      }
    )
  })
}

export const signOut = () => {
  auth.signOut()
}