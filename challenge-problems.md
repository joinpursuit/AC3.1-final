- Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.

```js
sumArray([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4]); //10
```

- write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers

```js
sumAll(1); //1
sumAll(1, 10, 2, 20, 3); //36
sumAll(1, 2, 3); //6
```

- Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers

```js
squaredTimesTen([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4]); //[10, 40, 90, 160];
```

- Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array

```js
highLow([1, 2, 3, 4, 5]); //{high: 5, low: 1};
highLow([-10, 20, 300, 44, 50]); //{high: 300, low: -10;
```

- write a function called `halfsies` that takes in an array of numbers. For each number in the array, if the number is in the first half of the array, divide it by ten, and if it's in the second half of the array, multiply it by ten. If it's exactly in the middle, leave the number alone. You should return a new array.

```js
halfsies([100, 100, 100, 100]); //[10, 10, 1000, 1000]
halfsies([50, 40, 33, 6, 12]); //[5, 4, 33, 60, 120]
```

- Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.

```js
indexMap([10, 30, 20, 40, 100]); // [0, 30, 40, 120, 400]
indexMap([1, 2, 3, 4, 5]); // [0, 2, 6, 12, 20]
```

- Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array with an odd number of letters.
```js
oddNumStrs([1, 'hey', 2, 3, 4, 'hi', 5, 6, 'hello', 7]);
// returns ['hey', 'hello']
oddNumStrs([3, 18, 'what up', 23, 'yo', 'cya', 99]);
// returns ['cya']
```

- Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's

```js
leet('leet test'); //'1337 73s7'
leet('this is a just a little test'); //'7his is just7 a 1i7713 73s7'
```

- Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array

```js
oddsAndEvens([1, 2, 3, 4, 5]); //{odds: 3, evens: 2}
oddsAndEvens([1, 1, 1, 1, 1, 2, 2, 2]); //{odds: 5, evens: 3}
```

- Given the following code:

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

write a function that will change the word 'Dog' to 'ManBearPig'

- What will the following log to the console?

```js
const mystery1 = (num1) => {
  var num3 = 50;
  return (num2) => {
    console.log(num1 + num2 + num3);
  }
}

let mystery2 = mystery1(50);
mystery2(100);
```

- Write a constructor function called `Song` for creating 'Song' objects. Each song should have an artist, title, year, and a 'play' method that should return a string that says 'Now playing' with the name and artist of the song

```js
var song1 = new Song('The Baha Men', 'Who Let The Dogs Out?', 1996);
song1.play(); //'Now playing Who Let The Dogs Out? by The Baha Men'
```

- Write a constructor function called `Album` for creating 'Album' objects. Each album should have an artist, title, year, array to hold songs, but should initially start out empty. It should also have a `addSong` method that takes in a song object as an argument, and adds it to the album's song array. Lastly, it should have a 'logTracklist' method that should log out the name and artist of the album, as well as the title of all of the songs (separated by commas) to the console

```js

var AwakenMyLove = new Album('Awaken, My Love!', 'Childish Gambino', 2016);
AwakenMyLove.addSong(new Song('Childish Gambino', 'Me and Your Mama', 2016));
AwakenMyLove.addSong(new Song('Childish Gambino', 'Redbone', 2016));
AwakenMyLove.addSong(new Song('Childish Gambino', 'The Night Me and Your Mama Met', 2016));
AwakenMyLove.logTracklist(); //"Awaken, My Love! by Childish Gambino: 'Me and Your Mama', 'Redbone', 'The Night Me and Your Mama Met'"
```

- Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not (a palindrome is a word that reads the same both backwards and forwards)

```js
palindrome('racecar'); //true
palindrome('airplane'); //false
```

- Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not (an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)

```js
anagram('cat', 'act'); //true
anagram('dog', 'boy'); //false
anagram('dormitory', 'dirty room'); //true
anagram('flashlight', 'night sky'); //false
```
