# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer:
  You can unintentionally cause side effects. If you mutate some variable that was declared
  somewhere globally and not in your local scope that function becomes an impure function and
  the global variable now it becomes more difficult to isolate the function and debug any possible errors.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer:

  Closure is a technique used in javascript to save/freeze the
  scope of a function. This allows you to access the scope of that function
  in the future and well outside of that function.

1. What is scope? When is new scope created in JavaScript?
Answer:

  Scope is an environment created when a function is declared. After a function declaration
  any code declared or executed within that function belongs to its scope and has access to the functions' parent scope.

1. What are the pros and cons of using Promises instead of callbacks?
Answer:
  A major Pro of using Promises instead of callbacks is having a value not undefined.
  The function using the callback will return before the callback returns a value causing your
  code to break. A con of using Promises instead of callbacks is a callback is short and
  straight to the point while Promise has some setup required including testing.

1. What happens when you type a URL into a browser and hit enter?
Answer:
  Your browser sends a request to some other server where that url is hosted and
  if it exists you get back a 200 response and some file which is rendered to your browser.
