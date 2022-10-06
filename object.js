const student = {
  name: 'Ade',
  age: 18,
  isMale: false,
};
student.getAge = getAge;
student.getGender = getGender;
student.getName = getName;
function getName() {
  return this.name;
}
function getAge() {
  return this.age;
}
function getGender() {
  if (!this.isMale) {
    return 'Female';
  } else {
    return 'Male';
  }
}

const staff = {
  name: 'Tade',
  age: 25,
  isMale: true,
};
staff.getName = getName;
staff.getGender = getGender;
staff.getAge = getAge;
console.log(student.getName());
