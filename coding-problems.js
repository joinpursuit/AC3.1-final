/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and 
//returns a sum of the numbers in the array.

function sumArray(arr) {
  return arr.filter(function(a) {
    return typeof a === "number"
  })
  .reduce(function(a,b) {
    return a + b
  })
}

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns 
//a sum of all of the numbers

function sumAll() {
  let sum = 0;
  for(let i=0; i<arguments.length; i++) {
    sum += arguments[i]
  }
  return sum;
}

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), 
// squares the numbers and multiples them by 10, and returns a new array of those numbers

function squaredTimesTen(arr) {
  let numbers = [];
  arr.filter(function(a) {
    return typeof a === "number"
  })
  .forEach(function(a) {
    return numbers.push(a*a*10)
  })

  return numbers;
}

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both 
//the highest and lowest number from the array
function highLow(arr, highandLow = {high: null, low: null}) {
  let sorted = arr.sort(function(a, b) {
    return a < b;
  })
  highandLow.high = sorted[0];
  highandLow.low = sorted[sorted.length-1];
  return highandLow;
}

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with 
//each of the original numbers multiplied by their array index.
// const indexMap = () => null;

function indexMap(arr) {
  return arr.map(function(a, b) {
    return a * b;
  })
}


/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.


function oddNumStrs(arr) {
  return arr.filter(function(a) {
    return typeof a === "string" && a.length % 2 !== 0
  })
}

/////
//#7
//Note: there is no test for this function
//Given the below code, write a function called 'changeBearPig' that will change the word 
//'Dog' to 'ManBearPig':

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

function changeBearPig() {
  let dog = document.getElementById("text1")
  dog.innerHTML = "ManBearPig"
}

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.

function halfsies(arr) {
  let half = [];
  if(arr.length % 2 == 0) {
    let middle = (arr.length/2)
    for(let i = 0; i < middle; i++ ) {
      half.push(arr[i]/10)
    }
    for(let i = middle; i < arr.length; i++) {
      half.push(arr[i] * 10)
    }
  }
  if(arr.length % 2 !== 0) {
    let middle = (arr.length-1)/2
    for(let i = 0; i < middle; i++) {
      half.push(arr[i]/10)
    }
    half.push(arr[middle])
    for(let i = middle+1; i < arr.length; i++) {
      half.push(arr[i] * 10)
    }
  }
  return half
}


/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all 
// e's with 3's, l's with 1's, and t's with 7's

function leet(str) {
  let strArr = str.split('');
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] === "e") {
      strArr[i] = 3
    }
    if(strArr[i] === "l") {
      strArr[i] = 1
    }
    if(strArr[i] === "t") {
      strArr[i] = 7
    }
  }
  return strArr.join("");
}


/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the 
//name and artist of the song

function Song(artist, title, year){
  this.artist = artist;
  this.title = title;
  this.year = year;
};

Song.prototype.play = function() {
  let playing = "Now playing " + this.title + " by " + this.artist;
  return playing;
}

// let SZA = new Song('SZA', 'Hiiijack', 2014);
// let twoAM = new Song("SZA", "Two AM", 2016)
// console.log(SZA)
// console.log('SZA play:', SZA.play())

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year, songs=[]){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.songs = songs;
};

Album.prototype.addSong = function(song) {
  this.songs.push(song);
  return this.songs;
}

Album.prototype.tracklist = function() {
  let tracks = "";
  for(let i = 0; i < this.songs.length; i++)
    if(i == this.songs.length-1) {
      tracks += this.songs[i].title
    }
    else {
      tracks += this.songs[i].title + ", "
    }
    return tracks
}

// let Z = new Album("SZA", "Z", 2015)
// console.log('Z', Z)
// console.log(Z.addSong(SZA))
// console.log(Z.addSong(twoAM))
// console.log(Z.tracklist())


/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with 
//a count of the number of odd and even numbers in the original array
function oddsAndEvens(arr, oddEven={odds: 0, evens: 0}) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? oddEven.evens += 1 : oddEven.odds += 1
  }
  return oddEven
}

// console.log(oddsAndEvens([1,2,3,4,5]))

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method

function palindrome(str) {
  let reversed = "";
  for(let i=str.length-1; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed === str;
}

// console.log(palindrome('racecar'))

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams 
//of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
function anagram(str1, str2) {
  let count = 0;
  while(count < str1.length) {
    if(str2.indexOf(str1[count]) === -1) {
      return false
    }
    count++;
  }
  return true;
}

// console.log(anagram("paple", "apple"))





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
