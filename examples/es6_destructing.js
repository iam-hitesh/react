// Old Way
const user = {
  fname : 'Hitesh',
  lname : 'Yadav'
}

// var fname = user.fname;
// var lname = user.lname;


// This New Way ES6

const {fname,lname} = user;
console.log(fname,lname);
