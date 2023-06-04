import { auth, firestore } from "../config/firebaseConfig"
import { store } from "../slicer/createStore";

// export const signInEmailPassword = (values:{email:string,password:string}) =>{
//   const {email, password} = values
//   auth.signInWithEmailAndPassword(email, password).then(()=>{
//     console.log("Logged In...")
//   });
// }

// export const createAccount = (values: { name: string, email: string, password: string }) => {
//   const { name, email, password } = values;
//   auth.createUserWithEmailAndPassword(email, password)
//     .then(({ user }) => {
//       console.log("Creating user...");
//       const timestamp = new Date();
//       const userRoles = ["user"];
//       firestore.collection("users").doc(user?.uid).set({
//         displayName: name,
//         email,
//         createdDate: timestamp,
//         userRoles,
//       })
//       .then(() => {
//         user?.sendEmailVerification()
//           .then(() => {
//             console.log("Email verification sent.");
//           })
//           .catch((error) => {
//             console.log("Error sending email verification:", error);
//           });
//       })
//       .catch((error) => {
//         console.log("Error creating user:", error);
//       });
//     })
//     .catch((error) => {
//       console.log("Error creating user:", error);
//     });
// };


export const signOut = () => {
  auth.signOut()
}