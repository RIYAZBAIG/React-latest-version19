import React from 'react';

const Practices = () => {
  const students =[4,8];
  console.log(Boolean(students.length));
  return (
    <div>
      <h2>Hello</h2>
      <p>{!Boolean(students.length) && "No Students Found"}</p>
      <p>Number of Students: {students.length}</p>
    </div>
  );
}

export default Practices;
