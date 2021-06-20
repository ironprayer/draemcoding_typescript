{
    // let은 es6부터 도입
    let name1 = 'hello';
    name1 = 'hi';

    // const
    const age1 = 5;
    // age = 5; 에러

    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array......
     */

    // number
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = true;

    // undefined 값 비어있는지 아닌지 결정이 안된 상태
    // 데이터 타입이 결정되지 않은 경우
    let name: undefined; // 단독적으로 undefined가 사용되지 않음
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    // null 값이 비어있는 상태
    // 값이 아직 결정되지 않은 경우
    let person: null; // 단독적으로 null은 사용되지 않음
    let person2: string | null;

    // unknown 사용하지 않음. javascript와 연동되기 때문에 생성된 자료형
    let notSure: unknown = 0;
    notSure = 'hello';
    notSure = true;

    // any 사용하지 않음. 
    let anyting: any = 0;
    anyting = 'hello';

    // void
    function print() : void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // 쓰이지 않음

    // never 절대 리턴을 할 수가 없다
    function throwError(message: string) : never {
        // message -> server (log)
        /* throw new Error(message); */
        while(true){

        }
        // return; 에러
    }
    let nerverEnding: never; // 쓰이지 않음

    // object 원시타입을 제외한 타입의 변수 모두 전달 가능
    let obj: object; // 쓰이지 않음
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name:'jihyun'});
    acceptSomeObject({animal:'dog'})
}