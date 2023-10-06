 //  The for loop creates a loop that consists of three optional expressions, enclosed in parenthesis and seperated by semicolons, followed by a statement.

 //  Example:

 for(let i = 0 ; i<9 ; i++){
    console.log(i);    // 0 1 2 3 4 5 6 7 8
 }

 //  Optional for Expressions.

 //  Example 1:

 let i = 0;
 for(;i<9;i++){
    console.log(i);  //  0 1 2 3 4 5 6 7 8
 }
 
 //  Example 2:

 for(let i = 0; ; i++){
    console.log(i);   //  0 1 2 3 4 
    if(i>3){
        break;   //  Break the loop in order to not create infinite loop
    }
 }


 //  Example 3:

 let j = 0;
 for( ; ; ){
    if(j>3) break;
    console.log(j);   //  0 1 2 3
    j++;
 }