function sayHello() {
  console.log('Hi Easy Frontend');
}
function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}

function sum(a: number, b: number): number {
  return a + b.toString();
}
