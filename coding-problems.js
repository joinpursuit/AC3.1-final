/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
  let counter = 0;
  arr.forEach((val) => {
    if(typeof val === 'number') {
      counter += val
    }
  })
  return counter
};

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (...args) => {
  let counter = 0;
  args.forEach((num) => {
    counter += num
  })
  return counter;
};

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
  let output = [];
  arr.forEach((val) => {
    if(typeof val === 'number') {
      output.push((val**2) * 10)
    }
  })
  return output
} ;

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  arr.sort((a, b) => {
    return a > b
  })
  return {high: arr[arr.length - 1], low: arr[0]}
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {
  return arr.map((num, i) => {
    return num * i
  })
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
  let output = [];
  arr.filter((val) => {
    return typeof val !== typeof 'String'
  })
  arr.forEach((str) => {
    if(str.length % 2 === 1) {
      output.push(str)
    }
  })
  return output
};

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

const changeBearPig = () => {
  let target = document.getElementById('text1')
  target.innerHTML = 'ManBearPig'
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
  return arr.map((num, i) => {
    if(arr.length % 2 === 0) {
      if(i < arr.length/2) {
        return num / 10
      } else {
        return num * 10
      }
    }
    else {
      if(i < Math.floor(arr.length/2)) {
        return num / 10
      } else if (i > Math.floor(arr.length/2)) {
        return num * 10
      } else {
        return num
      }
    }
  })
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  let newStr = str.split('');
  let output = newStr.map((letter) => {
    if(letter === 'e') {
      return letter = 3
    } else if(letter === 'l') {
      return letter = 1
    } else if(letter === 't') {
      return letter = 7
    } else {
      return letter
    }
  })
  return output.join('')
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){
  this.artist = artist
  this.title = title
  this.year = year
};

Song.prototype.play = function() {
  return 'Now playing ' + this.title + ' by ' + this.artist
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year) {
  this.artist = artist
  this.title = title
  this.year = year
  this.songs = []
};

Album.prototype.addSong = function(song) {
  this.songs.push(song)
}

Album.prototype.tracklist = function() {
  let tracklist = '';
  for(var i = 0; i < this.songs.length; i++) {
    if(i === this.songs.length - 1) {
      tracklist += this.songs[i].title
    } else {
      tracklist += this.songs[i].title + ', '
    }
  }
  return tracklist
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
  let output = {odds: 0, evens:0};
  arr.forEach((num) => {
    if(num % 2 === 0) {
      output['evens']++
    } else {
      output['odds']++
    }
  })
  return output
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (str) => {
  let testStr = str.split('')
  for(var i = 0; i < testStr.length; i++) {
    for(var j = testStr.length - 1; j > 0; j--) {
      if(testStr[i] === testStr[j]) {
        i++
      } else {
        return false
      }
    }
  }
  return true
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1, str2) => {
  let output1 = {};
  let output2 = {};
  str1 = str1.split(' ').join('').split('')
  str2 = str2.split(' ').join('').split('')

  for(var i = 0; i < str1.length; i++) {
    if(str1.length !== str2.length) {
      return false
    } else if(!output1[str1[i]]) {
      output1[str1[i]] = 1
    } else {
      output1[str1[i]]++
    }
  }

  for(var i = 0; i < str2.length; i++) {
    if(!output2[str2[i]]) {
      output2[str2[i]] = 1
    } else {
      output2[str2[i]]++
    }
  }

  for(var key in output1) {
    if(output1[key] !== output2[key]) {
      return false
    }
  }
  return true
};













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
