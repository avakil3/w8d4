date = new Date();
// setInterval(function(){console.log(date.getSeconds())},1000);



class Clock {
	constructor() {
	  // 1. Create a Date object.
	  // 2. Store the hours, minutes, and seconds.
	  // 3. Call printTime.
	  // 4. Schedule the tick at 1 second intervals.
		this.date = new Date();
		setInterval(this._tick.bind(this),1000);
	}
  
	printTime() {
	  // Format the time in HH:MM:SS
	  // Use console.log to print it.
		let time = `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`; 
		console.log(time);
	}
  
	_tick() {
	  // 1. Increment the time by one second.
	  // 2. Call printTime.
		this.date.setSeconds(this.date.getSeconds() + 1);
		this.printTime();
	}
}
  
//   let clocky = new Clock();
// console.log(clocky.printTime());

// const readline = require('readline');
// const reader = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback){
	if(numsLeft > 0){
		reader.question("Input a number:", function (answer) {   
			let integer = parseInt(answer);
			sum += integer;
			numsLeft--;
			console.log(`Sum is ${sum}`);
			addNumbers(sum,numsLeft,completionCallback);
			
		 });
	} else{
		reader.close();
		return completionCallback(sum);
	}
	
}
// console.log(addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)));

Function.prototype.myBind = function(context){
	//this is "turnOn"
	//this.call(context)
	return () => {this.call(context)}
};

// Function.prototype.myBind = (context) => {this.call(context)};


class Lamp {
	constructor() {
	  this.name = "a lamp";
	}
  }
  
  const turnOn = function() {
	console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"


  
  
  const readline = require('readline');
  const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  function askIfGreaterThan(el1, el2, callback) {
    reader.question (`Is ${el1} greater than ${el2}?`, function(answer) {
        const response = answer;
        if (response === "yes") {
            callback(true);
        } else {
            callback(false);
        };
    })
  }

  function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
      madeAnySwaps = false;
      if (i < arr.length - 1) {
          console.log(i);
          askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
              console.log(arr);
              if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
                console.log(arr);
              } 
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
          })
      }
      if (i === (arr.length - 1)) {
          outerBubbleSortLoop(madeAnySwaps);
      }
  }


  console.log(innerBubbleSortLoop([6,5,4,3,2,1], 0, false, function (){} ))


function absurdBubbleSort(arr, sortCompletionCallback) {
}
