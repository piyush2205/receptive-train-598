import LoginEmail from "../Components/Login/LoginEmail";
import LoginPassword from "../Components/Login/Loginpassword";
import React from "react";
  
  
  export default function Login() {
    
    const [isNext, setIsNext] = React.useState(false);
    const [email,setEmail]=React.useState("")
    const [password,setPassword] =React.useState("")
  
          
  
    return (
  
  
      
    <>
{isNext? <LoginPassword password={password} setPassword={setPassword} />:<LoginEmail setIsNext={setIsNext}
email={email} setEmail={setEmail}></LoginEmail>}

</>
       
  
  
    )
  }
  
  
  