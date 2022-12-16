import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image,
    Checkbox
  } from '@chakra-ui/react';
  import { useState ,useContext} from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  import img from "./Surveyguru1.png"
  import { Navigate, NavLink } from 'react-router-dom';
import SignupEmail from './SignupEmail';
import { AuthContext } from '../../AuthContext/AuthContext';

export default function 
SignupPassword({setPassword,password,handleAccount,handleRegister,confirmPassword,setConfirmPassword}){

   const handlePassword=(e)=>{
    setPassword(e.target.value)
   }
   
    
return(
        

 <Flex

 minH={'100vh'}
 align={'center'}
 justify={'center'}
 // bg={useColorModeValue('gray.50', 'gray.800')}
 >

 <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
>

   <Stack w="50%">
     <Image src={img} alt="signuplogo" />

   </Stack>
   <Box
     boxShadow="0 2px 8px 0 rgb(0 0 0 / 14%)" 
     rounded={'lg'}
     // bg={useColorModeValue('white', 'gray.700')}
     // boxShadow={'lg'}
     p={8}
     w="448px"
     h="498px">
     <Link color={"#005977"} to={<SignupEmail/>}>{"< Back"}
     </Link>
     <Stack spacing={4}>
       <HStack>
         <Box>
           <Text style={{
             color: "#333e48",
             lineHeight: "1.5",
             margin: "0",
             fontSize: "34px",
             fontWeight: "300",
           }}>Create password</Text>
         </Box>
       </HStack>
       <FormControl id="password" isRequired>
         <FormLabel>Enter a password</FormLabel>
         <Input
           style={{
             padding: ' 0 16px ',
             height: '50px',
           }}
           type="password" 
           value={password}
           onChange={handlePassword}
           />
           
         <Text style={{
           lineHeight: "16px",
           color: "#6b787f",
           fontSize: "12px",
           marginTop: "20px"
         }}>Enter at least 8 characters. Don’t use common words, names, or sequential or repeated characters.</Text>
       </FormControl>


       <FormControl id="confirmPassword" isRequired>
         <FormLabel>Confirm password</FormLabel>
         <Input
           style={{
             padding: ' 0 16px ',
             height: '50px',
           }}
           value={confirmPassword}
           onChange={(e)=>setConfirmPassword(e.target.value)}
           type="password" />

       </FormControl>
       <Stack spacing={10} pt={2}>
         <Button
         disabled={password!=confirmPassword }
         onClick={handleRegister}
           size="lg"
           bg={'#99e5c5'}
           color={'white'}
           _hover={{
             bg: 'green.500',
           }}>
          Create account
         </Button>
       </Stack>

     </Stack>
   </Box>
 </Stack>
</Flex>
)
}