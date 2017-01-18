# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):
********************************************************************************************************

1. Why is it generally considered a bad practice to create global variables?
Answer:

It's considered bad practice because global variables are exposed and can be easily changed. If a global variable is accidentally changed it can cause errors downstream. Plus data stored in globally exposed variables are more easily accessed by hackers.

********************************************************************************************************

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:

A closure is a function wrapped in a function where the inside function has access to the variables contained within the outer function and inner function. All functions and variables contained within the outermost function have awareness of their environment. Closures are useful when using helper functions.

********************************************************************************************************

1. What is scope? When is new scope created in JavaScript?
Answer:

Scope is how a variable or function is accessed in a JS program. Local scope is contained within a function and exists only within that function, so can only be accessed locally via that function. Global scope exists independent of any function so can be accessed from anywhere within the program, both globally and locally. New variable/function with local scope is created inside of a function declaration. New variable/function with global scope is created whenever a new variable or function is declared outside of a function.

********************************************************************************************************

1. What are the pros and cons of using Promises instead of callbacks?
Answer:

Promises are like callback functions but they are generally better to use because they can be fulfilled or rejected. If a function's return is successful then the promise will fulfill the callback function. However if there is an error then the promise will not be fulfilled but it will be able to properly respond with a rejection. In either case you can always make sure that your promise returns an appropriate response. This is useful in terms of nested loops to flatten the code and make it more readable and efficient and also in the case of asynchronous code because it will help prevent the program from slowing down due to waiting on asynchronous callbacks.

********************************************************************************************************

1. What happens when you type a URL into a browser and hit enter?
Answer:

The browser is able to determine the IP address by sending a request with the domain name to the DNS server. The DNS server if able to locate the domain name will response with an IP address. The browser will then send an HTTP request to the IP address. The server will determine how to respond to the HTTP request and send the appropriate data back to the browser.



