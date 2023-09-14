import React from "react";

const Cart = ({
  selectedCourses,
  totalCredit,
  remainingCredit,
  totalPrice,
}) => {
  console.log(selectedCourses);
  return (
    <div className="w-full bg-base-100 shadow-xl rounded-xl p-6">
      <h1 className="text-lg font-bold text-[#2F80ED]">
        Credit Hours Remaining: {remainingCredit}
        {remainingCredit > 1 ? " hrs" : " hr"}
      </h1>
      <div className="my-4 border-b-2"></div>
      <h1 className="text-xl font-bold mb-5">Courses Name:</h1>
      {selectedCourses.map((course, idx) => (
        <li className="list-decimal leading-loose" key={idx}>
          {course.title}
        </li>
      ))}
      <div className="mt-6 mb-4 border-b-2"></div>
      <h1>Total Credit Hour : {totalCredit}</h1>
      <div className="my-4 border-b-2"></div>
      <h1>Total Price: {totalPrice} USD</h1>
    </div>
  );
};

export default Cart;
