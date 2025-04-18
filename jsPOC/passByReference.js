/*Pass by Reference means that when you pass a variable (specifically, objects or arrays) to a function, 
JavaScript passes the reference or memory address of the variable, not a copy.
This means any changes made to the variable inside the function will affect the original variable outside the function.*/

function PassbyReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;

    console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
    a: 10,
    b: 20

}
console.log(`Before calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj)

console.log(`After calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);