{
    type CoffeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public
    // private
    // protected
    class CoffeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // static은 class level
        private coffeeBeansGram:number = 0; // instance (objeect) level

        private constructor(coffeeBeansGram : number) {
            this.coffeeBeansGram = coffeeBeansGram;
        }
    
        static makeMeachine(coffeeBeansGram:number):CoffeMaker{
            return new CoffeMaker(coffeeBeansGram);
        }

        fillCoffeBeans(beans: number){
            if(beans < 0){
                throw new Error("value for beans should be grater than 0");
            }
            this.coffeeBeansGram += beans;
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
    
    const maker = CoffeMaker.makeMeachine(32);
    maker.fillCoffeBeans(32);

    class User{
     get fullName(): string{
         return `${this.firstName} ${this.lastName}`
     }
     private internalAge = 4;
     get age(): number {
         return this.internalAge;
     }
     set age(num: number){
         if(num < 0){
             
         }
         this.internalAge = num;
     }

     constructor(private firstName:string, private lastName:string){

     }
    }

    const user = new User('Steve', 'Jobs');
    user.age = 6;


}
