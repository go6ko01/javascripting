     var a = 4;
     function foo() {  
         var b = a * 3;

         function bar(c) {  
         var b = 2;  
         console.log( a, b, c );  
         }  
       
         bar(b * 4);  
     }
     foo();
