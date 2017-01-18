# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:
	It is generally considered bad practice to create global variables because creating global variables can cause variable value to change especially if it is affected by some other function. It's best practice to keep variables within the specific scope you need them for so you can keep track of all your varibales and any errors or changes in your return value. 

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:
	A closure is when a function has access to variables within its own scope and other functions that maybe wrapped within the main function. For example, if you create a function called countNumbers and then insert another function inside called countLetters. If you for example also created a variable within countNumbers, that variable will be accessible by the second function called countLetters. It creates a scope that makes the variable available to the inner functions but only within the scope of the main function. It is like creating a local global scope of the variable that can be accessed by the inner functions.

1. What is scope? When is new scope created in JavaScript?
Answer:
	Scope is the accessibility of a variable. There are two kinds of scope, global and local. Global scope means that a variable is accessible by any function anywhere. Local scope means that the variable is only available in the function or context in which it was defined in. 

1. What are the pros and cons of using Promises instead of callbacks?
Answer:
	Promises are ways to perform asynchronous actions. One important reason why promises are used is to make sure you don't go through 'callback hell' which is when many callbacks are nested within each other. Promises are great to clarify, organize and write clean code to avoid the callback issues. On the otherhand, if you don't have many callbacks, you could use that instead of Promises because Promises can get complicated if you want to just write out a simple callback function. In that case, it would be better to write it out as a callback rather than a promise. 
 
1. What happens when you type a URL into a browser and hit enter?
Answer:
	When a URL is typed into a browser, the URL is given a specific http request and then sent back to the server that performs the request whether it is a GET, POST, PUT, DELETE request and then sends that data back the browser. The URL is basically checking against the server side and then retrieving data to bring to the client side. 
