/**
 * 
 * Playing with ES6 Object property shorthand and destructuring
 * 
 */

const name = 'Andrew';
const userAge = 27;

// Object property
const user = {
  name,
  age: userAge,
  location: 'Philadelphia'
};

console.log( user );

// Object destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
};

/**
 * Supports aliases and default values!
 */
// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;
// console.log( productLabel, price, stock, salePrice, rating );

/**
 * Destructuring inside function
 */
const transaction = ( type, { label, stock = 0 } = {} ) => {
  console.log(type, label, stock);
}
// transaction( 'order', product );
transaction( 'order' );