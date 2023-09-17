// The (time) method starts a timer in the console view. It allows you to time code for testing purposes.

// Example:
console.time();
for(let i = 0;i<10000;i++){
    console.log("2023");
}
console.timeEnd(); // It is used to end the time.

// Output:

// 10000 times (2023)
// default: 3026.605224609375 ms