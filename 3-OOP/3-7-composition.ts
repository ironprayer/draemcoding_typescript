{
    type CoffeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?:boolean;
    };

    interface CoffeMaker{
        makeCoffee(shots: number): CoffeCup;

    }
    // 싸구려 우유 거품기
    class CheapMilkSteamer{
        private steamMilk(): void{
            console.log('Steaming some milk... ');
        }
        makeMilk(cup: CoffeCup): CoffeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            }
        }
    }

    class AutomaticSugarMixer{
        private getSugar(){
            console.log('Gettint some sugar from candy ');
            return true;
        }

        addSugar(cup:CoffeCup): CoffeCup{
            this.getSugar();
            return{
                ...cup,
                hasSugar:true,
            }
        }
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
        constructor(beans: number, public readonly serialNumber: string, private milkFother: CheapMilkSteamer){
            super(beans);

        }

        makeCoffee(shots:number) : CoffeCup{
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeMakerImpl {
        constructor(private beans:number, private sweatFother: AutomaticSugarMixer){
            super(beans);
        }
        makeCoffee(shots:number) : CoffeCup{
            const coffee = super.makeCoffee(shots);
            return this.sweatFother.addSugar(coffee);
        }
    }

    class SweetCaffeLatteMachine extends CoffeMakerImpl {
        constructor(
            private beans:number,
            private milk: CheapMilkSteamer,
            private sugar: AutomaticSugarMixer
        ){
            super(beans);
        }

        makeCoffee(shots:number) : CoffeCup{
            const coffee = super.makeCoffee(shots);
            const addMilkCoffee = this.milk.makeMilk(coffee);
            return this.sugar.addSugar(addMilkCoffee);
            
        }
    }
/* Error 하나의 상속만 가능
    class SweetCaffeLatteMeachine extends SweetCoffeeMaker, CaffeLatteMachine{

    } */

}
