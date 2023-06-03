import { auth } from "../config/firebaseConfig"

export const signInEmailPassword = (values:{email:string,password:string}) =>{
  const {email, password} = values
  auth.signInWithEmailAndPassword(email, password).then(()=>{
    console.log("Logged In...")
  });
}

export const createAccount = (values:{email:string,password:string}) => {
  const {email, password} = values
  auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
    console.log("creating user...")
  })
}

export const signOut = () => {
  auth.signOut()
}