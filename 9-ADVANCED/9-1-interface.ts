{
type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface{
    x: number;
    y: number;
}

interface PositionInterface{
    z: number;
}

// object
const ob1: PositionType = {
    x :1,
    y: 1
}
// object
const ob2: PositionInterface = {
    x :1,
    y: 1,
    z :1
}

// class
class Pos1 implements PositionType{
    x:number;
    y:number;
}
class Pos2 implements PositionInterface{
    x:number;
    y:number;
    z:number;
}

// Extends
interface ZPositionInterface extends PositionInterface{
    z:number;
}
type ZPositionType = PositionType & { z: number};

// type PositionType{
//}

// Type aliases can sue computed properties
type Person = {
    name:string,
    age:number,
}

type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right';
}