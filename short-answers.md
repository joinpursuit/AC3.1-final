# Short Answer Questions
For the following five questions, type out your answers in 1-2 paragraphs (no coding required):

1. Why is it generally considered a bad practice to create global variables?
Answer: Because you open your code up to changing functions unintentionally.
It is better to limit variables to within the scope of a funtion.

1. What is closure? Give an example of where closure is used in JavaScript.
Answer: Closure is a function contained within a larger function that can access all the variables within the scope of the parent function.

1. What is scope? When is new scope created in JavaScript?
Answer: You can create scope when you create a new function, the variables that are contained within that function only exist inside that function and any changes to the local variables, even if other functions contain variables with the same names, will not change variables outside of the parent function.

1. What are the pros and cons of using Promises instead of callbacks?
Answer: When you use a call back you are at risk of the entire function running before the necessary data has populated. With promises, the function is only executed when all the data has populated and you are not at risk of your function timing out.

1. What happens when you type a URL into a browser and hit enter?
Answer: When you type a url into the browser the (for react) the server recognizes the url and directs the request to the appropriate route  in your server.js file. In addition, on the front end, the route is served from the react router and the corresponding components are rendered based on the react router. When you change pages, the react router will rerender just the components that have changed (based on the react-router routes).
