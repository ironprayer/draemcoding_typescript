/**
 * Let's make a calculator 🧮
 */

type Mode = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(mode: Mode , number1:number, number2:number) :number{
    let result:number = 0;
    if(mode === "add"){
        result = number1 + number2;
    }else if(mode === "substract"){
        result = number1 - number2;
    }else if(mode === "multiply"){
        result = number1 * number2;
    }else if(mode === "divide"){
        result = number1 / number2;
    }else if(mode === "remainder"){
        result = number1 % number2;
    }else {
        throw new Error('unknown error');
    }

    return result;
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
