import StudentItem from './StudentItem'

const StudentList = () => {
  return (
    <>
      <h2>Student List</h2>
      {students.map((student) => (
        <StudentItem key={student.name} student={student} />
      ))}
    </>
  )
}

export default  