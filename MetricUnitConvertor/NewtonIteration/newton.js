
let quetion=prompt("Do you wish to calculate a squareroot (y or n)")
while(quetion=="y"){
let num=quetion=prompt("Enter a positive double to find squareroot: ")

function findSqrt(num){
    let err=0.0001;

    let guess=num;

 
    while(Math.abs(guess*guess-num)/num>err){
        console.log();

        guess=(guess+(num/guess))/2;
    }
    return guess;
}

let squareroot=findSqrt(num);

console.log("The sqrt of "+num+" = "+Math.round(squareroot));
    quetion=prompt("Do you wish to calculate another squareroot (y or n)")
}