import React, { useEffect, useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { TbBook } from "react-icons/tb";
import Cart from "../Cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleCourses = (course) => {
    let totalHours = course.credit;

    const isPresent = selectedCourses.find(
      (item) => item.title === course.title
    );
    if (isPresent) {
      return alert("Error");
    } else {
      selectedCourses.forEach((time) => {
        totalHours = totalHours + time.credit;
      });
      setTotalCredit(totalHours);
      setSelectedCourses([...selectedCourses, course]);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full m-4"
                  src={course.img}
                  alt="course image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mb-3">{course.title}</h2>
                <p>{course.details}</p>
                <div className="text-lg flex justify-between items-center mt-5">
                  <div className="flex items-center">
                    <p>
                      <FiDollarSign />
                    </p>
                    <p className="pl-4">Price: {course.Price}</p>
                  </div>
                  <div className="flex items-center">
                    <p>
                      <TbBook />
                    </p>
                    <p className="pl-4">
                      Credit: {course.credit}
                      {course.credit > 1 ? "hrs" : "hr"}
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end mt-6">
                  <button
                    onClick={() => handleCourses(course)}
                    className="btn btn-primary w-full text-lg font-semibold capitalize"
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
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
