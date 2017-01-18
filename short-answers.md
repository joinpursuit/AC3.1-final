# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: 
  It's very easy to make a variable with the same name as the global variable. This creates a scope problem and can lead to weird bugs. 
  A global variable is avalable to all functions written in the same file. It can be modified by any one of them and so isn't a reliable way to keep track of values.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:
  A closure is used when a function requires a variable outside of its scope. In this case it's possible to allow the function to access the variable by creating the function in the same 'environment' that the variable occupies.

1. What is scope? When is new scope created in JavaScript?
Answer:
  Scope is basically the information or values a function has access to. Any variables declared inside a function can be used by that function and generally any nested functions it contains. However, other functions wont have access to those variables. They can't be modified or used by outside functions. This makes those variables reusable, and it also prevents side effects from affecting the outcome of the function.
  New scope is created everytime a new function or variable is declared.

1. What are the pros and cons of using Promises instead of callbacks?
Answer:
  One of the reasons promises were created was to avoid having a long list of nested callback functions. It is very easy to miss a parenthesis or bracket and have the sequence not execute correctly. Promises also make it very clear what information is being passed on to the next function and how that information is used.

1. What happens when you type a URL into a browser and hit enter?
Answer:
  A GET call is sent off by the browser to s server. There the url will get matched with a database that contains the information requested. Finally the database sends back the information to the server which then sends it off to the browser.










