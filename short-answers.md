# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: 

It is generally considered a bad practice to create global variables because they have the power to modify the state of your function. Global variables are considered to be undeclared variables that are written outside of a function. These variables can get in the way of the time complexity of a function as well causing your function to take longer than needed and potentially leading your application to a crash. 

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:  
A closure is a function that is being declared inside of  another function but has access to the outside . An example where a closure is used in javascript is when a function has been delcared  and within that function  is an anonymous function calling upon the first function to perform some type of task. 

1. What is scope? When is new scope created in JavaScript?
Answer: 
A scope is a set a variables ,objects or functions that you can have access to. A new scope is created in javascript automatically once you declare a variable inside or outside of a function. Depending on where you declared the variable  it will determine whether that variable now has a local or global scope. 

1. What are the pros and cons of using Promises instead of callbacks?
Answer: 
The pros and cons of using promises instead of callbacks is that with promises, it does not allow a function to wait until the set timeout has finished, instead it allows you to perform both the .then and .catch method who catches errors immdiately as soon as they come across one and allows you to continue doing more with your function right after an ajax request has been made. It is considered to be more cleaner, readable, faster and reliable rather than using a normal callback. 

1. What happens when you type a URL into a browser and hit enter?
Answer: Once a person types a url into a browser and hits enter, an ajax call has now been fired off which means that the url is going to communicate with the server who is located in the backend of our application. This url should be the same as the created route within our database so that it can perform the correct method (whether it is a get, post, put or update ) that will do something with the content of our webpage. It can be anything from displaying information, clicking on a button, filling out a form etc. 


