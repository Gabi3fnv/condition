"use strict";

let a=4
let b=4
let c=3

if (a == b){
    console.log("egal a b");
}
else if (a == c){
    console.log("egal a c");
}

else {
    console.log("egal a rien");
}

//CORRECTION//

"use strict";

let a =4;
let b=4;
let c=3;

switch(a){
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}