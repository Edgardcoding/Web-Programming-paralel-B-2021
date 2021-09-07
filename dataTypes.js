/**
 * - primitive Data Types
 * - Numbers
 * - String
 * - Boolean
 * - null
 * - undefined
 * - Symbol (ES6)
 * - BigInt (ES2020) 
 */
let salary = 10000000;
let average = 90.87;
let firstName = 'Edgard';
let lastName = 'Supit';
let isMarried = false;
let isAbsen = undefined;
let nickname = Symbol('nickname');
let bigNumber = 1n;

// console.log(lastName + ", " + firstName); // concatenate string
// console.log('${lastName}, ${firstName}'); // template/string literals

// console.log(bigNumber);
// console.log(typeof bigNumber);

/**
 * - Object Types
 * - global (global, window)
 * - globalThis (ES2020)
 * - object
 * - array
 */
const grades = [90, 80, 80, 97, 75, 90, 'Tiga Puluh'];
console.log(grades);

const student = {
    nim: '105011810036',
    faculty: 'Fakultas Ilmu Komputer',
    prodi: 'Sistem Informasi',
    curriculum: 'SI 2018-2023',
    isActive: true
};
console.log(student);