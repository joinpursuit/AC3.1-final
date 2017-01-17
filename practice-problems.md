


- Write a constructor function for creating 'Actor' objects. Each actor should have a first name, last name, and the number of movies they've been in. They should also have a  'sayName' method that should log out their full name to the console:
```js
var actor1 = new Actor('Ben', 'Stiller', 25);
actor1.sayName(); //'Ben Stiller'
```

- Write a constructor function for creating 'Movie' objects. Each movie should have a title, year, and array to hold actors, which should initially start out empty. It should also have an `addActor` method that takes in an actor object as an argument, and adds it to the movie's actor array. Lastly, it should have a 'logActors' method that should log out the name of all of the actors in the movie (separated by commas) to the console:

```js

var Zoolander = new Movie('Zoolander', 2001);
Zoolander.addActor(new Actor('Ben Stiller'));
Zoolander.addActor(new Actor('Owen Wilson'));
Zoolander.addActor(new Actor('Will Ferrell'));
Zoolander.logActors(); //'Ben Stiller, Owen Wilson, Will Ferrell'
```
