# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

###1. Why is it generally considered a bad practice to create global variables?
Answer:
- In terms of object oriented programming (?), encapsulation (?) or the general concept of black-boxing in programming involves information hiding: it is recommended that a function/object make only its most essential part(s) available to other programs accessing it.
- A global variable is made available to the entire program. Any function accessing a global variable cannot have full control over it, as it maybe accessed/modified by other functions as well


###2. What is closure? Give an example of where closure is used in JavaScript.
Answer:
- Variables defined inside a function only exists for the duration of the function call, after which they are removed from the execution environment. 
- A closure is a function that keeps its variables in the execution environment even after the function finishes running, in effect 'freezes' its variables, making them available to functions nested inside.
- A thunk in JavaScript is an example of a closure


###3. What is scope? When is new scope created in JavaScript?
Answer:
- Scope is the environment in which variables are made available to any operation using it.
- A scope is created whenever code is run. 

Global Scope: available throughout the program
	Eg: 
```javascript
var globalVar = 10;
function secretFunc() {
	console.log("logging globalVar:", globalVar) // 10;
} 
```
Local Scope: available locally in the scope it was defined
```javascript
const func1 = () => let func1Var = "func1";
const func2 = () => func1Var ? let func2Var = func1Var : "func1Var is: " + func1Var;
func1(); // 'func1'
func2(); // 'func1Var is undefined' 
```


###4. What are the pros and cons of using Promises instead of callbacks?
Answer:
Pros: 
	- to avoid callbacks multi-level-nested inside callbacks aka. "Callback Hell"
	- easier to follow data flow
Cons: 
	- not all promises implementation are created equal



###5. What happens when you type a URL into a browser and hit enter?
Answer:

- The browser will convert the URL into a corresponding IP address via DNS lookup (Domain Name Server ?)
- The router uses the converted public IP address to look for the server that contains the data requested (eg. the web page). This may involve hopping through a network of routers around the world until the final destination.
- When the server is reached with a HTTP Request, programs run on the server aka APIs (Application Programming Interfaces) will respond according to (in this case the default GET ) HTTP Request method.
- The API mounts a function (middleware) defined at this particular endpoint: get all data from the database: eg. index.html, all posts etc.
- All these data are sent via packets traversing the entire stacks (eg. application layer, transpotation, physical etc. ) until it is rendered by the browser to the user.