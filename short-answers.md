# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:

Global variable increase the chance for variable names to collide. It reduces available names you can give your functions as well. I can also be confusing to read code with tons of global variables. The only global variables in your code should be functions.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:

A closure is an object that preserves the value of variables declared within it. It also isolates those variables to only be accessible via methods returned by the closure.

1. What is scope? When is new scope created in JavaScript?
Answer:

A scope determines what variables are available. There are three types of scope: global, local and block. Functions determine if a scope is global or local. variables outside a function are global and are available anywhere. Variables inside a function are local and can only be accessed within that function. ES6 introduces block scopes with two new keywords: let and const. A block is defined as anything within a pair of {}. if statements, loops, even functions are considered a block.  

1. What are the pros and cons of using Promises instead of callbacks?
Answer:

promises requires an es6 compatible browser, babel or a library. Callbacks don't have that extra headache. Promises are easier to chain and reuse although they need to be defined beforehand. Promises also have built in error handling methods.

1. What happens when you type a URL into a browser and hit enter?
Answer:

Your browser sends your request down the tcp/ip model hierarchy where it is emitted as an electrical signal through your network card. The signal will go past your modem where it will pass through a series of servers that cache the location of webservers. Once one of the servers finds a match to your request in its cache it redirects your request to the proper webserver.
