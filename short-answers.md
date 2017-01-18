# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: To prevent mistakenly reusing those variables which will result in an unexpected answer. It can also disrupt other functions that are using the same variable.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer: Closure is when a function is called within another function. An example would be currying or calling functions within react that reads from initial state.

1. What is scope? When is new scope created in JavaScript?
Answer: Scope is how far information can be passed or accessed in a function or application. A new scope is created when a function or variable is declared/made.

1. What are the pros and cons of using Promises instead of callbacks?
Answer: Promises prevent going into 'callback hell' which makes the code much easier to read. The cons of Promises can be when scope blocks certain data from being passed down.

1. What happens when you type a URL into a browser and hit enter?
Answer: When you type in a URL in the browser and hit enter, the URL request gets sent to the server and if that URL matches a route in the server webpage, it webpage data will get served back up as a response.