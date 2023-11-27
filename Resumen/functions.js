// Objeto para gestionar los estudiantes
const studentManager = {
    // Arreglo para almacenar estudiantes
    students: [],

    // Método para agregar un nuevo estudiante
    addStudent: function (firstName, lastName, age, grades) {
        const newStudent = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            grades: grades,
            // Método para calcular el promedio de notas
            calculateAverage: function () {
                const totalGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
                return totalGrades / this.grades.length;
            },
            // Método para calcular la nota final
            calculateFinalGrade: function () {
                const average = this.calculateAverage();
                // Considera algún criterio para el cálculo de la nota final, por ejemplo, un 80% de la media
                return average * 0.8;
            }
        };

        // Agregar el estudiante al arreglo
        this.students.push(newStudent);
    },

    // Método para mostrar la tabla de estudiantes
    displayStudentTable: function () {
        const studentsBody = document.getElementById('students-body');
        studentsBody.innerHTML = ''; // Limpiar la tabla antes de mostrar los estudiantes

        for (const student of this.students) {
            studentsBody.innerHTML += `
                <tr>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.age}</td>
                    <td>${student.grades.join(', ')}</td>
                    <td>${student.calculateAverage().toFixed(2)}</td>
                    <td>${student.calculateFinalGrade().toFixed(2)}</td>
                </tr>
            `;
        }
    }
};

// Función para agregar un nuevo estudiante
function addStudent() {
    const studentNameInput = document.getElementById('student-name');
    const studentLastNameInput = document.getElementById('student-lastname');
    const studentAgeInput = document.getElementById('student-age');
    const studentGradesInput = document.getElementById('student-grades');

    const firstName = studentNameInput.value.trim();
    const lastName = studentLastNameInput.value.trim();
    const age = parseInt(studentAgeInput.value, 10);
    const grades = studentGradesInput.value.split(',').map(grade => parseInt(grade.trim(), 10));

    if (firstName && lastName && !isNaN(age) && grades.every(grade => !isNaN(grade))) {
        // Agregar el estudiante utilizando el objeto studentManager
        studentManager.addStudent(firstName, lastName, age, grades);
        // Mostrar la tabla actualizada
        studentManager.displayStudentTable();
        // Limpiar los campos del formulario después de agregar un estudiante
        studentNameInput.value = '';
        studentLastNameInput.value = '';
        studentAgeInput.value = '';
        studentGradesInput.value = '';
    } else {
        alert('Por favor, ingrese información válida para agregar un estudiante.');
    }
}

// Función para calcular y mostrar el promedio y la nota final de los estudiantes
function calculateAverages() {
    // Mostrar la tabla actualizada
    studentManager.displayStudentTable();
}
