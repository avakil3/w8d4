// date = new Date();
// setInterval(function(){console.log(date.getSeconds())},1000);



// class Clock {
// 	constructor() {
// 	  // 1. Create a Date object.
// 	  // 2. Store the hours, minutes, and seconds.
// 	  // 3. Call printTime.
// 	  // 4. Schedule the tick at 1 second intervals.
// 		this.date = new Date();
// 		let hours = this.date.getHours();
// 		let minutes = this.date.getMinutes();
// 		let seconds = this.date.getSeconds();
// 		this.printTime();
// 		setInterval(this._tick(),1000);
// 	}
  
// 	printTime() {
// 	  // Format the time in HH:MM:SS
// 	  // Use console.log to print it.
// 		let time = `${this.hours}:${this.minutes}:${this.seconds}`; 
// 		console.log(time);
// 	}
  
// 	_tick() {
// 	  // 1. Increment the time by one second.
// 	  // 2. Call printTime.
// 		this.date.setSeconds(seconds+1);
// 		this.printTime();
// 	}
// }
  

//   let clock = new Clock();