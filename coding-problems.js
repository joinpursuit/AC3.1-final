/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
    return arr.reduce((sum, val) => {
        return (typeof val === 'number') ? sum += val : sum;
    });
    // let sum= 0;
    // for(let i=0;i< arr.length;i++){
    //     if(typeof arr[i]==="number") sum+=arr[i];
    //     else sum+=0;
    // }
    // return sum;
};

// console.log(sumArray([1,2,3,4]));
/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers
const sumAll = (...args) => {
    return [...args].reduce((sum, val) => sum += val)
}
// console.log(sumAll(1,2,3,4));

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers
const squaredTimesTen = (arr) => {
    return arr.filter(val => typeof val === "number").map(val => (val * val) * 10)
};
// console.log(squaredTimesTen([1,2,3,'hello']));
/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array
const highLow = (arr) => {
    return arr.reduce((obj,val)=>{
        if(val > obj.high) obj.high = val;
            if((val < obj.low)) obj.low = val;
        return obj
    },{high: 0, low: Infinity});
    // let obj = {high: 0, low: Infinity};
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > obj.high) {
    //         obj.high = arr[i];
    //         console.log(obj)
    //     }
    //     if (arr[i] < obj.low) {
    //         obj.low = arr[i];
    //         console.log(obj)
    //     }
    // }
    // console.log(obj)

};
// console.log(highLow([-100, 4, 900]));
/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {
    return arr.map((val,index)=> val*index)
};
// console.log(indexMap([1,2,3,4,5,10]));
/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
const oddNumStrs = (arr) => {
    return arr.filter(val=> typeof val==="string"&& val.length%2!==0)
};
// console.log(oddNumStrs([1,2,"helllo","dog","wow","puppy"]))
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
    let text1 = document.getElementById('text1');
    text1.innerHTML = 'changeBearPig';
    return text1;
};


/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.
const halfsies = (arr) => {
    let newArr=arr.slice(0);
    for(let i= 0; i < newArr.length; i++){
        if(i < Math.floor(newArr.length/2)){
            newArr[i]=newArr[i]/10;
        }
        else if(i >= Math.ceil(newArr.length/2)){
            newArr[i]=newArr[i]*10;
        }
    }
    return newArr;
};
// halfsies([200, 400, 20,6, 5]);
// console.log(halfsies([10, 10,100, 100]));
/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's
const leet = (str) => {
    let newStr =[];
    str.split('').map(letter=>{
        if(letter==='e') {
            letter = '3';
            newStr.push(letter)
        }
        else if(letter==='l'){
            letter= '1';
            newStr.push(letter)
        }
        else if(letter ==='t') {
            letter = '7';
            newStr.push(letter)
        }
        else newStr.push(letter)
    })
    return newStr.join('')
};
// console.log(leet('eleast'));

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist,title, year) {
    this.artist = artist;
    this.title = title;
    this.year = year;
};
Song.prototype.play = function(){
    return 'Now playing '+this.title+' by '+ this.artist;
}
// var test1 = new Song('The Baha Men', 'Who Let The Dogs Out?', 1996)
// console.log(test1.play())
/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist,title,year) {
    this.artist = artist;
    this.title = title;
    this.year = year;
    this.songs = [];
};
Album.prototype.addSong = function(song){
    this.songs.push(song);
};
Album.prototype.tracklist = function(){
    let string = `${this.songs.map(song=> " "+song.title)}`;
    return string.trim();
    // console.log(string)
}

// var test1 = new Album('Childish Gambino', 'Awaken, My Love!', 2016);
// test1.addSong(new Song('Childish Gambino', 'Me and Your Mama', 2016));
// test1.addSong(new Song('Childish Gambino', 'Redbone', 2016));
// test1.addSong(new Song('Childish Gambino', 'The Night Me and Your Mama Met', 2016));
//
// console.log(test1.tracklist());
/////
//#12
//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array
const oddsAndEvens = (arr) => {
    return arr.reduce((obj,val)=>{
        val % 2=== 0 ? obj['evens']++ : obj['odds']++;
        return obj
    },{'odds':0,'evens':0})

};
// console.log(oddsAndEvens([1,4,2,3]));
/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
const palindrome = (string) => {
    if(string.length===0) return true;
    else {
        if(string[0]===string[string.length-1]) return true;
        palindrome(string.slice(1))
    }
    return false
};
// console.log(palindrome('qiliq'));
/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
const anagram = (strOne, strTwo) => {
    let str1 = strOne.split('').filter(val=>val!==" ");
    let str2 = strTwo.split('').filter(val=> val !== " ");

    if(str1.length!==str2.length) return false;

    let strObject={};
    for(let i=0;i< str2.length;i++){
        if(str1.includes(str2[i])) {
            strObject[str2[i]]=str1[str1.indexOf(str2[i])];
        }
    }
    let bool = true;
    for(let j=0; j< str1.length || j < str2.length; j++){
        console.log(!strObject[str1[j]]);
        if(!strObject[str1[j]] && !strObject[str2[j]] ) bool=false
    }
    return bool;

};
// anagram('hello','olleh');
// anagram('dormitory', 'dirty room');
// anagram('dog', 'boy');

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
