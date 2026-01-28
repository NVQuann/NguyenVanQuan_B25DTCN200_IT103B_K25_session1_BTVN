let nameBook = prompt("vui lòng nhập tên sách: ");
let yearBook = prompt("Vui lòng nhập năm xuất bản của sách: ");
let newYearBook = Number(yearBook);
let year = new Date().getFullYear();
let bookAge = year - newYearBook;
console.log("Tên sách: ", nameBook);
console.log("Năm xuất bản: ", yearBook);
console.log("Tuổi của sách: ", bookAge);
