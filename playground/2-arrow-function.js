/**
 * 
 * PlayGround for ES6 arrow functions
 * 
 */

// Vanilla Syntax
// const square = function (x) {
//   return x*x;
// }

// ES6 Syntax - v1
// const square = (x) => {
//   return x*x;
// }

//ES6 Syntax - v2
// const square = (x) => x*x;

// console.log(square(4));

const event = {
  name: 'Birthday Party',
  guestList: [ 'Jose', 'Andrew', 'Jen', 'Mike' ],
  printGuestList() {
    console.log( 'Guest list for ' + this.name );
    this.guestList.forEach( guest => console.log( `${ guest } is attending ${ this.name }.` ));
  }
}

event.printGuestList();