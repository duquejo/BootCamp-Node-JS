/**
 * 
 * Tests File
 * 
 * @requires Jest
 * @requires supertest Run http request tests
 */
const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math');

test( 'Should calculate total with tip', () => {
    const total = calculateTip( 10, 0.3 );
    expect( total).toBe(13);
    // if( total !== 13 ) throw new Error( `Total tip should be 3. Got ${ total }`);
});

test('Should calculate total with default tip', () => {
    const total = calculateTip( 10 );
    expect(total).toBe(12.5);
});

test('Should convert 32 F to 0 C', () => {
    const total = fahrenheitToCelsius( 32 );
    expect(total).toBe(0);
});

test('Should convert 0 C to 32 F', () => {
    const total = celsiusToFahrenheit( 0 );
    expect(total).toBe(32);
});

/**
 * Using Promises then pattern
 */
test('Should add two numbers', (done) => {
    add(2, 3).then( sum => {
        expect(sum).toBe(5);
        done();
    });
})

/**
 * Async/await model Checking
 */
test('Should add two numbers async/await', async () => {
    const sum = await add( 10, 22 );
    expect(sum).toBe(32);
});