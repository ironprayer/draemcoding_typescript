{
    type CoffeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?:boolean;
    };

    interface CoffeMaker{
        makeCoffee(shots: number): CoffeCup;

    }

    interface MilkeForther {
        makeMilk(cup: CoffeCup): CoffeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeCup): CoffeCup
    }
    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkeForther{
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

    class FancyMilkSteamer implements MilkeForther{
        private steamMilk(): void{
            console.log('Fancy Steaming some milk... ');
        }
        makeMilk(cup: CoffeCup): CoffeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            }
        }
    }

    class coldMilkSteamer implements MilkeForther{
        private steamMilk(): void{
            console.log('Cold Steaming some milk... ');
        }
        makeMilk(cup: CoffeCup): CoffeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            }
        }
    }

    class NoMilk implements MilkeForther{
        makeMilk(cup:CoffeCup): CoffeCup{
            return cup;
        }
    }

    class CandySugarMixer implements SugarProvider{
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

    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Sugar Gettint some sugar from candy ');
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

    class NoSugar implements SugarProvider{
        addSugar(cup:CoffeCup): CoffeCup{
            return cup;
        }
    }

    class CoffeMakerImpl implements CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // static은 class level
        private coffeeBeansGram:number = 0; // instance (objeect) level

        public constructor(coffeeBeansGram : number, private mil:MilkeForther, private sugar:SugarProvider) {
            this.coffeeBeansGram = coffeeBeansGram;
        }
    
/*         static makeMeachine(coffeeBeansGram:number):CoffeMakerImpl{
            return new CoffeMakerImpl(coffeeBeansGram);
        } */

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
            let cup:CoffeCup = this.extract(shots);
            cup = this.sugar.addSugar(cup);
            cup = this.mil.makeMilk(cup);
            return cup;
        }
    }
    
    // Milk
    const cheapMilkerMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new coldMilkSteamer();
    const noMilk = new NoMilk();


    // Suga
    const sugar = new SugarMixer();
    const candySuger = new CandySugarMixer()
    const noSugar = new NoSugar();

    const sweetMachine = new CoffeMakerImpl(12, noMilk, candySuger);
    const latteMachine = new CoffeMakerImpl(22, cheapMilkerMaker, noSugar);
    sweetMachine.fillCoffeeBeans(12*7);
    latteMachine.fillCoffeeBeans(15*7);
    console.log(sweetMachine.makeCoffee(12));
    console.log(latteMachine.makeCoffee(15));

}
