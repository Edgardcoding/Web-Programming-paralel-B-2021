// while
// let i = 1;
// while(i <= 5) {
// console.log(i);
// i++;
// }


// do/while
// do {
// console.log(i);
// i++;
// } while(i <= 5);


// for
// for(let x = 1; x <= 5; x++) {
// console.log(x);
// }


// for/of (ES6) - array
// const data = [12, 45, 7, 80, 19];
// for(let e of data) {
// console.log(e);
// }


// for/in - object literal
const student = {
    nim: 105011810036,
    regNo: 'S21810128',
    prodi: 'SI',
    faculty: 'FIK',
    firstName: 'Edgard',
    lastName: 'Supit',
    gender: 'M'
};
for(let props in student) {
    console.log('${props}: ${student[props]}');
}