// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();
    
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

{
    let letBlock = "let block";
    const constBlock = "const block";
    var varBlock = "var block";
    console.log(letBlock);
    console.log(constBlock);
    console.log(varBlock);
    letBlock = "let block 2";
    console.log(letBlock);
    varBlock = "var block 2";
    console.log(varBlock);
    // constBlock = "const block 2"; // error
    console.log(constBlock);
}
letBlock = "let block 3";
console.log(letBlock);
varBlock = "var block 3";
console.log(varBlock);
constBlock = "const block 3";
console.log(constBlock);