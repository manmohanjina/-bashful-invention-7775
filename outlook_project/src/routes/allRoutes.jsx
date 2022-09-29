import { Route, Routes } from "react-router-dom";
import Modal from "../pages/loginmodal";

export default function Address(){

    
  return    <Routes>
        <Route path="/login" element={<Modal/>}></Route>
        <Route path="/" element={<h1></h1>}  ></Route>
        <Route path="/outlook" element={<h1></h1>}  ></Route>
        <Route path="/bussiness" element={<h1></h1>}  ></Route>
        <Route path="/money" element={<h1></h1>}  ></Route>
        <Route path="/cryptocorner" element={<h1></h1>}  ></Route>
        <Route path="/travel" element={<h1></h1>}  ></Route>
        <Route path="/sports" element={<h1></h1>}  ></Route>
        <Route path="/entertainment" element={<h1></h1>}  ></Route>
      

    </Routes>
}