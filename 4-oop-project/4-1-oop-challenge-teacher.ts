{
interface Stack{
    readonly size: number;
    push(value:string):void;
    pop(): string;
}

type StackNode = {
    readonly value:string;
    readonly next?: StackNode;
}

class StackImpl implements Stack{
    private _size:number = 0;
    private head?:StackNode;
    constructor(private capacity:number){}
    get size() {
        return this._size;
    }
    push(value:string):void{
        if(this._size == this.capacity){
            throw new Error("Stack full")
        }
        const node: StackNode = {value, next: this.head};
        this.head = node;
        this._size++;
    }
    pop():string{ //undefined == null , undefined !== null
        if(this.head == null){
            throw new Error("Stack is empty");
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl(2);
stack.push("TSF 1");
stack.push("Jeong 2");
stack.push("TTT 3");
while(stack.size != 0){
    console.log(stack.pop())
}

}