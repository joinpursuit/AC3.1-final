# Short Answer Questions

For the following five questions, type out your answers in 1-2 paragraphs (no coding required):
####---------------------------------------------------------------------------------------------------

1. Why is it generally considered a bad practice to create global variables?
Answer:

It is generally bad practice to create Global Variables, because Global Variables pollute the global scope
and may interfere with any local variables you may have initialized. Global variables- for example, may interfere with any algorithms you may have within For-loop(s) of a function. It is always best practice to separate out your Scope to avoid any kind of interferance.


####---------------------------------------------------------------------------------------------------

2. What is closure? Give an example of where closure is used in JavaScript.
Answer:

A Closure is a stack frame which is allocated when a function starts its execution- not adter the function returns as if a stack frame were allocated on the heap and not the stack. It is an inner function that has access to outer function's variables. The Closure has access to three scope chains- its own scope, its outer function's variables and it has access to Global variables. Closures are functions that refer to independent variables which are used locally, but defined in an enclosing scope. These functions remember the enviornment in which they were created. 

Closures are used frequently in Node JS and also in jQuery. A good example of a closure is when we have for example, an empty array, and then a jQuery event-listener like onClick.  Our event handler function's inner scope has access to the empty array outside/ above the event listener function.



####---------------------------------------------------------------------------------------------------

3. What is scope? When is new scope created in JavaScript?
Answer:

Scope is the regional or global enviornment in which a variable can be accessed and has any kind of jurisdiction. For example, a variable initialized without the keyword 'Var' has global scope which means that it has global jurisdiciton and can be accessed anywhere. Another example is when a variable with the keyword 'Var' is initialized inside of a function. This variable now can be accessed only within that particular function, and is undefined anywhere outside of it, unless it was initialized without the 'Var' keyword.


####---------------------------------------------------------------------------------------------------

4. What are the pros and cons of using Promises instead of callbacks?
Answer:

Promises allow developers to write asynchronoys code in a more synchronous fashion.

The pros of using Promises instead of Callbacks is that Promises may be available whenever you want them, but more importantly, Promises provide more efficient programming and more readable code. Promises and Callbacks both can do the same thing, and handle asynchronosity, but promises are more readable. 

A pro of using a callback is that callbacks are executed at the end of a given task which makes it more synchronous.


####---------------------------------------------------------------------------------------------------

5. What happens when you type a URL into a browser and hit enter?
Answer:

When you type a URL into the browser and hit enter, the Server sends a GET request to the Database and fetches the information you want. The Database then gives the server a token, kind of like a hotel room-key. A session-ID is created, along with other information called Cookies. Then, the information you requested is sent back from the server to your browser. 




