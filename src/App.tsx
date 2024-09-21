import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="mt-3 mr-16 ml-16">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;