{
    function checkNotNullBad(arg: number | null): number{
        if (arg == null){
            throw new Error('not valid number');
        }
        return arg;
    }
    
    function checkNotNullAnyBad(arg: any | null): any{
        if (arg == null){
            throw new Error('not valid number');
        }
        return arg;
    }

    function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC{
        if (arg == null){
            throw new Error('not valid number');
        }
        return arg;
    }

    const result:number = checkNotNull(123);
    const boal = checkNotNull(true);
    console.log(result);
    checkNotNull(null);
}