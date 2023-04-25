import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./dashboard";
import Createuser from "./createuser";
import Viewuser from "./viewuser";
import Navbar from "./navbar";


function Menu() {
  return (
    <div>
       
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createuser" element={<Createuser />} />
          <Route path="/viewuser" element={<Viewuser />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default Menu;