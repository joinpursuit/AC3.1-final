/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////--------------------------------------------------------------------------------------------------
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and 
// returns a sum of the numbers in the array.

function sumArray(arr) {
  
  var sumNums = 0;

  for(i=0; i < arr.length; i++) {
    
    if (typeof arr[i] === 'number') {
      sumNums = sumNums + arr[i]
    }

  }

  return sumNums;

}

/////--------------------------------------------------------------------------------------------------
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
function sumAll(...args) {
  
  var sum = 0;

  for(var i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
  }

  return sum;

}


/////--------------------------------------------------------------------------------------------------
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers

function squaredTimesTen(arr) {

  // arr.map(function(x) {
  //   return Math.pow(x, 2) * 10
  // })

  var newArr = [];

  for(var i = 0; i < arr.length; i++) {
      
    if(typeof arr[i] === 'number') {
      newArr.push((arr[i] * arr[i]) * 10)
    }


  }
    return newArr;

}

/////--------------------------------------------------------------------------------------------------
//#4 (Come Back)
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array

function highLow(arr) {

  var myArr = [];

  var sortedNums = arr.sort(function(a,b) {
                      return myArr.push(a < b); 
                    })





}

/////--------------------------------------------------------------------------------------------------
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.

function indexMap (arr) {

  var indexArr = [];

  for(var i = 0; i < arr.length; i++) {
      indexArr.push(arr[i] * arr.indexOf(arr[i]))
  }

  return indexArr;

}

/////--------------------------------------------------------------------------------------------------
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.

function oddNumStrs (arr) {

  var strArray = [];

  for(i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'string') {
        var splitString = arr[i].split('')

        if (splitString.length % 2 === 1) {
            var joinedString = splitString.join('')
            strArray.push(joinedString)
        }
    }

  }

  return strArray;

}


/////--------------------------------------------------------------------------------------------------
//#7
//Note: there is no test for this function
//Given the below code, write a function called 'changeBearPig' that will change the word 'Dog' to 'ManBearPig':

`<html>
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
</html>`

// function changeBearPig (str) {

//   var targetWord = document.getElementByClass('dog');

// }

/////--------------------------------------------------------------------------------------------------
//#8 (Come back)
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.

function halfsies (arr) {

  var firstHalf = [];
  var secondHalf = [];

  for(var i = 0; i < arr.length; i++) {

   if ( Math.ceil((arr.length-1) / 2).includes(arr[i]) ) {
      firstHalf.push(arr[i]);
   } else {
      secondHalf.push(arr[i] * 10);
   }

  }

}

// firstHalf.push(Math.pow(arr.slice(0, indexOf((arr.length-1) / 2))))

/////--------------------------------------------------------------------------------------------------
//#9 (Come back)
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's

function leet(str) {

  var splitStr = str.split('')

  for (var i = 0; i < splitStr.length; i++) {

    if (str[i] === 'e') {
        var repStrOne =str[i].replace('e', '3');
        console.log(repStrOne)
    } 

    else if (str[i] === 'l') {
        var repStrTwo =str[i].replace('l', '1');
        console.log(repStrTwo)
    } 

    else if (str[i] === 't') {
        var repStrThree =str[i].replace('t', '7');
        console.log(repStrThree)
    }

  var joinedStr = splitStr.join('');

  }

  return joinedStr.JSON.stringify();

}

/////--------------------------------------------------------------------------------------------------
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){

  this.artist = artist;
  this.title = title;
  this.year = year;
  this.play = function() {
    return 'Now playing ' + title + " by " + artist;
  }

};

/////--------------------------------------------------------------------------------------------------
//#11 (Come back)
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year){

  this.artist = artist;
  this.title = title;
  this.year = year;
  this.songs = [];

  this.addSong = function(sng) {
    return this.songs.push(sng);
  }

  this.tracklist = function() {
    return this.songs.forEach(artist => console.log(artist, ", "))
  }

};

function Artist (name) {
  this.name = name;
}

/////--------------------------------------------------------------------------------------------------
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array

function oddsAndEvens(arr) {

  var oddEvenCount = {
      'odds': 0,
      'evens': 0
  }

  for (var i = 0; i < arr.length; i++) {

    // if(oddEvenCount[arr[i] % 2 === 0]) {
    //   oddEvenCount[1] += 1;
    // } else if(oddEvenCount[arr[i] % 2 === 1]) {
    //   oddEvenCount[0] += 1;
    // }

    if(arr[i] % 2 === 1) {
      oddEvenCount['odds'] += 1;
    } else if(arr[i] % 2 === 0) {
      oddEvenCount['evens'] += 1;
    }

  }

  return oddEvenCount;

}

/////--------------------------------------------------------------------------------------------------
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = () => null;

/////--------------------------------------------------------------------------------------------------
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = () => null;













//Ignore this:
module.exports = {
  sumArray,
  sumAll,
  squaredTimesTen,
  highLow,
  halfsies,
  indexMap,
  oddNumStrs,
  leet,
  oddsAndEvens,
  palindrome,
  anagram,
  Song,
  Album
};
