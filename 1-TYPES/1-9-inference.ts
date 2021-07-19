{
/**
 * Type Inference
 */

let text = 'hello';

function print(message = 'hello'){
    console.log(message);
}
print('hello');

// return 값 타입 추론 가능
// 타입을 정확하게 명시해주는 게 좋다.
function add(x: number, y:number){
    return x + y;
}
// 추론을 통해 값이 부여된 변수도 타입 추론 가능
const result = add(1,2);
}