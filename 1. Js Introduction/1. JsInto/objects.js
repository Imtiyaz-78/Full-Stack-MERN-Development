 
 // Object
 // it is key value pair this expect

 let obj = {}

 let captain = {
     FirstName : 'Steve',  // String store 
     LastName  : 'Rogers',
     friends   : ['Bucky', 'Tony Stark', 'Dr Banner'], // you can Store array in object 
     isAvenger : true,    // you can store boolean in object
     age       : 150,
     
     address:{
         state     : 'New York',
         city      : 'Manheten',
         Pin_Code  : '12345',
     },


     sayHi : function fun(){
         console.log('Cap is Hi')
     }
 }
  



   // Accesss of Object:-  By using Dot Notation or Bracket Notation
   
   //console.log(captain)  // print object

/*
   // 1. Dot Operator 
   console.log(captain.FirstName)

   // 2. Bracket Notation 
   console.log(captain['age'])
   
   // Calling Of function 
   captain.sayHi()

   // update of opject
        captain.isAvenger = 'False'
        console.log(captain)

   // Create something inside an object 
         captain.movies = ['first Avenger', 'Age of Ultron', 'Endgame']
         console.log(captain)
 */  
  
   
/*
   // Delete a Single Property in the object 
         delete captain.age    // Delete is a keyword in javaScript
         console.log(captain)
*/
  

/*
   // Special loop in object ( i.e for in loop ) // For loop javaScript mein object pr lagatey hai      jo key and value expect karta hai 

          for(let key in captain){
          console.log("key->", key, 'Value->', captain[key])
     }

*/

    










