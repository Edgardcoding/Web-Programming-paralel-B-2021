// class
class Student {
    constructor(nim, faculty) {
        this.nim = nim;
        this.faculty = faculty;
    }

    display() {
        return 'NIM: ${this.nim} ${this.faculty}';
    }
}

// instantiation
const stu1 = new Student('105011810036', 'FIK');
console.log(stu1.display());