let a: string = 'Explicit type';
let b = 'Inferred type';
function isEmpty(numberList: number[]) {
  return numberList.length === 0;
}
let str;
if (Math.random() > 0.5) {
  str = '';
}
str?.toString();
