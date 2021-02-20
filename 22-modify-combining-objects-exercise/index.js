/**
 * Exercise 1
 *
 * Create an object {user} and add properties "firstName" and "lastName".
 */

const user = {
  firstName: "Ayrton",
  lastName: "Haider",
};

/**
 * Exercise 2
 *
 * Create an object {userRead} and add properties "books" and "newspapers".
 * Both should be arrays with strings.
 */

const userRead = {
  books: ["Kitten"],
  newspapers: ["The Guardian", "the Fast Company", "Wired", "Medium"],
};

/**
 * Exercise 3
 *
 * extend {user} object with all properties from {userRead} object
 *
 * Note: if I modify {userRead} it shouldn't change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: []
 * }
 */

const userUpdate = { ...user, ...userRead };
console.log(userUpdate);

/**
 * Exercise 4
 *
 * Create an object {userWatch} and add properties "tvShows" and "movies".
 * Both should be arrays with strings.
 */

const userWatch = {
  tvShows: [
    "Dare Devil",
    "La Casa de Papel",
    "La Casa de las Flores",
    "Mr.Robot",
    "the Good Wife",
  ],
  movies: ["Iron Man", "Her", "The Last Samurai", "Black Panther"],
};

/**
 * Exercise 5
 *
 * extend {user} object with new property "userWatch" and assign {userWatch} object
 * as a value.
 *
 * Note: if I modify {userWatch} it should change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: [],
 *   userWatch: {
 *     tvShows: [],
 *     movies: []
 *   }
 * }
 */

const fullUserInfo = {
  ...user,
  ...userRead,
  userWatch,
};
