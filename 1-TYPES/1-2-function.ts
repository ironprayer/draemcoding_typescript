{
    // // JavaScript 똥
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript 별
    // function add(num1: number, num2: number): number{
    //     return num1 + num2;
    // }

    // // JavaScript 똥
    // function jsFecthNum(id){
    //     return new Promise((reslove, reject) => {
    //         reslove(100);
    //     });
    // }

    // // TypeScript 별
    // function fecthNum(id :string):Promise<number>{
    //     return new Promise((reslove, reject) =>{
    //         reslove(100);
    //     });
    // }

    // JavaScript 별 => TypeScript
    // Optional parameter (?를 통해서 사용)
    function printName(firstname: string, lastName?: string) {
        console.log(firstname);
        console.log(lastName);
    }

    printName('Steve', 'jone');
    printName('Ellie');
    printName('Anna', undefined)

    // Default parameter
    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumbers(...numbers: number[]):number{
        return numbers.reduce((a,b) => a + b)
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4))
}