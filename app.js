function sachick(firstNum, secNum, callback) {
  return callback(firstNum, secNum);
}
// * callback은 호출일 뿐, return이 필요한지 안 필요한지 확인하기
const a = sachick(1,2, function(firstNum, secNum){
  return firstNum + secNum;
})

console.log(a);
// !로직을 니가 호출할 때 결정해라는 뜻의 callback

const b = sachick(3,2, function(firstNum, secNum){
  return firstNum - secNum;
})
console.log(b);
// !사칙연산의 부호를 매개변수를 받아서 작성할 순 없다. 대신 callback함수를 통해 사용


