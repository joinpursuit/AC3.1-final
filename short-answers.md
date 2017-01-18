# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:

Scope is the reason it's bad to create global variables. Creating global variables allows those variables to be used in any scope, which can create conflicts and unpredictable results in code. Using local variables allows the coder to control the scope that variable has access to. 


1. What is closure? Give an example of where closure is used in JavaScript.
Answer:

A closure is a function within a function. That function has access to it's own variables, the outer function's variables, and global variables too. A nested loop is an example of a closure.

1. What is scope? When is new scope created in JavaScript?
Answer: 

Scope is the set of information a variable has access to. It determines what variables mean wihtin the boundaries of the scope. Nothing outside of a particular scope has to have the same meaning inside of a new scope. A new scope is created inside of a function. 


1. What are the pros and cons of using Promises instead of callbacks?
Answer:

Promises are simplified callbacks. It helps remove the concern and confusion of nested callbacks. It makes it easier to read your code. 


1. What happens when you type a URL into a browser and hit enter?
Answer:

When you type an URL into a browser and hit enter, the request is send to a DNS that connect you to the server/host. It makes a request for data, and the host sends it back to the browser. Sometimes the url is not stored and will have to be looked-up. So the initial request is sent to a main router that will send the request to another router that will find the host. 
