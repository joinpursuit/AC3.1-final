# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: The main reason is one function should not effect another function's functionality. And creating and changing global variable imposes greater risk of that happen. Another reason is  because of security. Someone for the outside word can effect your app with access to global variables.  

1. What is closure? Give an example of where closure is used in JavaScript.
Answer: A closure stores passed in arguments information into another function to be used at a later time. A curry function uses closure. 

1. What is scope? When is new scope created in JavaScript?
Answer: There is global and local scope. Scope contains variables that can only be used within itself, While another scope does not have access to those variables. Scopes are created With in a function and loops. The let keyword creates a scope as well. 

1. What are the pros and cons of using Promises instead of callbacks?
Answer: Promises are used to prevent callback hell, and create cleaner code. Disadvantage:you first have to set up a promise. Advantages: are there are now built in prototypes. My new favorite one is Promise.all with a spread chain. 

1. What happens when you type a URL into a browser and hit enter?
Answer: The DNS world begins. Once the user hits enter the URL then goes to the router. The router checks to see if it has that address in its directory. The directory is created when anyone who has requested a site through the router. If the first router has the URL address in it directory, it sends it back to the user. If it does not have the address it connects to another router and ask does it know the address. Once again it checks to see if the address in the directory. Routers keep checking communicating to one another checking for the address until it hit the master router with the absolute answer to the where the address is. 
