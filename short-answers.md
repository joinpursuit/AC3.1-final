# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?

Answer: Global variables created in functions can interfere with code outside of the function and start messing with all sort of stuff. You might end up accidentally overwriting data as well. It can make your code inconsistent and inaccurate.

2. What is closure? Give an example of where closure is used in JavaScript.

Answer: A closure is when a function is declared inside of another function and has access to all the "parent"'s functions variables and arguments. A closure can be a nice way of getting the same utility of a global variable while not actually making a variable global. It can be handy for things like recursion, where you'd want to keep a variable in the parent function while the actual recursion happens in the inner function. This way the value of the variable doesn't revert with each new recursive function call.

3. What is scope? When is new scope created in JavaScript?

Answer: Scope describes what variables and values are accessible by which functions. New scope is created with each new function declaration, the curly braces of a function serving as the borders (although in ES6, `let` and `const` allow you declare new scope within each "block", a block being anything within curly braces {}. The variables inside for loops can now be contained within just that for loop declaration, for example). All variables and values inside of a parent function's scope are accessible by it's "children", but not vice-versa.

4. What are the pros and cons of using Promises instead of callbacks?

Answer: Since in JavaScript most actions will happen independently of the each other, asynchronously, things can get annoying when you want the value of one action before running another action. Promises are nice for this since they essentially will not run until whatever value you want from some initial action returns. This is especially nice for backend server and database stuff where you usually want a certain flow of actions happening in a certain order usually passing info down to each other. Promises are also nice because you don't get that ugly look of nested callbacks within callbacks creating a unreadable slope of callback hell.

However, with callbacks you could do multiple things at once, allowing you to do things like maybe render something to a page even though every function for that page may not be done running yet.

5. What happens when you type a URL into a browser and hit enter?

Answer: You are essentially making a GET request with your browser to whatever address you just typed in. First the request is handled by your IP provider which forwards the request to some sort of DNS server somewhere tht acts like a sort of directory where it looks for the domain name you've requested and then forwards the request to the appropriate IP address attached to that domain name leading the server of the actual website you've requested. The site server listening for '/' will then fetch whatever data or response that server is set to respond with in case of GET requests to '/'. It then sends that data or response back to your computer where it's, usually, displayed on your screen. (assuming the website and server both exist and/or are currently working).
