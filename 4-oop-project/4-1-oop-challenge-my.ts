{
    /**
     * OOP Challenge Stack
     */

    class Node{
        constructor(protected data:string, protected prev?:Node ){}

        setPrevNode(prevNode:Node){
            this.prev = prevNode;
        }

        getPrevNode(){
            return this.prev;
        }

        getData():string{
            return this.data;
        }

    }

    class Stack {
        public topNode? : Node;
        private size : number;

        constructor(){
            this.size = 0;
        }

        push(data:string){
            const newNode:Node = new Node(data)
            if(this.topNode === undefined){
                this.topNode = newNode;
            }else{
                newNode.setPrevNode(this.topNode);
                this.topNode = newNode;
            }
            this.size += 1;
        }

        pop():string | undefined{
            if(this.size == 0){
                throw new Error("Stack is Empty!");
            }
            const data = this.topNode?.getData();
            this.topNode = this.topNode?.getPrevNode();
            return data;
        }

    }

    let stack:Stack = new Stack();
    stack.push("12");
    console.log(stack.topNode);
    stack.push("55");
    console.log(stack.topNode);
    console.log(stack.pop());
    console.log(stack.topNode);
    console.log(stack.pop());
    console.log(stack.topNode);
}