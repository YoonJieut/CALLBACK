function prac (fir, callback){
  return callback(fir);
}

function prac2 (fir, callback){
  if( typeof(fir) ==="string" ){
    return callback(fir);
  }
  else {
    console.error("해당 타입은 지원하지 않습니다.")
  }
}
// * prac2는 여기서 끝납니다.

prac2("대충문자열", function(eventTarget){
  return eventTarget + "입니다."
});
// * 함수로 쓰면 되는 걸 굳이 전달하고 있습니다.
// * 동기적 처리
// * 코드의 분리도 가능하겠죠?
// ! 억양 연습과 다를 것이 없다

//! 순서대로 돌아가네요? 절차 -> 버릴 수가 없습니다.
//! callback을 이해하는 순간 중급용입니다.

// --------------------------------------------------------

// function a(fir){
//   return console.log( `${fir}`);
// }
// a(1,2);

// function b(fir) {
//   return console.log(fir/10);
// }
// b(1);

// function c (fir, callback) {
//   return String(callback(fir));
// }

function three (number, callback) {
  if(typeof(number)==="number") {
    return `${callback(number)}`;
  }
}
let divide = three(2, function(number){
  return number/10;
})


console.log(divide);
console.log(three(2, function(number){return number + 4}));
