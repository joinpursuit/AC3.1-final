# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: Using global scope is bad practice because it is accessible by the whole javascript program and 
        if they can be redefined, thuse breaking something that depeneds on that variable. 

1. What is closure? Give an example of where closure is used in JavaScript.
Answer: A closure is a function within another function. The function on the inside will create 
        scope on the outside function. Closures can also return a function.
        A closure is used in 

1. What is scope? When is new scope created in JavaScript?
Answer: Scope is a region where a variable is defined. A new scope is created when either 
        a variable using the var keyword is used inside the body of a function or a variable 
        is declared with or without a var keyword outside of a function.

1. What are the pros and cons of using Promises instead of callbacks?
Answer: Callback Pro: can run very quickly
                 Con: It is not always guranteed to work, no only that but it cant do anything else while running.
        Promise  Pro: There is built in error handling for them. 
                      It can also do other things while the process isnt complete.
                 Con: It can be a little slow.

1. What happens when you type a URL into a browser and hit enter?
Answer: A GET request is sent to a server to resolve the webpage to your browser.
