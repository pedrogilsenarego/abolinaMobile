import firebase from "firebase/compat/app";
import { firestore } from "../config/firebaseConfig";
import { Book } from "../slicer/books/books.types";

export const fetchBooksOwned = (listBooks: string[]): Promise<Book[]> => {
  const bookRefs = listBooks.map((bookId) =>
    firestore.collection("books").doc(bookId)
  );
  console.log("Fetching owned books")
  return new Promise((resolve, reject) => {
    firestore
      .collection("books")
      .where(firebase.firestore.FieldPath.documentId(), "in", bookRefs.map((bookRef) => bookRef.id))
      .onSnapshot((query) => {
        const list: Book[] = [];
        query.forEach((doc) => {
          list.push({ documentID: doc.id, ...doc.data() } as Book);
        });
        resolve(list);
      }, reject);
  });
};

export const convertCoupons = (coupon: string, userId:string, booksOwned:string[]): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Check if the coupon exists in the "coupons" collection
    const couponRef = firestore.collection('cuppons').doc(coupon);
    couponRef
      .get()
      .then((couponDoc) => {
        if (!couponDoc || !couponDoc.exists) { // Add type check for couponDoc
          reject('Coupon does not exist');
          return;
        }

        // Retrieve the idBook from the coupon document
        const idBook = couponDoc?.data()?.bookId;
        // Check if the book is already owned
        if (booksOwned.includes(idBook)) {
          reject('Book already owned');
          return;
        }

        // Delete the coupon document from the "coupons" collection
        couponRef
          .delete()
          .then(() => {
            // Add the idBook to the user's "listOwned" field
            const userRef = firestore.collection('users').doc(userId); 
            userRef
              .update({
                booksOwned: firebase.firestore.FieldValue.arrayUnion(idBook),
              })
              .then(() => {
                resolve('Coupon converted successfully');
              })
              .catch((error) => {
                reject('Failed to update user list of Books');
              });
          })
          .catch((error) => {
            reject('Failed to delete coupon');
          });
      })
      .catch((error) => {
        reject('Failed to retrieve coupon');
      });
  });
};

