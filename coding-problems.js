/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
    var sum = 0;
    arr.forEach((val, indx) => {
      if(typeof(val) === 'number'){
        sum += val;
      }
    })
    return sum;
}

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (...arguments) => {
  var sum = 0;
  for(var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
  };

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
  var newArr = [];
  arr.forEach((val) => {
    if(typeof(val) === 'number'){
      newArr.push(val * val * 10);
    }
  })
  return newArr;
};

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
  var nums = {low: 10000, high:-10000};
  for (var i = 0; i < arr.length; i++){
    if(arr[i] < nums.low){
      nums.low = arr[i];
    }
    else if(arr[i] > nums.high){
      nums.high = arr[i]
    }
  }
  return nums;
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => 
  arr.map((val, indx) => {
    return val*indx;
  })

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
  var strArr = [];
  arr.forEach((val) => {
    if(typeof(val) === 'string' && val.length%2 !== 0){
      strArr.push(val);
    }
  })
  return strArr;
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
  document.getElementById('text1')[0].innerhtml = "ManBearPig";
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
 var modifiedArr = [];
 var middleNum = 0;
 var cleave = 0;

 if(arr.length%2 === 0){
    cleave = (arr.length / 2) - 1;
    arr.forEach((val,indx)=> {
      if(indx <= cleave){
        modifiedArr.push(val / 10)
      } else {
        modifiedArr.push(val * 10)
      }
    })
 }
 else if(arr.length%2 !== 0){
    middleNum = (Math.floor(arr.length / 2));
    arr.forEach((val,indx) => {
      if(indx < middleNum){
        modifiedArr.push(val / 10)
      }
      else if(indx === middleNum){
        modifiedArr.push(val)
      }
      else{
        modifiedArr.push(val * 10)
      }
    })
 }
 return modifiedArr;
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
  str = str.split('');
  var newString = str.map((val) => {
    if(val === 'e'){
      return 3;
    }
    else if(val === 'l'){
      return 1;
    }
    else if(val === 't'){
      return 7;
    }
    else{
      return val;
    }
  })
  newString = newString.join('');
  return newString;
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){
  artist = this.artist,
  title = this.title,
  year = this.year
};

Song.prototype.play() {
  var info = "Now playing" + this.title + ' by ' + this.artist;
  return info;
};


/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year){
  artist = this.artist,
  title = this.title,
  year = this.year,
  songs = []
};

Album.prototype.addSong(songObj){
  this.songs.push(songObj);
}

Album.prototype.tracklist(){
  var allSongs = [];
  this.songs.forEach((val, indx) => {
    allSongs.push(val.title);
  })
  allSongs.join(', ');
  return allSongs;
}
/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
  var tracker = {odds:0, evens:0};
  arr.forEach((val,indx) => {
    if(val%2 === 0){
      tracker.evens +=1;
    }
    else if(val%2 !== 0){
      tracker.odds += 1;
    }
  })
  return tracker;
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
  const palindrome = (str) => {
  var proof = true;
  str = str.split('');
  //console.log(str);
 for(var i = 0; i < str.length; i++){
    for(var j = str.length - 1; j >= 0; j--){
      if(str[i] !== str[j]){
        proof = false;
      }
    }
  }
  return proof;
  };

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (str1, str2) => {
  var isAnagram = true;
  str1 = str1.split('');
  str2 = str2.split('');
  var letters1 = {};
  var letters2 = {};
  var spaces = []; //to get rid of spaces

  for(var i = 0; i < str1.length; i++){
    if(letters1[str1[i]] === ' '){
      spaces.push(letters1[str1[i]]);
    }
    else if(letters1[str1[i]]){
      letters1[str1[i]] += 1;
    } else {
      letters1[str1[i]] = 1;
    }
  }

   for(var i = 0; i < str2.length; i++){
    if(letters2[str2[i]] === ' '){
      spaces.push(letters2[str2[i]]);
    }
    else if(letters2[str2[i]]){
      letters2[str2[i]] += 1;
    } else {
      letters2[str2[i]] = 1;
    }
  }

  for(key in letters1){
    if(letters1[key] !== letters2[key]){
      isAnagram = false;
    }
  }

  return isAnagram;
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
