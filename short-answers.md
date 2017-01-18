# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: 

Simply because you might accidentally alter the global variable later down the line while coding without realizing which will stop everything in your project from working. Debugging a global variable in a huge project will not be fun and a rookie mistake that can easily be prevented.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:

Closures enables a queue like structure to our javascript code. Simply put if you want part of a function to run as a callback it is practical to use closures. Our filserve functions in the back-end is a great example of closures as we define respond and request as parameters and deal with types of data independently.

1. What is scope? When is new scope created in JavaScript?
Answer:

Scopes are variables declared in a limited area where our functions can access. Global scope is when a variable is accessible in our entire script and it is best practice to keep it local scope where only nested functions have access to these variables.

1. What are the pros and cons of using Promises instead of callbacks?
Answer:

Promises are great as it is completely async from the preceding function and waits in line before firing it's own function. The con is this new function cannot access varibles or functions within that preceding function, only what the preceding function outputs.

1. What happens when you type a URL into a browser and hit enter?
Answer:

If the server is live and listening it will receive the request from the remote machine and will spit out a response. The response will vary depending on the setup of the server and if the remote machine has the credentials to access what's in the database.
