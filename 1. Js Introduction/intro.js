

   // Today Topic:- 
   /*
   1. Enviroment
   2. variables(Let, var, const)
   3. If-Else
   4. Problem with var and Const
   5. String-Method:- length, toupperCase, toLowerCase, replace, concat, trim,  extracting:- slice, substrt
                    

  */



// console.log('Hello from the Node')
// JavaScript Engine 
// 1. Chrome:- V8 Engine
// 2. firefox:- spider Monkey
// 3. Internet Exproler

// Variable declaration with let var and const
var a // first the variable is initilized with undefined

// console.log(a)
// a = 'Hello' // Dynamic Behavior of JavaScript
// a = nul
// a = true
// console.log(a) 
 
 //Javascript is a synchronus language and   Single threated Language 

 /*
 first Problem with var - Redacleration
var b = 2
console.log(b)
var b = 'I am string'
console.log(b)
 
*/

/*
let b = 2
console.log(b)
let b = 'i am string 2'
console.log(b)
*/

/*
// Loops and If-else

   let flag = true
   var num = 2;
   for(let i = 2; i*i<=num; i++){
       if(num%i==0){
           flag= false
           break
       }
       
    
   }

   if(flag){
    console.log('Number is Prime',  num)
    }
  else{
    console.log('Number is not prime', num)
 }
*/
  
  
//   2nd problem with var - scoping - function and block scoping
  
/* 
  if(10%2==0){
      var c = 2
      console.log(c)
  }
  console.log(c)
  // var is function scope
  */

  /*
  if(10%2==0){
    let c = 2
    console.log(c)
  }
  console.log(c)
         
  // I recommend not use var 
  // Let is block scope

   */
  
  // 5. String and string Method
  
  /*
   let str = 'JavaScipt'
   console.log(str) 
  
   
   /*
  // String Method
  let str =  'Imtiyaz Coder'
  console.log(str.length)
 */
  
  // string Method 1. Extracting a part of string 
 // slice(star, end )- return sliced array from starting index to ending-1

  /* let str = 'Pepcoder'
  let slicedStr = str.slice(3, 7) // last index is excluded 
  console.log(slicedStr)
*/


// String method 2. substr method 
//substr(start, length)

/*
let str = 'pepcoder'
let subString = str.substr(3, 4) // Strating index and the length of the Word
console.log(subString)

*/

// String Method 3:- replace-Method:- This is expect the word to be replace as first arguments and the replacement as second argument

 /*
  let str = 'Hello Coder'
  let hey = str.replace('Hello', 'Hey')
  console.log(hey)
*/

// String Method 4:- toUpperCase and toLoweCase
 /*
  let text1 = 'Hello Imtiyaz '
  let text2 = text1.toUpperCase(text1)
  console.log(text2) 
*/

/*
let text2 = 'Hello Imtiyaz '
let text3 = text2.toLowerCase(text2)
console.log(text3) 
*/

// String Method 5:- Concatenate- Method
 /*
   let firstStr = 'Hello'
   let secondStr = 'Coder'
   let concatenate = firstStr.concat(' ', secondStr)
   console.log(concatenate)
*/

// String-method 6:- Trim-Method:- For remove extra Spaces this funtion is help you 
 
 /*
   let text = '  Hello World   '
   console.log(text)
   let trimedText = text.trim()
   console.log(trimedText)
*/
















