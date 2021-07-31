const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ == y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;

    /*this.makeCoffe = shot => {
        console.log('making... ');
    }*/
}

CoffeeMachine.prototype.makeCoffe = () => {
    console.log("making... ");
};

const meachine1 = new CoffeeMachine(10);
const meachine2 = new CoffeeMachine(10);
console.log(meachine1);
console.log(meachine2);

function LatteMachine(milk){
    this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffe();