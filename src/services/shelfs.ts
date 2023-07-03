import firebase from "firebase/compat/app";
import { firestore } from "../config/firebaseConfig";

export const addShelf = (
    name: string,
    userId: string,
    shelfs: { title: string; books: string[] }[]
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Check if the shelf already exists
      const existingShelf = shelfs.find((shelf) => shelf.title === name);
      if (existingShelf) {
        reject("Shelf already exists");
        return;
      }
  
      // Add the new shelf to the user's shelves
      const updatedShelfs = [
        ...shelfs,
        {
          title: name,
          books: [],
        },
      ];
  
      // Update the user's shelves in the database
      const userRef = firestore.collection("users").doc(userId);
      userRef
        .update({
          shelfs: updatedShelfs,
        })
        .then(() => {
          resolve("Shelf added successfully");
        })
        .catch(() => {
          reject("Failed to add shelf");
        });
    });
  };
  