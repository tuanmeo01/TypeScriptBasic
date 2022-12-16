enum Status {
  PENDING = 1, // nếu không khởi tạo giá trị thì enum mặc định bắt đầu từ 0
  IN_PROCESS = 3,
  DONE = 5,
  CANCELLED = 7,
}

console.log(Status[0]);
console.log(Status['DONE']);
