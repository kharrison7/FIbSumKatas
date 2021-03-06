
// function rps is built to sum all of the even numbers of the fibbonacci sequence under 4 million.

function rps(){

//Writes a fibbonacci sequence up to a certain number
let i;
let fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=2; fib[ fib.length - 1 ] < 4e+6; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
}

console.log(fib[33]);


// This selects only the even numbers to sum up.
let a = 0;
//fib = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumEven = 0;

for(a<=33; a<fib.length; a++){
    if (fib[a]%2 === 0){
      sumEven = sumEven + fib[a];
    }
}
console.log("This is the answer " + sumEven)
}




// The folowing is code from: http:www.w3resource.com/euler-project/euler-problem2.php

function solution()
 {
    var fibno = [ 1, 2 ], sum = 0;

 function cal(arr )
  {
   return arr[ arr.length - 1 ] + arr[ arr.length - 2 ];
 }

  while ( fibno[ fibno.length - 1 ] < 4e+6 )
    {
      fibno.push( cal(fibno) );
    }

    fibno.forEach( function(n)
     {
        if ( n % 2 === 0 )
        {
            sum += n;
        }
    });
    return sum;
}

console.log(solution())


//This is for fizzBuzz
function fizzBuzz(){

//Writes a an array up to 100.
let i;
let fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for(i=1; fib[ fib.length - 1 ] < 100; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = i;
    //console.log(fib[i]);
}

fib.splice(0, 1);
console.log(fib[0]);
console.log(fib[1]);
console.log(fib[2]);
console.log(fib[3]);

let a = 0;
//fib = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for(a=0; a<(fib.length-1); a++){
  if(fib[a]%3 === 0 && fib[a]%5 === 0){
    console.log('FizzBuzz');
  }
    else if (fib[a]%3 === 0){
      console.log('Fizz');
    }
    else if (fib[a]%5 === 0){
      console.log('Buzz');
    }
    else{
      console.log(fib[a]);
    }
}
 console.log(100);

}
