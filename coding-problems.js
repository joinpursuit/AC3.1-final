/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (array) => {
  var sum = 0;
  var arr = array.filter(a=>typeof a=='number')
  for(var x=0; x<arr.length; x++){
    sum+=arr[x]
  }
  return sum
};

/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
function sumAll(){
  var sum = 0;
  //can't use arguments in mocha test??? console.log gives me weird object
  //it's es6 that changes the arguments to objects...
  for(var x=0; x<arguments.length; x++){
    sum+=(parseInt(arguments[x]))
  }
  return sum
};

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (array) => {
  var arr = array.filter((a)=>typeof a=='number')
  return arr.map(b=>b*b*10)
};

/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (array) =>{
  var high = -Infinity, low = Infinity, obj={};
  for(var i=0; i<array.length; i++){
    if(array[i]>high) high=array[i];
    if(array[i]<low) low=array[i];
  };
  obj['high']=high;
  obj['low']=low;
  return obj
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (array) => {
  return array.map((ele,index)=>ele*index)
};

/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (array) => (
  array.filter((a)=>(
    typeof a=='string' && a.length%2==1
  ))
);

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
  var change = document.getElementById('text1')
  change.innerHTML='ManBearPig'
};

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (array) => {
  var arr = []
  var inc = array.length;
  if(inc%2===0){
    for(var i = 0; i<(inc/2); i++){
      arr.push(array[i]/10)
    };
    for(var x = inc/2; x<inc; x++){
      arr.push(array[i]*10)
    };
    return arr
  }else{
    for(var i = 0; i<(Math.floor(inc/2)); i++){
      arr.push(array[i]/10)
    };
    arr.push(array[Math.floor(inc/2)]);
    for(var x = (Math.ceil(inc/2)); x<inc; x++){
      arr.push(array[x]*10)
    };
    return arr
  }
};

/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (string) => {
  var str=string.split(''), str2='';
  for(var i=0; i<str.length; i++){
    if(str[i]=='e') str[i]=3;
    if(str[i]=='l') str[i]=1;
    if(str[i]=='t') str[i]=7;
    str2+=str[i];
  }
  return str2
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist,title,year){
  this.artist=artist;
  this.title=title;
  this.year=year;
  this.play=function(){
    return 'Now playing '+this.title+' by '+this.artist
  }
};

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist,title,year){
  this.artist=artist;
  this.title=title;
  this.year=year;
  this.songs=[]
};

Album.prototype.addSong=function(song){
  this.songs.push(song)
}

Album.prototype.tracklist=function(){
  var array = this.songs.map((song)=>song.title)
  return array.join(', ')
}

/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (array) => {
  return array.reduce((obj,a)=>{
    a%2===0 ? obj.evens++ : obj.odds++
    return obj
  },{odds:0, evens:0})
};

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (string) =>{
  var string2 = ''
  for(var i=string.length-1; i>-1; i--){
    string2+=string[i]
  }
  return string==string2 ? true : false
} 

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (string1, string2) => {
  var obj1={}, obj2={}, str1=string1.split(' ').join(''), str2=string2.split(' ').join('');
  for(var i=0; i<str1.length; i++){
    obj1[str1[i]] ? obj1[str1[i]]++ : obj1[str1[i]]=1
  };
  for(var x=0; x<str2.length; x++){
    obj2[str2[x]] ? obj2[str2[x]]++ : obj2[str2[x]]=1
  };
  if(Object.keys(obj1).length!==Object.keys(obj2).length) return false;
  for(var keys in obj1){
    if (!(obj1[keys]==obj2[keys])) return false
  };
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
