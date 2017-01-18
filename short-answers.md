# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: when you create a global variable you may accidently refer to it within a function unintentionaly, also if you are working on a front end proect you are adding a veribal to your window that will now persist on every page and may be rewritten.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer: closure is when you use a function (since in javaScript only thing that creates a new scope is a function) to hold the value of a variable and the nested function within that has acess to it. A great example of a closure is a thunk. what ever you pass through the first function will be held in place till you call the function again.

1. What is scope? When is new scope created in JavaScript?
Answer: scope is what variables you have access to. A new scope in javascript is only created with function.

1. What are the pros and cons of using Promises instead of callbacks?
Answer: the pros of using promises is that you can controle the order of when things are called, putting a halt to the async of js but nested promises are difficult to handel. also promises put a halt to async of js waiting for one promise to resove before moving onto the next.

1. What happens when you type a URL into a browser and hit enter?
Answer: the url gets turned into an ip adress and you go to that server and GET what ever it sends back to you.
