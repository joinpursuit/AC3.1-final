const {expect, assert} = require('chai');
const {sumArray, sumAll, squaredTimesTen, highLow, halfsies, indexMap, oddNumStrs, leet, oddsAndEvens, palindrome, anagram, Song, Album} = require('../coding-problems');

describe('JavaScript fundamentals final:', () => {
  it('sumArray()', () => {
    var test1 = sumArray([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4]);
    var test2 = sumArray([10, 'cat', 20, null, 30, [], 40]);
    var test3 = sumArray([10, 'bear', -20, 'dog', 30, true, -40]);
    expect(test1).equal(10);
    expect(test2).equal(100);
    expect(test3).equal(-20);
  });
  it('sumAll()', () => {
    var test1 = sumAll(1, 2, 3, 4);
    var test2 = sumAll(10, 10);
    var test3 = sumAll(10, 20, 30, 40, 50, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    expect(test1).equal(10);
    expect(test2).equal(20);
    expect(test3).equal(160);
  });
  it('squaredTimesTen()', () => {
    var test1 = squaredTimesTen([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4]);
    var test2 = squaredTimesTen([10, 10]);
    expect(test1).eql([10, 40, 90, 160]);
    expect(test2).eql([1000, 1000]);
  });
  it('highLow()', () => {
    var test1 = highLow([1, 2, 3, 4, 5]);
    var test2 = highLow([-10, 20, 300, 44, 50]);
    var test3 = highLow([-1000, 0, 1000]);
    expect(test1).eql({high: 5, low: 1});
    expect(test2).eql({high: 300, low: -10});
    expect(test3).eql({high: 1000, low: -1000});
  });
  it('indexMap() ', () => {
    var test1 = indexMap([10, 30, 20, 40, 100]);
    var test2 = indexMap([1, 2, 3, 4, 5]);
    var test3 = indexMap([10, 33, -10]);
    expect(test1).eql([0, 30, 40, 120, 400]);
    expect(test2).eql([0, 2, 6, 12, 20]);
    expect(test3).eql([0, 33, -20]);
  });
  it('oddNumStrs() ', () => {
    var test1 = oddNumStrs([1, 'hey', 2, 3, 4, 'hi', 5, 6, 'hello', 7]);
    var test2 = oddNumStrs([3, 18, 'goodbye', 23, 'yo', 'cya', 99]);
    expect(test1).eql(['hey', 'hello']);
    expect(test2).eql(['goodbye', 'cya']);
  });
  it('halfsies() ', () => {
    var test1 = halfsies([100, 100, 100, 100]);
    var test2 = halfsies([50, 40, 33, 6, 12]);
    var test3 = halfsies([-100, 33, 10]);
    expect(test1).eql([10, 10, 1000, 1000]);
    expect(test2).eql([5, 4, 33, 60, 120]);
    expect(test3).eql([-10, 33, 100]);
  });
  it('leet() ', () => {
    var test1 = leet('leet test');
    var test2 = leet('this is just a little test');
    expect(test1).eql('1337 73s7');
    expect(test2).eql('7his is jus7 a 1i7713 73s7');
  });
  it('Song()', () => {
    var test1 = new Song('The Baha Men', 'Who Let The Dogs Out?', 1996);
    var test2 = test1.play();
    var test3 = new Song('Rufus Du Sol', 'Bloom', 2016);
    var test4 = test3.play();
    expect(test1.artist).eql('The Baha Men');
    expect(test2).eql('Now playing Who Let The Dogs Out? by The Baha Men');
    assert.property(test1, 'play');
    expect(test3.title).eql('Bloom');
    expect(test4).eql('Now playing Bloom by Rufus Du Sol');
  });
  it('Album()', () => {
    var test1 = new Album('Childish Gambino', 'Awaken, My Love!', 2016);
    test1.addSong(new Song('Childish Gambino', 'Me and Your Mama', 2016));
    test1.addSong(new Song('Childish Gambino', 'Redbone', 2016));
    test1.addSong(new Song('Childish Gambino', 'The Night Me and Your Mama Met', 2016));
    assert.property(test1, 'addSong');
    assert.property(test1, 'tracklist');
    var test2 = test1.tracklist();
    expect(test1.artist).eql('Childish Gambino');
    expect(test2).eql("Me and Your Mama, Redbone, The Night Me and Your Mama Met");
  });
  it('oddsAndEvens() ', () => {
    var test1 = oddsAndEvens([1, 2, 3, 4, 5]);
    var test2 = oddsAndEvens([1, 1, 1, 1, 1, 2, 2, 2]);
    expect(test1).eql({odds: 3, evens: 2});
    expect(test2).eql({odds: 5, evens: 3});
  });
  it('palindrome() ', () => {
    var test1 = palindrome('racecar');
    var test2 = palindrome('airplane');
    expect(test1).eql(true);
    expect(test2).eql(false);
  });
  it('anagram() ', () => {
    var test1 = anagram('cat', 'act');
    var test2 = anagram('dog', 'boy');
    var test3 = anagram('dormitory', 'dirty room');
    var test4 = anagram('flashlight', 'night sky');
    expect(test1).equal(true);
    expect(test2).equal(false);
    expect(test3).equal(true);
    expect(test4).equal(false);
  });
});
