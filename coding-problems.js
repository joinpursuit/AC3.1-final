/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) =>
  arr.reduce(function () {
    if(typeof(arr[i]) === "number") {
      return [].push(arr[i])
    }
  })


/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (a) =>
  let total = 0
  for(var i = 0; i <= a.length; i++){
    total.push(a)
  }
  return return total;



/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) =>
  if (typeof(arr[i]) === "number"){
    return [].push((arr[i] * 2) * 10)
  }




/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = () => null;

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
 const indexMap = (arr) =>
   arr.map(function () {
     return [].push(arr(i) x arr[i])
   })



/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
// const oddNumStrs = () => null;
function oddNumStrs(arr){
  var newArray = []
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length % 2 !== 0 && typeof(arr[i]) === "string") {
      newArray.push(arr[i])
    }
  }
    return newArray;
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

/////
function changeBearPig (title){
  if(id && "text1" === Dog){
    return Dog.replaceWith("ManBearPig")

  }
}

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = () => null;

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) =>
 let newStr= " ";
  for(var i = 0; i <= str.length; i++){
    if(str[i] === "e"){
        return str[i].slice(1,(newStr.push("3"))
    } if(str[i] === "l"){
        return str[i].slice(1,(newStr.push("1"))
    } if(str[i] === "t"){
        return str[i].slice(1,(newStr.push("7"))
  }
}
/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(){
  this.artist = artist;
  this.title = title;
  this.year = year;
}

Song.Prototype.Play = function(){
  return ("Now playing " + this.title + "by " + this.artist + " !")
}

};

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.playlist = [];
}

Album.Prototype.addSong = function ({song}){
  this.playlist.push({song})
};

Album.Prototype.tracklist = function (){
  return this.playlist.title + ' , ';
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = () => null;

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = () => null;

/////
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
