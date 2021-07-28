// Java: Exception
// JavaScript : Error
//const array = new Array(1000000000000000000000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string{
   if(fileName === 'not exist!'){
       throw new Error(`file not exist! ${fileName}`);
   }
   return 'file contents';
}

function closeFile(fileName:string){
    //
}

function run(){
const fileName = 'not exist!';

try{
    console.log(readFile(fileName));
} catch (error) {
    console.log(error);
    return;
} 
console.log('!!!');
closeFile(fileName);
}
run();