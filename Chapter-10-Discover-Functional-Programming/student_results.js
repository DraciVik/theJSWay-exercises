/*
Student results
Here's a program that shows female students results (name and average grade).

const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

// Compute female student results
const femaleStudentsResults = [];
for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
    for (const grade of student.grades) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade
    });
  }
}

console.log(femaleStudentsResults);
Refactor it using functional programming. Execution result must stay the same.
*/

const females = (array, sex) => array.filter(item => item.sex === sex);

const gradesSum = grades => grades.reduce((acc, value) => acc + value, 0);

const femaleStudentResults = [];

const femaleStudents = females(students, "f");
femaleStudents.forEach(student => {
  const gradeSum = gradesSum(student.grades);
  const averageGrade = gradeSum / student.grades.length;
  femaleStudentResults.push({
    avgGrade: averageGrade,
    name: student.name
  });
})
