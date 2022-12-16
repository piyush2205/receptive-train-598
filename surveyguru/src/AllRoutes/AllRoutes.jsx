import { Route,Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import HomePage from "../Pages/homePage";
import Signup from "../Pages/Signup";


export default function AllRoutes(){
    return(
        <Routes>
        
         <Route path="/home" element={<HomePage/>}/>
         <Route path="/" element={<LandingPage/>}/>

         <Route  path="/login" element={<Login/>} />

         <Route  path="/signup" element={<Signup/>}/>

        
        </Routes>
    )
}