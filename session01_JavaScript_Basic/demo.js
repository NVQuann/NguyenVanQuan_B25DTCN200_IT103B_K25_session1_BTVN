// Cách khai báo biến: var(trước năm 2015 đến nay) , let, const (từ 2015 đến nay)
// Các kiểu đặt tên biến: camel case (userName), snack case (user_name), pascal case (UserName)
//1. Từ khóa var
var userName = "Nguyễn Văn A";

console.log("Gía trị của userName: ", userName);

//1.1. Tiêu chí khai báo lại (có)
var userName = "Lê Văn B";
console.log("Gía trị của userName sau khi khai báo lại: ", userName);

//1.2. Tiêu chí gán lại giá trị (có)
userName = "Nguyễn Văn C";
console.log("Gía trị của userName sau khi gán lại: ", userName);

//1.3. Phạm vi của biến (global - Toàn cục)

//1.4. Cơ chế hoisting - Có thể sử dụng biến trước khi khai báo (có)
age = 10;
console.log("age: ", age); // sử dụng

var age = 20;

// 2. Từ kháo let
let address = "Thanh Xuân, Hà Nội";
console.log("Gía trị của biến address = ", address);

// 2.1. Khai báo lại (không)
// let address = "ncnc";

// 2.2. Gán lại giá trị
address = "Cầu Giấy, Hà Nội";
console.log("Gía trị của address sau khi gán lại: ", address);

// 2.3. Phạm vi của biến (block)

// 2.4. Cơ chế hoisting (có - tuy nhiên biến được lưu trữ trong TDZ)
// console.log("email: ", email);
// let email = "nva@gmail.com";

// 3. Từ khóa const
const gender = "Nam";

// 3.1. Khai báo lại (không)

// 3.2. Gán lại giá trị (Không)

// 3.3. Phạm vi của biến (block) {}

// 3.4. Cơ chế hoisting (có - Tương tự như let

// Các kiểu dữ liệu cơ bản trong javascript
// number, string, boolean, null, undefined, NaN (Not a Number)

// 1. Kiểu dữ liệu số
let firstNumber = 100;
let secondNumber = 30;

console.log(
  firstNumber + " + " + secondNumber + " = ",
  firstNumber + secondNumber,
);
console.log(
  firstNumber + " - " + secondNumber + " = ",
  firstNumber - secondNumber,
);
console.log(
  firstNumber + " * " + secondNumber + " = ",
  firstNumber * secondNumber,
);
console.log(
  firstNumber + " / " + secondNumber + " = ",
  firstNumber / secondNumber,
);
console.log(
  firstNumber + " % " + secondNumber + " = ",
  firstNumber % secondNumber,
);

// 2. Kiểu dữ liệu chuỗi
let positionName = "Giám đốc";
let departmentName = "Phòng marketing";

// Output: Vị trí: Giám đốc - Phòng ban: Phòng marketing
console.log("Vị trí: " + positionName + " - " + "Phòng ban: " + departmentName);

// Lấy ra chiều dài của 1 chuỗi
console.log("Chiều dài của phòng marketing: ", departmentName.length);

// Template string: Kí tự ``
console.log(
  `Vị trí: ${positionName} - Phòng bán: ${departmentName.toLowerCase()}`,
);

// 3. Kiểu dữ liệu boolean (true/false)

// 4. Kiểu dữ liệu null (được sử dụng khi 1 biến được khai báo nhưng chưa xác định được giá trị
// của nó là gì, nên gán là null)

// 5. Kiểu dữ liệu underfined (Được sử dụng khi 1 biến được khai báo nhưng chưa được gán giá trị)
let email;
console.log("Email: ", email);

// 6. Kiểu dữ liệu NaN (Not a Number)
console.log("Result: ", 10 / "abc");

// Nhập dử liệu (Lấy dữ liệu từ người dùng)
// let phoneNumber = prompt("Vui lòng nhập số điện thoại");

// Xuất dữ liệu theo dạng hộp thoại
// alert("Xin chào bạn");

// Lấy xác nhận từ người dùng
// let isConfirm = confirm("Bạn có chắc chắn muốn đăng xuất không?");

// console.log("isConfirm: ", isConfirm);

// Chuyển đổi dữ liệu tường minh
// Chuyển đổi từ số sang chuỗi
let thirdNumber = 20;
// console.log("Kiểu dữ liệu: ", String(thirdNumber));
console.log("Kiểu dữ liệu: ", thirdNumber.toString());

// Chuyển đổi từ chuỗi sang số
let numberString = "1234";
// console.log("Kết quả sau khi chuyển đổi: ",Number(numberString));
// console.log("Kết quả sau khi chuyển đổi: ", parseInt(numberString));
console.log("Kết quả sau khi chuyển đổi: ", +numberString);

// Chuyển đổi từ 1 giá trị cụ thể thành kiểu boolean
console.log("Kết quả sau khi chuyển đổi:", Boolean(1)); // true
console.log("Kết quả sau khi chuyển đổi:", Boolean(0)); // false
console.log("Kết quả sau khi chuyển đổi:", Boolean("")); // false
console.log("Kết quả sau khi chuyển đổi:", Boolean(null)); // false
console.log("Kết quả sau khi chuyển đổi:", Boolean(undefined)); // false
console.log("Kết quả sau khi chuyển đổi:", Boolean(NaN)); // false
console.log("Kết quả sau khi chuyển đổi:", Boolean(false)); // false

// Đối tương Math
console.log("PI: ", Math.PI);
console.log("Số random: ", Math.ramdom()); // 0 -> 1
console.log("Làm tròn trên: ", Math.ceil(2.1)); // 3
console.log("Làm tròn dưới: ", Math.ceil(2.9)); // 2
console.log("Làm tròn khi thập phaann >=5: ", Math.round(2.1)); // 3
