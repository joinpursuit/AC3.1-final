# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: Global variables are accessible by all functions/blocks contained within the global scope.
 In order to prevent unexpected side effects, accidental reassigning of variables and to ensure code functions as expected, variables should be defined locally whenever possible.

2. What is closure? Give an example of where closure is used in JavaScript.
Answer: A closure is a function contained within another function and is used to save the state of variables that exists within its scope. Example: Closures can be used to save the state of variables when performing a recursive function.

3. What is scope? When is new scope created in JavaScript?
Answer: Scope is a term used to describe the environment in which variables and functions exist. There are 2 types of scopes: Global and Local scope.
Though, local scope has access to all that exists in the global scope, the reverse is not true. The global scope does not have access to anything contained within the local scope.
In JavaScript, a new scope is created within the block of a newly defined function. All variables and functions within this function will have a scope local to it.

4. What are the pros and cons of using Promises instead of callbacks?
Answer: Promises help streamline asynchronous code. With promises, the behavior of code can be better managed by passing down anticipated data that may not be currently available, but is expected at a later time.

5. What happens when you type a URL into a browser and hit enter?
Answer: When enter is hit, the url gets sent as information packets (broken down into pieces of information) to the ISP, indicating a request for data. The ISP matches the URL's IP address with the server the information being requested lives on and sends out the request. The server receives the packets sent via the url containing the information being requested, retrieves the information from its database, before sending it back (as small packets) to the ISP. The ISP then receives the information, matches it with the IP address requesting the information before sending the information out. 
