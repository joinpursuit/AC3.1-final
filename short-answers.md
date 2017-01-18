# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: When a varibale is defined globally, its value can be accessed from any place inside the same program and it can be altered. So we cannot predict the value that may be we will be expecting.






1. What is closure? Give an example of where closure is used in JavaScript.
Answer:
     A function that is defined inside of another function and can have access to the variables of parents function is said to have closure.
     function makeItem(cost,name){
       var description = 'the';
          function item(){
            return (cost)
          }
     }



1. What is scope? When is new scope created in JavaScript?
Answer: when we define variables scope is created which means where this variable will be available in the program. and how its value can be changed or updated.When we exit out of the function the varibales defines will be earsed from the memory and more memory will be availbe to use.

1. What are the pros and cons of using Promises instead of callbacks?
Answer:
     Promises are used for to handle asynchronous calls and they have the benefit over the call back functions so we can wait for the result of one function before moving to next call.If the function is successful it has the data and we can access and use the data. If unsucessful we can catach the error.


1. What happens when you type a URL into a browser and hit enter?
Answer: When we type url into browser it is changed into address of 4 set of numbers 0-256 each know as iv4 and it goes to the specified address on the server and get the required informations requested from the server. If we type something wrong in the url it will be not converted into the right address and the proper server at that address will be not found and we will the error 404.
