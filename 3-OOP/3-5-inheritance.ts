{
    type CoffeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeMaker{
        makeCoffee(shots: number): CoffeCup;

    }


    class CoffeMakerImpl implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // static은 class level
        private coffeeBeansGram:number = 0; // instance (objeect) level

        public constructor(coffeeBeansGram : number) {
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
    
    class CaffeLatteMachine extends CoffeMakerImpl{
        constructor(beans: number, public readonly serialNumber: string){
            super(beans);

        }
        private steamMilk(): void{
            console.log('Steaming some milk...');
        }
        makeCoffee(shots:number) : CoffeCup{
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            };
        }
    }

    const meachine = new CoffeMakerImpl(23);
    const latteMeachine = new CaffeLatteMachine(23, 'SSSS');
    const coffee = latteMeachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMeachine.serialNumber);
}
