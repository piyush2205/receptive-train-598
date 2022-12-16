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
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  import img from "./Surveyguru1.png"
  import { useNavigate, NavLink } from 'react-router-dom';
  

export default function LoginPassword({setPassword,password}){

    const navigate=useNavigate()
    const HandleAccount =()=>{
             setPassword()
             navigate( "/home" )
    }

return(
    <>

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
      h="350px">
      <Link color={"#005977"} >{"< Back"}
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
            }}>Enter password</Text>
          </Box>
        </HStack>
        <FormControl id="email" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            style={{
              padding: ' 0 16px ',
              height: '50px',
            }}
            type="password" 
            value={password}
        
                onChange={(e)=>setPassword(e.target.value)}
            />

          <Text color={"#005977"} mt="20px">Forgot Password?</Text>
        </FormControl>



        <Stack spacing={10} pt={2}>
          <Button
           onClick={HandleAccount}
            size="lg"
            bg={'#99e5c5'}
            color={'white'}
            _hover={{
              bg: 'green.500',
            }}>
           Log in
          </Button>
        </Stack>

      </Stack>
    </Box>
  </Stack>
</Flex>


    </>
)
}