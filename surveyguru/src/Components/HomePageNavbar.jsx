import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import img from "../Images/Surveyguru1.png"

import { useNavigate } from 'react-router-dom';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);



export default function HomePageNavbar() {


  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();


  
  
  const navigate=useNavigate()
  const handleLogout =()=>{
           navigate( "/" )
  }






  return (
    <>
      <Box bg="#404040"  px={4}>
        <Flex h={12} alignItems={'center'} >
          <Flex>  
          <Image 
          mt="10px"
             maxW="180px" maxH="26px" 
             src={img} alt='logo'/>
             
              
         <Text 
         style={{ color: "rgb(255, 255, 255)",
    borderRight: "none",
    borderLeft: "none",
    borderImage: "initial",
    cursor: "pointer",
    height: "48px",
    margin: "0px 16px",
    display: "flex",
    padding: "0px",
     position: "relative",
    fontSize: "14px",
    background: "none",
    borderTop: "4px solid transparent",
    boxShadow: "none",
    boxSizing: "border-box",
    alignItems: "center",
    fontWeight: "500",
     borderBottom: "4px solid rgb(255, 255, 255)",
    borderRadius: "0px",
    justifyContent: "center",
    textDecoration: "none",
    }}
     ml="16px">Home</Text>
    
         <Text 
          style={{    color: "rgb(255, 255, 255)",
    borderRight: "none",
    borderLeft: "none",
    borderImage: "initial",
    cursor: "pointer",
    height: "48px",
    margin: "0px 16px",
    display: "flex",
    padding: "0px",
    position: "relative",
    fontSize: "14px",
    background: "none",
    borderTop: "4px solid transparent",
    boxShadow: "none",
    boxSizing: "border-box",
    alignItems: "center",
    fontWeight: "500",
   
    borderRadius: "0px",
    justifyContent: "center",
    textDecoration: "none",
    }}

    _hover={{
        borderBottom: "4px solid rgb(255, 255, 255)",
    }}
    ml="15px" color="white">Plans & Pricing</Text>
        
        </Flex>
 
        <Flex ml="550px" mr="20px">
         <Button textAlign="center" h="30px" bg="#ffe11b" color={ colorMode === 'light' ? "black" : "black"} >   Upgrade</Button> 
      
        <Button h="30px" ml="10px"
         textAlign="center">Create Survey</Button>
        </Flex>  

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button h="30px" mt="5px" onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Text}
                  // rounded={'full'}
                  variant={'link'}
                 
                  _hover={{
        borderBottom: "4px solid rgb(255, 255, 255)",
    }}
                  minW={0}
                  Color="black">
                <Text 
                 style={{    color: "rgb(255, 255, 255)",
    borderRight: "none",
    borderLeft: "none",
    borderImage: "initial",
    cursor: "pointer",
    height: "38px",
    margin: "0px 16px",
    display: "flex",
    padding: "0px",
    position: "relative",
    fontSize: "14px",
    background: "none",
    borderTop: "4px solid transparent",
    boxShadow: "none",
    boxSizing: "border-box",
    alignItems: "center",
    fontWeight: "500",
   
    borderRadius: "0px",
    justifyContent: "center",
    textDecoration: "none",
    }}
                >pk.rv.668 </Text>
                  
                </MenuButton>
                <MenuList alignItems={'center'}  >

                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Library</MenuItem>
                  <MenuItem>Contacts</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>

        </Flex>
      </Box>
    </>
  );
}