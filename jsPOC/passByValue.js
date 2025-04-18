/* javascript is generally pass by value for primitive data type (numbers, strings, booleans etc) 
and pass by reference for objects (including array)*/
var amar = 10, baba = 20;

// value of a and b before passByValue 

console.log(`values before calling passByValue function amar= ${amar}, baba = ${baba}`);

const swapValue = (amar, baba) => { // note here function parameter is creating local variable amar and baba 
    let temp = baba;
    baba = amar;
    amar = temp;
    console.log(`values inside function amar = ${amar}, baba = ${baba}`);
};

swapValue(amar, baba); 
/* notice here we are passing amar and baba so only value of amar 
and baba are copied as 10 , 20 not the reference of amar and baba 
which is reference of memory where these variables are stored so this is pass by value example*/


console.log(`After calling Pass by value 
    Function -> amar =${amar} baba = ${baba}`); 

/* conclusion: pass by value will not change the original variable value */

