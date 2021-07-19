{
    /**
     * Type Assertions 사용하는 건 좋지 않다.
     */
    function jsStrFunc(): any {
        return 2;
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers()!;
    numbers!.push(2); // !는 진짜진짜 장담해, 값이 있어.

    const button = document.querySelector('class')
    if(button){
        button.nodeValue;
    }
}