# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:

If we create global variables other functions might manipulate the same variables or we might have
two variables with the same names. It it good practice to make variables local to the function they belong to.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:

A closure is a function that is return from another function which remembers the variables
from the outer lexical environment.
A closure can be used in thunk functions as in redux.

1. What is scope? When is new scope created in JavaScript?
Answer:

scope is the environment where a variable lives. a new scope is created when a new function is created.

1. What are the pros and cons of using Promises instead of callbacks?
Answer:

Promises allows for asynchronous code. It also ensures that data will be returned after the promise is resolved and
allows to handle any error when a call is rejected.
Promises also avoids callback hell where we can have many nested callbacks inside a function

1. What happens when you type a URL into a browser and hit enter?
Answer:

when we type a URL into a browser the URL gets traslated by a DNS server into a valid IP address and then the DNS server
forwards it to the appropriate server to handle the client request which sends the request as an ajax call.
Then the server responds with the appropriate data or error if the link is not valid.