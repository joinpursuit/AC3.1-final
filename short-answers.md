# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:
Alot of programming is organization. It is best to organize variables in the scope that they are used in because it makes the code cleaner and easier to read. It also allows other people to be able to follow along better.
Crowding the global space can make code suspecptible to errors because it is easier to loose track of what each variable is refering to. Global variables can be changed unintentially because every part of the program has access to it.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:
Closures are variables that are made locally and are able to remember the scope that they were created in and are able to be called for later usage. It is like they freeze their environments. This allows us to write code that is safe and private to other areas of our program. Closures are used in high order functions where you have a function that uses another function giving the inner function access to the variables of the outer function. However, the outer function doesn't have access to the variables of the inner function.

1. What is scope? When is new scope created in JavaScript?
Answer:
Scope refers to the enviroment that a variable was created in. Variables can have global scope which means all parts of the program know what that variable is. Variables can be defined in local scope as well which means that the variable is private and only recognized in the enviroment that it was created in such as in functions. 
New scope is created in a lot instances of javascript but mainly in  functions. Also in recursion.

1. What are the pros and cons of using Promises instead of callbacks?
Answer:

Promises allow us to write code in an asynchronous way. 
Promises allow us to write our code in a way that allows us to order which events happen in a definite order.
They allow us to write code that is  clean and neet and easy to follow.
Callbacks can get messy and when code becomes bigger their is risk of getting caught in 'call back hell'.
Callbacks can make our programs slow


1. What happens when you type a URL into a browser and hit enter?
Answer:
Your search begins to go to a master computer which intercepts your request and tries to search its cache which holds the searchs of millions of computers who made searches. If the computer has results that you are looking for in its own cache then it is able to send you info back fast but if it doesn't have the results then it has to perform the opearation of looking it up which is slow. Essentially it is trying to save itself from having to repeat operations that it has performed before.