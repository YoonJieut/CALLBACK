function a(fir, sec, callback) {
  return callback(fir, sec);
}

let minus = a(function(fir,sec){
  return fir - sec;
})
let divideValue = a(function(fir,sec){
  return fir/sec;
})

a(1,2, function(){});
// ? 매개변수자리에 함수가 들어간다.
// * a함수는 3 번째 매개변수에 함수가 들어가기로 약속되어있다.
// * a 함수 선언할 때는 어떤 로직이 될지 모른다.
// * a 함수 호출할 때는 로직을 결정해야 한다.
