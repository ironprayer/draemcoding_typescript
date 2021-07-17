{
    //Array
    const fruits: string[] =["사과", "바나나"]
    const scroes: Array<number> = [1,2,3]

    //데이터를 읽을 수만 있게 하기 위해서 readonly 사용
    //readonly string[] 형식만 가능 readonly Array<string> 불가능
    function printArray(fruits: readonly string[]){}

    //Tuple 사용 권장하지 않음 -> interface, type alias, class로 대체
    //데이터 접근을 할 때 인덱스로 하는 건 가독성이 떨어짐
    let student: [string, number]; 
    student = ['name',123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;
}