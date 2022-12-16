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
  import React, { useContext, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  import img from "./Surveyguru1.png"
  import { useNavigate, NavLink } from 'react-router-dom';
  import { AuthContext } from '../../AuthContext/AuthContext';

export default function SignupEmail({setIsNext,email,setEmail,}){
   const {state,loginUser}=useContext(AuthContext)
//    console.log(state)

    const navigate=useNavigate()
    const handleLogin =()=>{
             navigate( "/login" )
    }


  const HandleNext = () => {
     loginUser(email)
    setIsNext(true)
  }

return(
    
<Flex

minH={'100vh'}
align={'center'}
justify={'center'}
// bg={useColorModeValue('gray.50', 'gray.800')}
>

<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >

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
    h="450px">
    <Text
      style={{
        color: "#333e48",
        lineHeight: "1.5",
        margin: "0",
        fontSize: "15px",
        fontWeight: "400",
        textAlign: "right"
      }}>Already have an account?
      <Link onClick={handleLogin}
        style={{
          color: "#007faa",
          textDecoration: "none",
          border: "none",
          background: "0 0",
          fontWeight: "inherit",
          fontSize: "inherit",
          outline: 0,
          cursor: "pointer",
          textAlign: "right",
        }}> Log in </Link>
    </Text>
    <Stack spacing={4}>
      <HStack>
        <Box>
          <Text style={{
            color: "#333e48",
            lineHeight: "1.5",
            margin: "0",
            fontSize: "34px",
            fontWeight: "300",
          }}>Create an account</Text>
        </Box>
      </HStack>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input
        value={email}
          style={{
            padding: ' 0 16px ',
            height: '50px',
          }}
          type="email" 
        onChange={(e)=>setEmail(e.target.value)}
          />
      </FormControl>
      <Checkbox colorScheme='green' size='lg' type="checkbox" >
        <Text
          style={{
            lineHeight: "16px",
            color: "#6b787f",
            fontSize: "12px",
          }}>You agree to the <Link color={"#005977"}>Terms of Use</Link> and <Link color={"#005977"}>Privacy Notice</Link></Text>
      </Checkbox>
      <Checkbox colorScheme='green' size="lg" type="checkbox">
        <Text style={{
          lineHeight: "16px",
          color: "#6b787f",
          fontSize: "12px",
        }}>
          You agree to receive product news and special promotions via email. You can opt-out of these emails in your My Account page anytime.</Text>
      </Checkbox>
      <Stack spacing={10} pt={2}>
        <Button
         
         onClick={HandleNext}
          // loadingText="Submitting"
          size="lg"
          bg={'#99e5c5'}
          color={'white'}
          _hover={{
            bg: 'green.500',
          }}>
          Next
        </Button>
      </Stack>

    </Stack>
  </Box>
</Stack>
</Flex>

 
)
}