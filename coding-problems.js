/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns 
//a sum of the numbers in the array.
// const sumArray = () => null;
function sumArray (arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    if(typeof i === 'string') {
      
    }
    sum += arr[i]
  }
}

sumArray([1,2,3,'cat',4])
/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
// const sumAll = () => null;
function sumAll (input) {
   var sum = 0;
   for(var i = 0; i < input.length; i++){
     console.log(i)
    sum += i
   }

}
sumAll(2,2,2,2,2,2,2,2,2,2,2,2)

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
// const squaredTimesTen = () => null;
    function squaredTimesTen (arr) {
      return arr.map(function(e) {
        console.log(e * 2 * 10)
      })
    }
squaredTimesTen([1,2,3,3,4,5,6,7])
/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with 
// both the highest and lowest number from the array
// const highLow = () => null;
function highlow (arr) {
    var obj = {}
    for(var i = 0; i < arr.length; i++) {
      var keys = Object.keys(obj)
      if(keys.arr[i] > arr[i]) {
          obj[i] 
      } 
    }
}

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each 
// of the original numbers multiplied by their array index.
// const indexMap = () => null;
function indexMap(arr) {
  var product = 0;
  return arr.map(function(e,idx) {
    product *= idx
  })
}

indexMap([1,2,3,4,5,6,7])
/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns 
// an array that only contains the strings from the original array that have an odd number of letters.
// const oddNumStrs = () => null;
function oddNumStrs (arr) {
  return arr.map(function(e) {
    if( e === 'string' && e.length%1 !== e.length%2 ) {
      return e
    } else {
      return "there is no string with odd numbers in here."
    }
  })
}
/////
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

// const changeBearPig = () => null;
function changeBearPig () {
   document.getElementById(id).innerHTML = new "ManBearPig"
}

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
// const halfsies = () => null;
function halfsies (arr) {
  arr.forEach(function(e, idx) {
    if(e.length -1 !== e.length-2){
      e / 10
    } else {
      e * 10
    }
  })
}
/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that 
//replaces all e's with 3's, l's with 1's, and t's with 7's
// const leet = () => null;
function leet (str) {
  var spl = str.split('')
  spl.forEach(function(x,idx) {
    switch(x) {
      case 'e' : x = '3';
      break;
      case 'l' : x = '1';
      break;
      case 't' : x = '7';
      break;
    }
    spl[idx] = x
  })
  return spl.join(' ')
}

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' 
//with the name and artist of the song

function Song(artist, title, year){
   this.artist = artist;
   this.title = title;
   this.year = year;
   this.play = function () {
      console.log('Now playing', this.name, this.artist)
   }
};

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs 
//(which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, 
//and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with
// a title of all of the songs, separated by a comma and a space
function Album(artist, title, year, []){
    this.artist = artist;
    this.title = title;
    this.year = year;
    this.addSong = function (song) {
       song.push()
    }
    this.tracklist = function () {
      console.log(song)
    }
};



/////
//#12
// Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object
// with a count of the number of odd and even numbers in the original array
//const oddsAndEvens = () => null;

function oddsAndEvens (arr) {
  var obj = {}
  arr.forEach(function(e) {
    var keys = Object.keys(obj) 
    if(keys.indexOf(e %1) === 0 && keys.indexOf(e %2) === 2){
      obj[e] = 1
    } else {
      obj[e] =+ 1
    }
    })
}

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
// const palindrome = () => null;
function palindrome (str) {
  var strin = str.split(' ')
  for(var i = 0; i < strin.length; i++) {
     // not sure about this one
  }
}

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other,
// and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
// const anagram = () => null;
function anagram(str1, str2) {
   var word = str.split('')
   word.forEach(function(e) {
     if(e.reverse().length === e.reverse().length){
       return true
     } else {
       return false
     }
   })
}













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
