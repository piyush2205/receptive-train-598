
import './App.css';

import AllRoutes from './AllRoutes/AllRoutes';
 import { Spinner } from '@chakra-ui/react'
import React from 'react';


function App() {
 
  const [loading,setLoading]=React.useState("true")
setTimeout(()=>{
setLoading(false)
},2000)

  return loading? <Spinner
  thickness='4px'
  speed='1s'
  emptyColor='gray.200'
  color='green'
  w="100px"
  h="100px"
  margin="200px 750px"
/>: (
  
     <AllRoutes/>
  
   

  )
}

export default App;
