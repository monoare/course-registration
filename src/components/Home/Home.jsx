import { useEffect, useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { TbBook } from "react-icons/tb";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleCourses = (course) => {
    let totalHours = course.credit;
    let totalValue = course.price;

    const isPresent = selectedCourses.find(
      (item) => item.title === course.title
    );
    if (isPresent) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have chosen same course twice!",
      });
    } else {
      selectedCourses.forEach((item) => {
        totalHours = totalHours + item.credit;
        totalValue = totalValue + item.price;
      });

      if (totalHours < 21) {
        setTotalCredit(totalHours);
        setTotalPrice(totalValue);
        setSelectedCourses([...selectedCourses, course]);
      }
    }
    const remainingCreditHours = 20 - totalHours;
    if (remainingCreditHours < 0) {
      Swal.fire({
        icon: "warning",
        title: "Sorry",
        text: "Your total credit hour: 20 and You have no credit hour right now.",
      });
    } else {
      setRemainingCredit(remainingCreditHours);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20 mx-4 md:mx-0">
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full mx-8 my-2 md:m-4"
                  src={course.img}
                  alt="course image"
                />
              </figure>
              <div className="card-body pt-2 md:pt-6">
                <h2 className="text-center font-semibold lg:text-left md:mb-3 text-sm md:text-base lg:text-lg">
                  {course.title}
                </h2>
                <p className="text-justify">{course.details}</p>
                <div className="text-lg flex justify-between items-center mt-5 gap-4">
                  <div className="flex items-center">
                    <p className="lg:h-6 lg:w-6">
                      <FiDollarSign />
                    </p>
                    <p className="lg:pl-2 text-sm md:text-base lg:text-lg">
                      Price: {course.price}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="lg:h-6 lg:w-6">
                      <TbBook />
                    </p>
                    <p className="lg:pl-2 text-sm md:text-base lg:text-lg">
                      Credit: {course.credit}
                      {course.credit > 1 ? "hrs" : "hr"}
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end mt-6">
                  <button
                    onClick={() => handleCourses(course)}
                    className="btn btn-primary w-full text-sm md:text-base lg:text-lg font-semibold capitalize"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Cart
          selectedCourses={selectedCourses}
          totalCredit={totalCredit}
          remainingCredit={remainingCredit}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
};

Home.propTypes = {
  handleCourses: PropTypes.func.isRequired,
};

export default Home;
