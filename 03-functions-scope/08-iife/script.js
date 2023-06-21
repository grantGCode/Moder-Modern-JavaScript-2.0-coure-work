// The IFFE syntax looks like this 

/* (function () {})();	*/

// Create an unnamed fuction in the first set of ()

(function () {
	const user = 'John';
	const hello = () => console.log('Hello from the IIFE');
	hello();
	})();

// You can also add Param to the IIFE becaues the function nestted inside the syntax is a regular function.

	(function (name) {
	console.log('Hello ' + name);
	})('Shawn');
	

/* you can name the function inside the IFFE but it's not recommended because if you call the
function of the same name inside the scope of the IIFE function you run the risk of causing an
infident loop */
