let nameBook = prompt("vui lòng nhập tên sách: ");
let indexBook = prompt("Vui lòng nhập số thứ tự của sách trong thư viện: ");
let standardizeBookTitles = nameBook.trim().toUpperCase();
let codeBook = `LIB - ${standardizeBookTitles} - ${indexBook}`;
console.log("Tên sách gốc: ", nameBook);
console.log("Mã sách sau chuẩn hóa: ", codeBook);
