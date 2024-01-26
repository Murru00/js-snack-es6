//NOEME COGNOME ID E GRADO STUDENTI

const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
];

//STAMPO TABELLA DEGLI STUDENTI

console.table(students);

//SCRIVO I NOMI DEGLI STUDENTI TUTTI IN MAIUSCOLO E STAMPO
const studentNameCAPS = students.map((student) => student.name.toUpperCase());
console.log(studentNameCAPS);

//IDENTIFICO GLI STUDENTI CON UN GRADO SUPERIORE A 70 E STAMPO
const gradeStudent = students.filter((student) => student.grades >= 70);
console.log(gradeStudent);

//IDENTIFICO GLI STUDENTI CON UN GRADO SUPERIORE A 70 CON ID SUPERIORE A 120 E STAMPO
const idStudent = students.filter((student) => student.grades > 70 && student.id >= 120);
console.log(idStudent);