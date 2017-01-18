# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: because of accesibility and security, we don't want our variables to be accessed by any other function the margin of error can be much bigger. We just need that the right functions access the right variable. Also global variables will consume more memory and our program will run slower.


1. What is closure? Give an example of where closure is used in JavaScript.
Answer: a function that remembers another function. For instance, in javascripyt we use closure  a lot in promises.js when making API call and data come back then we can redirect that data to somewhere else.  

1. What is scope? When is new scope created in JavaScript?
Answer: Scope is  the be ability to access a variable or function within itself or within brackets. A new scope is created when a variable is ooutside of brackets or when a variable doesn't have the word var before variable name.  

1. What are the pros and cons of using Promises instead of callbacks?
Answer:the pros and cons of using Promises are that promises remembers and executes after is done at that point it has the information it needs to continue reading our code. In the other hand callbacks tends to execute right away without waiting for the information to come back.

1. What happens when you type a URL into a browser and hit enter?
Answer:when you type a URL into a browser and hit enter, you are making a request, the browser ask for  the server to look for the url if the server knows where the URL is allocated then the server serves up the file but if not the server ask another company DNS to look and request the file than the file is send back and the server send it to the browser and the browser display it. 
