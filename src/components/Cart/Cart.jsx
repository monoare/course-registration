import React from "react";

const Cart = ({ selectedCourses, totalCredit }) => {
  console.log(selectedCourses);
  return (
    <div className="w-full bg-base-100 shadow-xl rounded-xl">
      <h1>Credit hours remaining:{selectedCourses.length} </h1>
      <hr />
      <h1>Courses Name:</h1>
      {selectedCourses.map((course, idx) => (
        <p key={idx}>{course.title}</p>
      ))}
      <h1>Credit:{totalCredit}</h1>
    </div>
  );
};

export default Cart;
