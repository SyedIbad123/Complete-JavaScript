//  The Switch statement evaluates an expression, matching with the expression's value against a series of case clauses, and executes statements after the last case clause with  matching value, until a break statement is encountered.

//  Example:

 const expr = 'Papayas';
 switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
 }


 //  Breaking and Fall Through...

 //  You can use the break statement within a switch statement's body to break out early, often when all statements between two case clauses have been executed. Execution will continue at the first statement following switch.
 // If break is omitted, execution will proceed to the next case clause, even to the default clause, regardless of whether the value of that clause matches. This behavior is called "fall-through".

 //  Example:

 const foo = 0;
 switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0:             // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1:             // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break;            // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
 }
// Logs 0 and 1
