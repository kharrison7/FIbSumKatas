function rps(){

//Writes a fibbonacci sequence up to a certain number
let i;
let fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=33; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}

console.log(fib[33]);


let a = 0;
//fib = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumEven = 0;

for(a<=33; a<fib.length; a++){

    if (fib[a]%2 === 0){
      sumEven = sumEven + fib[a];
    }

}
console.log(sumEven)

}
