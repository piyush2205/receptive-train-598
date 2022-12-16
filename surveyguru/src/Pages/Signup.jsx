
import SignupEmail from '../Components/SignUp/SignupEmail';
import SignupPassword from '../Components/SignUp/SignupPassword';
import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Signup() {
  const [isNext, setIsNext] = React.useState(false);
  const [email,setEmail]=React.useState("")
  const [password,setPassword] =React.useState("")
  const [confirmPassword,setConfirmPassword]=React.useState("")


  const navigate=useNavigate()


  const handleRegister =async()=>{
    // e.preventDefault();
  
    try{
    let res=await fetch("https://reqres.in/api/register",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      })
    })
   
      res=await res.json();
      console.log(res)
       alert("Register successfully")
       if(res.token){ navigate("/home")
      }
        
  
    }catch(err){
      console.log(err)
    }
  } 
  
  

//  
//  const handleAccount =()=>{
//  }


  return (

<>
{isNext?<SignupPassword password={password} setPassword={setPassword} setConfirmPassword={setConfirmPassword} confirmPassword={confirmPassword}  handleRegister={handleRegister} />:<SignupEmail setIsNext={setIsNext}
email={email} setEmail={setEmail}/>}

</>

  
  


  )
}



















