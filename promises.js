//// PROMISES ////

// Promises are a way to manage async without passing callback functions or nesting.


// What is a promise?

// A promise is just a JS constructor with a few methods:
// 	- All
// 	- Race
// 	- Reject
// 	- Resolve
// 	- Then



// Then is like a listener. 
// All is like a listener for an array of promises. Once they are all done, run the code.
// Race is like a listener for an array of promises. As soon as one of them is done, run the code.



// Resolve and reject are callbacks.
// 	- Resolve will run once the async code is finished.
// 	- Reject will run if the code fails (such as a 404, 301, etc... basically anything that is not a valid response)


	// Example:

		// let myFirstPromise = new Promise((resolve, reject)=>{
		// 		setTimeout(function){     				...Note: setTimeout is used in the example as a stand-in for an AJAX or SQL request
		// 			resolve("Success!")
		// 		}, 250);
		// });

		// console.log(myFirstPromise)

		// myFirstPromise.then((successMessage)=>{
		// 	console.log(successMessage);
		// 	console.log(myFirstPromise);
		// })

		// console.log(myFirstPromise)



// The results will be as follows:
//		Both console.log(myFirstPromise) statements will run immediately and return <pending> since the setTimeout function delays the completion of the myFirstPromise function.
//		Then, once the myFirstPromise function runs, the successMessage and myFirstPromise will print. This is because of the .then method.



// Example from mozilla:

	// Instead of:

		// function successCallback(result) {
		//   console.log("It succeeded with " + result);
		// }

		// function failureCallback(error) {
		//   console.log("It failed with " + error);
		// }

		// doSomething(successCallback, failureCallback);


	// You can run:

		// let promise = doSomething();
		// promise.then(successCallback, failureCallback);

	// or 

		// doSomething().then(successCallback, failureCallback);



// Promises array

	// function one(){
	// 	return new Promise((resolve,reject)=>{
	// 		setTimeout(()=>{
	// 			resolve("1 second has passed");
	// 		}, 1000)
	// 	})
	// }

	// function two(){
	// 	return new Promise((resolve,reject)=>{
	// 		setTimeout(()=>{
	// 			resolve("2 seconds have passed");
	// 		}, 2000)
	// 	})
	// }

	// var promiseOne = one();
	// var promiseTwo = two();

	// var promisesArray = [];
	// promises.push(promiseOne)
	// promises.push(promiseTwo)


	///// ALL /////

	// All waits until EVERY promise in the array has resolved.
	// It returns an array of each argument passed to each resolve.

	// Promise.all(promisesArray).then((nameYourOwnResolveParameter)=>{
	// 	console.log("All done.");
	// 	console.log(nameYourOwnResolveParameter);
	// })

		// This function will, once BOTH promises resolve:
		// 		Return the console log message
		// 		Return an ARRAY with both resolve arguments (in this case "1 second has passed" and "2 seconds have passed")



	///// RACE /////

	// Race waits until the FIRST promise in the array has resolved.
	// It returns the argument passed to the resolve of the first promise to resolve.

	// Promise.race(promisesArray).then((nameYourOwnResolveParameter)=>{
	// 	console.log("Someone is done.");
	// 	console.log(nameYourOwnResolveParameter);
	// })

		// This function will, once BOTH promises resolve:
		// 		Return the console log message
		// 		Return the resolve argument of the first promise to resolve (in this case "1 second has passed")








