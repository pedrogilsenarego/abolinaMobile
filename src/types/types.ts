import { Book } from "../slicer/books/books.types";


export type RootStackParamList = {
  Home: undefined;
  Book: { book: Book };
  
};