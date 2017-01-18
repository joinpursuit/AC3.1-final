/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
  let sum = 0
  arr.forEach(val => {
    typeof val == 'number' ? sum += val : null
  });
  return sum
};

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (...args) => {
  let sum = 0;
  for(let i=0; i< args.length; i++) {
    sum += args[i];
  }
  return sum;
};

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
  let res = []
  arr.forEach(val => {
    typeof val == 'number' ? res.push((val*val)*10): null;
  });
  return res
};

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  let low = arr[0]
  let high = arr[0]

  arr.forEach(val => {
    val > high ? high = val : val < low ? low = val : null
  });
  return {high, low}
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {
  return arr.map((val, idx) => {
    return val * idx
  });
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
  let res = []
  arr.forEach(val => {
     typeof val === 'string' && val.length % 2 !== 0 ? res.push(val) : null;
  });
  return res;
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
  // $('.text1').innerHTML =
  // let dog = document.getElementById('text1');
  // console.log(dog)
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
  let len = arr.length;
  let res =[];

  if((len/2) % 2 == 0) {
    arr.forEach((val,idx) => {
      idx < (len/2) ? res.push(val/10): res.push(val*10);
    })
  }
  else {
    arr.forEach((val,idx) => {
      idx < ((len/2) -1 + .5) ? res.push(val/10): idx === ((len/2) -1 + .5)? res.push(val): res.push(val*10);
      console.log(idx, ((len/2) -1 + .5))
    });
  }


  return res
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string
// that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  let res =''
  for(let i =0; i<str.length; i++) {
    str[i] == 'e' ? res+= '3': str[i] == 'l'? res += '1': str[i] == 't'? res += '7' : res += str[i];
  }
  return res
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.play = () => {
    return `Now playing ${title} by ${artist}`
  }
};

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year, songs =[]){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.songs = songs;
  this.addSong = (song) => {
    songs.push(song)
  }
  this.tracklist = () => {
    return songs.map(song => {
      return song.title
    }).join(', ')
  }
};

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
  let obj = {odds: 0, evens: 0};

  arr.forEach(val => {
    val % 2 ==0 ? obj.evens += 1: obj.odds += 1;
  })
  return obj;
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
//  racecar
const palindrome = (str) => {
  let end = str.length -1;
  let res = true;

  for (var i = 0; i < str.length; i++) {
    str[i] == str[end] ? null: res = false
    end -=1;
  }
  return res
};

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (strOne, strTwo) => {
  let objOne = {};
  let objTwo = {};
  let res = true;
  for(let i =0; i< strOne.length; i ++) {
    let x = strOne[i];
    x === ' '? null : objOne[x] ? objOne[x] += 1: objOne[x] = 1
  }
  for(let i =0; i< strTwo.length; i ++) {
    let x = strTwo[i];
    x === ' '? null : objTwo[x] ? objTwo[x] += 1: objTwo[x] = 1
  }
  for (var key in objOne) {
    objOne[key] !== objTwo[key] ? res = false : null
  }
  return res
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
