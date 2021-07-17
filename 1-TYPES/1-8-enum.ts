{
    /**
     * Enum
     */
    // JavaScript

    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0, "TUESDAY":1, "WENESDAY":2})
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript 
    // enum은 대부분 union으로 대체 가능
    // mobile 클라이언트와 의사소통할 때는 union을 표현할 수 있는 것이 없기 때문에 enum 사용
    type DayOfWeek = 'Monday' | 'Tuesday' | 'Wenesday';
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    // enum 변수에는 다른 값들이 들어갈 수 있는 문제가 있다.
    console.log(Days.Tuesday);
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    day = 9;
    console.log(day);
}