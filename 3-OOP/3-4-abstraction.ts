{
    type CoffeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeMaker{
        makeCoffee(shots: number): CoffeCup;

    }

    interface CommercialCoffeMaker{
        makeCoffee(shots: number): CoffeCup;
        fillCoffeeBeans(beans : number): void;
        clean() : void;
    }

    class CoffeMakerImpl implements CoffeMaker, CommercialCoffeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // static은 class level
        private coffeeBeansGram:number = 0; // instance (objeect) level

        private constructor(coffeeBeansGram : number) {
            this.coffeeBeansGram = coffeeBeansGram;
        }
    
        static makeMeachine(coffeeBeansGram:number):CoffeMakerImpl{
            return new CoffeMakerImpl(coffeeBeansGram);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error("value for beans should be grater than 0");
            }
            this.coffeeBeansGram += beans;
        }

        clean() {
            console.log('cleaning the meachine...');
        }

        private grindBeans(shots:number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeansGram < shots * CoffeMakerImpl.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!')
            }
        }

        private preheat(): void{
            console.log(`heating up... `);
        }

        private extract(shots:number):CoffeCup{
            console.log(`Pulling ${shots} shots!`);
            this.coffeeBeansGram -= shots * CoffeMakerImpl.BEANS_GRAMM_PER_SHOT;
            return{
                shots : shots,
                hasMilk : false
            }
        }
        makeCoffee(shots:number) :CoffeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
/*             if(this.coffeeBeansGram < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!')
            }
    
            this.coffeeBeansGram -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots : shots,
                hasMilk : false
            } */
        }
    }
    



    class AmateurUser {
        constructor(private machine: CoffeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProUser{
        constructor(private machine: CommercialCoffeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker: CoffeMakerImpl = CoffeMakerImpl.makeMeachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProUser(maker);
    amateur.makeCoffee();
}
