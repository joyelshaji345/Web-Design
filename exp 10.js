const studentJSON = {
  "students": [
    { "name": "Abhi", "grade": 95 },
    { "name": "Ali", "grade": 82 },
    { "name": "Liza", "grade": 98 },
    { "name": "Meril", "grade": 76 },
    { "name": "Manu", "grade": 88 }
  ]
};
const sortOrder = "asc";
const students = [...studentJSON.students];
students.sort((studentA, studentB) => {
  if (sortOrder === "desc") {
    return studentB.grade - studentA.grade;
  } else {
    return studentA.grade - studentB.grade;
  }
});
console.log(`--- Students sorted by grade in ${sortOrder}ending order ---`);
console.log(students);
console.log("\n--- Sorted data as a JSON string ---");
console.log(JSON.stringify({ sortedStudents: students }, null, 2));
