/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */

let user = {
  firstName: "Ayrton",
  lastName: "Haider",
  age: 27,
};

/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */

let allTypes = {
  string: "Hello, World",
  number: 42,
  weekday: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  anotherObject: {
    key: 1,
    key2: 2,
  },
  nestedFunction: function message() {
    console.log(message());
  },
  boolean: 5 === 5,
};

/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

function createMovieObject(name, rating, ticketPrice) {
  return (movie = {
    name: "Home Alone",
    rating: 8.5,
    ticketPrice: 20,
  });
}
