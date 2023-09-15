import PropTypes from "prop-types";

const Cart = ({
  selectedCourses,
  totalCredit,
  remainingCredit,
  totalPrice,
}) => {
  console.log(selectedCourses);
  return (
    <div className="w-full bg-base-100 shadow-xl rounded-xl p-8">
      <h1 className="text-sm md:text-base lg:text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining: {remainingCredit}
        {remainingCredit > 1 ? " hrs" : " hr"}
      </h1>
      <div className="my-4 border-b-2 border-gray-400"></div>
      <h1 className="text-sm md:text-base lg:text-xl font-bold mb-3 md:mb-5">
        Courses Name:
      </h1>
      {selectedCourses.map((course, idx) => (
        <li
          className="text-sm md:text-base lg:text-lg list-decimal md:leading-loose"
          key={idx}
        >
          {course.title}
        </li>
      ))}
      <div className="mt-6 mb-4 border-b-2 border-gray-400"></div>
      <h1 className="text-sm md:text-base font-semibold">
        Total Credit Hour : {totalCredit}
      </h1>
      <div className="my-4 border-b-2 border-gray-400"></div>
      <h1 className="text-sm md:text-base font-semibold">
        Total Price: {totalPrice} USD
      </h1>
    </div>
  );
};

Cart.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
  remainingCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
export default Cart;
