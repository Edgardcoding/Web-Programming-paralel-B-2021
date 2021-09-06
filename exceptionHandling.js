// throw
// let x = -1;
// if(x < 0) throw new Error('Harus positif,tidak boleh negatif');
// console.log(x);


// try/catch/finally
try {
    calculateGrade();
} catch(error) {
    console.log('Terjadi kesalahan');
    console.log(error.name);
    console.log(error.message);
}