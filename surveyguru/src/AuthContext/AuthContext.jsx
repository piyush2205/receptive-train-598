import { createContext, useState } from "react";


export const AuthContext=createContext();
function AuthContextProvider({children}){
    const initState={
        isAuth:false,
        token:null,
        email:'',
        password:''
    }






const [state,setAuthState]=useState(initState)


const loginUser=(token,email,password)=>{
setAuthState(
    {
        ...state,
       isAuth:true,
       token,
       email,
       password,
    }
)
}



const logoutUser=()=>{
    setAuthState(
        {
            ...state,
           isAuth:false,
           token:null,
           email:"",
           password:''
        }
    )
    }


        







    return(
        <AuthContext.Provider value={{loginUser,logoutUser,state}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider