# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:
- because, if the program is big, you might loose track of the variables and also, most important if you are dealling with scopes and closure the value of a global bariable might change dipending on  how the variables are use within a function. very easy to make mistakes. 

//////////
1. What is closure? Give an example of where closure is used in JavaScript.
Answer:
is when there is a function inside another function, the one inside of the main function can still use the arguent pasted to the main one. 
and example will be when creating an object constructure, and use the arguments passed to the  it inside another function.
function isClosure(name, last){
	name: ambar,
	last: gutierrez,
	var fullname = function(full-name){
		full-name = name + ' ' + last
		return full-name
	}
}
//a function inside a function
//////////

1. What is scope? When is new scope created in JavaScript?
Answer:
//gobal variable vs local variable 
scopes has to do more about on how variables are called and used. for example,  a local variable will need to have 'var' if it doesnt have it, then it is treated as a global variable. a global variable can be used/ and reference on other functions. but a local variable  will only live inside the fuction and cant be referenced. 


///////

1. What are the pros and cons of using Promises instead of callbacks?
Answer:

using promises has 3 states, a pending mode when it still waiting for an event to happen, a success--> when an event happened and had a success output. 
and  an unsuccessfull --> whish is when the action(promise happend) but didnt have a positive action.
 whereas a callback is a function(something that will happened) like  calling back a function but does not tell you if the outcome was succesful or not. 


1. What happens when you type a URL into a browser and hit enter?
Answer:

it will go to the url given website and page that matches the url.
if the url is not found it will return an error. 
