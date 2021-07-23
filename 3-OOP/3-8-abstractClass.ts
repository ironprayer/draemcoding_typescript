{
    type CoffeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?:boolean;
    };

    interface CoffeMaker{
        makeCoffee(shots: number): CoffeCup;

    }

    //abstract class로 만들면 instance를 만들 수 없다.
    abstract class CoffeMakerImpl implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // static은 class level
        private coffeeBeansGram:number = 0; // instance (objeect) level

        public constructor(coffeeBeansGram : number) {
            this.coffeeBeansGram = coffeeBeansGram;
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

        protected abstract extract(shots:number):CoffeCup;
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
        protected extract(shots:number): CoffeCup{
            return {
                shots,
                hasMilk:true
            }
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

    class SweetCoffeeMaker extends CoffeMakerImpl {
        protected extract(shots:number): CoffeCup{
            return {
                shots,
                hasSugar:true
            }
        }
        makeCoffee(shots:number) : CoffeCup{
            const coffee = super.makeCoffee(shots);
            return{
                ...coffee,
                hasSugar:true,
            }
        }
    }

    const latteMeachine = new CaffeLatteMachine(23, 'SSSS');
    const coffee = latteMeachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMeachine.serialNumber);

    const meachines: CoffeMaker[] = [
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ]

    meachines.forEach(meachine =>{
        console.log('----------------------------');
        meachine.makeCoffee(1);
    })
}
