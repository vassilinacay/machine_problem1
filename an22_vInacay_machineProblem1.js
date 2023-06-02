/*
    Program: Grade Calculator
    Programmer: Vassili Inacay
    Section: AN22
    Start Date: 2023 June 2 - 07:00
    End Date: 2023 June 2 - 09:00
*/

// Initialize an array to store student objects
let students = [];

numOfStudent = prompt(`Enter number of student: `);

// prompt user to enter the name and grades for each student
for (let i = 1; i <= numOfStudent; i++) {
    let student = {};
    student.name = prompt(`Enter the name of student ${i}:`);
    
    // prompt user to enter grade of enabling assessments
     let enablingAssSum = 0;
    for (let j = 1; j <= 5; j++) {
        let grade = parseFloat(prompt(`Enter Enabling Assessment ${j} for ${student.name}:`));
        enablingAssSum += grade;
    }
    // calculate the avg of enabling assessment
    student.class_participation = Math.round(enablingAssSum / 5);

    // prompt user to enter grade of summative assessments
    let summativeAssSum = 0;
    for (let k = 1; k <= 3; k++) {
        let grade = parseFloat(prompt(`Enter Summative Assessment ${k} for ${student.name}:`));
        summativeAssSum += grade;
    }
    // calculate the avg of summative assessments
    student.summative_assessment = Math.round(summativeAssSum / 3);

    // prompt user to enter grade of major exam
    student.exam_grade = Math.round(parseFloat(prompt(`Enter Major Exam Grade for ${student.name}:`)));

    // calculate the final grade
    student.final_grade = Math.round((student.class_participation * 0.3) + (student.summative_assessment * 0.3) + (student.exam_grade * 0.4));

    // find the corresponding letter grade of final_grade
    if (student.final_grade >= 90 && student.final_grade <= 100) {
        student.letter_grade = 'A';
    } else if (student.final_grade >= 80 && student.final_grade <= 89) {
        student.letter_grade = 'B';
    } else if (student.final_grade >= 70 && student.final_grade <= 79) {
        student.letter_grade = 'C';
    } else if (student.final_grade >= 60 && student.final_grade <= 69) {
        student.letter_grade = 'D';
    } else if (student.final_grade < 60){
        student.letter_grade = 'F';
    } else {
        prompt("Invalid!");
    }
    students.push(student);
}
// display the results in a table format using console.table() function
console.table(students, ['name', 'class_participation', 'summative_assessment', 'exam_grade', 'final_grade', 'letter_grade']); 