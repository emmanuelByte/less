// const dog = {};
// dog.name = 'Bingo';
// dog.legs = 4;
// dog.color = 'brown';
// dog.age = 1;
// dog.bark = function () {
//   return 'woof woof';
// };
// dog.getName = function () {
//   return this.name;
// };
// dog.getLegs = function () {
//   return this.legs;
// };
// dog.getColor = function () {
//   return this.color;
// };
// dog.getAge = function () {
//   return this.age;
// };
// dog.breed = 'German Shepard';
// dog.getDogInfo = function () {
//   return dog.name + ' ' + dog.color + ' ' + dog.age + ' ';
// };
// console.log(dog.bark());
// Exercise 2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let previousSkill = 0;
const MERN = ['MongoDB', 'Express', 'React', 'Node'];
let mostSkillUser;
const loggedInUsers = [];
const usersGreaterThanFifty = [];
const MERNSTACKERs = [];
for (let i in users) {
  const skills = users[i].skills;
  const isLoggedIn = users[i].isLoggedIn;
  const points = users[i].points;
  if (skills.length > previousSkill) {
    previousSkill = skills.length;
    mostSkillUser = i;
  }
  if (isLoggedIn == true) {
    loggedInUsers.push(i);
  }
  if (points >= 50) {
    usersGreaterThanFifty.push(i);
  }

  if (
    skills.includes(MERN[0]) &&
    skills.includes(MERN[1]) &&
    skills.includes(MERN[2]) &&
    skills.includes(MERN[3])
  ) {
    MERNSTACKERs.push(i);
  }

  // previousSkill = Math.max(skills.length, previousSkill);
}
console.log('This most skill user is ' + ' ' + mostSkillUser);
console.log('Users logged in ', loggedInUsers);
console.log('Users with point > 50 ', usersGreaterThanFifty);
console.log('MERN Stack USers', MERNSTACKERs);
