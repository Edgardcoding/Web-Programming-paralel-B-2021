// object - literal
const student = {
    nim: 105011810128,
    regNo: 'S21810128',
    prodi: 'SI',
    faculty: 'FIk',
    firstName: 'Edgard',
    LastName: 'Supit',
    gender: 'M',
    isRegistered: true,
    address: {
        city: 'Airmadidi',
        postalCode: 95371,
        province: 'Sulawesi Utara'
    },
    hobbies: ['traveling', 'berenang', 'main Game']
};

console.log(student?.address?.street);

// optional chaining: ?.