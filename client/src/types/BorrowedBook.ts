import Books from "./Books";
import User from "./user";

export default interface BorrowedBook {
  UBID: number;
  username: User;
  bookname: Books;
  startdate: string;
  enddate: string;
}
