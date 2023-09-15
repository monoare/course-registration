import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <h1 className="text-lg md:text-4xl font-bold text-center pt-6 md:pt-14 mb-6 md:mb-8">
        Course Registration
      </h1>
      <div className="container mx-auto">
        <Home></Home>
      </div>
    </>
  );
}

export default App;
