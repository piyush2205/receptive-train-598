import { Route,Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Navbar from "../Pages/Navbar";
import Signup from "../Pages/Signup";


export default function AllRoutes(){
    return(
        <Routes>
        
         
         <Route path="/" element={<LandingPage/>}/>
         <Route  path="/login" element={<Login/>} />
         <Route  path="/signup" element={<Signup/>}/>
         <Route  path="" element={<Navbar/>}/>










        </Routes>
    )
}