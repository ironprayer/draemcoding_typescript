{
    type CoffeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeMaker {
        static BEANS_GRAMM_PER_SHOT:number = 7; // static은 class level
        coffeeBeansGram:number = 0; // instance (objeect) level

        constructor(coffeeBeansGram : number) {
            this.coffeeBeansGram = coffeeBeansGram;
        }
    
        static makeMeachine(coffeeBeansGram:number):CoffeMaker{
            return new CoffeMaker(coffeeBeansGram);
        }

        makeCoffee(shots:number) :CoffeCup {
            if(this.coffeeBeansGram < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!')
            }
    
            this.coffeeBeansGram -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots : shots,
                hasMilk : false
            }
        }
    }
    
    const maker = new CoffeMaker(32);
    console.log(maker);
    const maker2 = new CoffeMaker(12);
    console.log(maker2);
}
