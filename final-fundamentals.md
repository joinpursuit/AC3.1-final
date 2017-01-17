# Final

## 1. Variable types
What types would the following variables return? For each of the following variables, match one of the below letters to indicate the correct type:

**Variables:**

Each of these variables will evaluate to one of the data types found in the below answer bank. Choose the correct letter from the answer bank and write it on the line to the left of the variable:

_______   `var test = (11 > 1) || 'hello';`

_______  `var test1 = 20 * 2 > 10 ? null : 'world';`

_______  `var test2 = undefined || false || null || {huh: 'what am i ?'};`

_______  `var test3;`

_______  `var test4 = 0 && 5 || false;`

_______  `var test5 = parseInt('22')`

**Answer bank:**


a. Object

b. null

c. undefined

d. string

e. number

f. boolean

## 2. Truthy and Falsy 1
What would the following lines of code output to the console?
```js
console.log(0 || 1 || 2 || 3);

console.log(1 && 0 || 0 && 2);

console.log(0 && 1 && 'two' || 'three' && 4 && 5);

console.log(0 || 'hey' && 3 && {test: 'test'} && 'cya' || 2);
```

## 3. Truthy and Falsy 2
For each of the following input values, what would the `checkcheck` function return?

```js
function checkcheck(value) {
  if (value) {
    return true
  } else {
    return false
  }
}
```

**For example:**

`checkcheck(NaN)` // returns: false

**For each of the below problems, write whether they would return `true` or `false`:**

`checkcheck(false || 'val')`// returns:  

`checkcheck(true || '')`// returns:

`checkcheck(null && undefined)`// returns:

`checkcheck(42 && 0)`// returns:

`checkcheck(undefined || true)`// returns:

`checkcheck(0 && 1)`// returns:

`checkcheck("" || "")`// returns:

`checkcheck("foo" && "")`// returns:


## 4. Array adding
What will the following log to the console?

```js
let arr = [];
arr.push('RZA');
arr[1] = 'GZA';
arr = arr.concat(['Raekwon']);
arr = [...arr, 'Ghostface'];
arr.push('Method Man');
let arr2 = [...arr];
console.log(arr);
```

## 5. Array log
What will the following log to the console?
```js
var arr = [5, 4, 3, 2, 1, 0];

function mystery(arr) {
  console.log(arr[arr[0]]);
}

mystery(arr);
```

## 6. Array sum
What will the following log to the console?
```js
var arr = [1, 2, 3];

const mystery = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    let toAdd = i * 2;
    sum += toAdd;
  }
  return sum;
}

console.log(mystery(arr));
```

## 7. Array loop
What will the following log to the console?
```js
var arr = [10, 1, 15, 2, 20, 3];

function mystery(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(Math.max(5, arr[i] + 5));
  }
}

mystery(arr);
```

## 8. Filter
What will the following log to the console?
```js
const arr = [10, 1, 15, 2, 20, 3];

const mystery = (arr) =>
arr.filter((val, indx) => val % 2 === 0 && indx > 3);

console.log(mystery(arr));
```

## 9. Map
What will the following log to the console?
```js
var arr = [1, 2, 3, 4, 5];

const mystery = (arr) =>  
arr.map((val, indx) => ({num: val * indx}));

console.log(mystery(arr));
```

## 10. Reduce
What will the following log to the console?
```js
var arr = ['one', 'two', 'three', 'four'];

function mystery(arr) {
  return arr.reduce(function(a, b) {
    if(b.length % 2 === 0) {
      return a + ' ' + b;
    } else {
      return a;
    }
  }, 'zero');
}

console.log(mystery(arr));
```

## 11. Array logical operators
What will the following log to the console?
```js
var arr = [6, 5, 7, 9, 11];

function mystery(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(i >= 2  && arr[i] >= 10 || arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

mystery(arr);
```

## 12. Scope
What will the following log to the console?
```js
var counter = 10;
function mystery1(){
  counter -= 10;
  console.log(counter);
}

function mystery2() {
  var counter = 5;
  counter += 10;
  console.log(counter)
}

const mystery3 = () => {
  this.counter = 100;
  console.log(counter);
}

mystery1();
mystery2();
mystery3();
```

## 13. Scope & Closure
What will the following log to the console?

```js
let str1 = 'world';
const mystery1 = () => {
  let str1 = 'hello';
  return (str2) => {
    console.log(`${str2} hi ${str2}`);
  }
}

let mystery2 = mystery1();
mystery2('hello');
```

## 14. DOM
What will the following log to the console?

`index.html` file:
```html
<html>
    <head>
        <script src="index.js" defer></script>
    </head>
    <body>
		<div>
      <p class="text1">Cat</p>
			<p id="text1" class="text1">Dog</p>
      <h1 id="text2" class="text2">Bear</h1>
		</div>
    </body>
</html>
```

`index.js` file:
```js
console.log(document.getElementById('text2').innerHTML);
console.log(document.getElementsByTagName('p')[1].innerHTML);
console.log(document.getElementsByClassName('text1')[2].innerHTML);
```



## 15. Constructor Functions
Given the following test cases, write a constructor function or ES6 class called  `Album` that will allow you to make new `Album` objects with a `title`, `artist`, and 'numberOfTracks' property. The `Album` function should also include a `play` prototype method that produces the following results:

```js
let blonde = new Album('Blonde', 'Frank Ocean', 17)
blonde.title // returns 'Blonde'
blonde.artist // returns 'Frank Ocean'
blonde.tracks // 17
blonde.play() // returns "Playing 'Blonde' by 'Frank Ocean'"
```

However the play prototype method should produce the following results if the artist is Nickelback:
```js
let allTheRightReasons = new Album('All The Right Reasons', 'Nickelback', 14)
allTheRightReasons.title // returns 'All The Right Reasons'
allTheRightReasons.artist // returns 'Nickelback'
allTheRightReasons.tracks // returns 14
allTheRightReasons.play() // returns 'nope...'
```


## 16. Odd numbered strings
Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array of only the strings with an odd number of letters.
```js
oddNumStrs([1, 'hey', 2, 3, 4, 'hi', 5, 6, 'hello', 7]);
// returns ['hey', 'hello']
oddNumStrs([3, 18, 'what up', 23, 'yo', 'cya', 99]);
// returns ['cya']
```


## 17. Loops and Conditionals
Write a function `secondSmallest` that returns the second smallest number in an array. The array may contain both strings and numbers.
```js
secondSmallest([1, 'hey', 2, 'hello', 3, 'hi']);
// returns 2
secondSmallest([30, 10, 40, 20, 50]);
// returns 20
secondSmallest(['cat', 'dog', 'porcupine', 100, 200]);
// returns 200
```


## 18. Function Return

Identify why the following function doesn't work, and then rewrite the correct solution.

The goal of the function is to take in a string and a letter, return `true` if the letter is in the string, and return `false` if the letter is not in the string.

**Rewrite the code so that it works.**

```js
function unique(string, letter) {
  for(let i = 0; i < string.length; i++) {
    if(string[i] === letter) {
      return true;
    } else {
      return false;
    }
  }
}

unique('pineapple', 'a');
```


## 19. Count to five
Write a function called countToFive that takes in a string. It should return an object containing a count of the number of times each number between 1 and 5 appears in the string.

Examples:
```js
countToFive('testing 12345');
//{1: 1, 2: 1, 3: 1, 4: 1, 5: 1}
countToFive('two 1s four 2s and five 5s equals 35');
//{1: 1, 2: 1, 3: 1, 4: 0, 5: 2}
```
