import firebase from "firebase/compat/app";
import { firestore } from "../config/firebaseConfig";
import { Book } from "../slicer/books/books.types";

export const fetchBooksOwned = (listBooks: string[]): Promise<Book[]> => {
  const bookRefs = listBooks.map((bookId) =>
    firestore.collection("books").doc(bookId)
  );

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
