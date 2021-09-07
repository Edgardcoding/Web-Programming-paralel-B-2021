const PII = Math.PI;

function hello(name) {
    return 'hello ${name}';
}

class Student {
    constructor(nim, faculty) {
        this.nim = nim;
        this.faculty = faculty;
    }

    display() {
        return '${this.nim} / ${this.faculty}';
    }
}

export { PII, hello, Student };