# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:

	It's generally considered bad practice to create global variables because it creates greater chance of error when the variable gets redefined or overwritten elsewhere. When you work with multiple files and million lines of code, it's better to keep variables local wherever possible so you know you're changing the correct thing.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:

	Closure is a function within a function that has access to the variables defined within the outter function. The function remembers the variable and is able to recall it again for the inner function to use. An example of closure might be a JavaScript object used to keep count of its keys. The inner function can update the count and return it. 

1. What is scope? When is new scope created in JavaScript?
Answer:

	Scope is the environment in which functions have access to. There is global scope where it lives on the outer realm and is available to be redefined over and over again. A new scope is created when new variables are declared, whether it's globally or locally. 

1. What are the pros and cons of using Promises instead of callbacks?
Answer:

	Promises are used to resolve or reject functions based on the parameters set. It's like going to a baker for a cake. He promises to have it ready in 3 days and if he doesn't have it, he refunds you. They're great because it catches things that are rejected. Callbacks are used more commonly and there are also less limitations. However, callbacks are often functions without rejection responses.

1. What happens when you type a URL into a browser and hit enter?
Answer:
	
	When you type a URL into a browser and hit enter, the browser translates the URL into an IP address and searches for its location. If it's a site you frequently visit, it might display immediately. However, if it's something your computer hasn't visited yet, the IP address would be sent out to various servers (and super server?) and the browser will receive the site's information when its been found.
