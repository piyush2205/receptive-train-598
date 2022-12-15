import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    Grid,
    Flex,
    Image
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import img from "../Images/Surveyguru.png"
  
  export default function Pricing() {
    return (
        <Flex direction="row"    mt="50px" gap={10}>
      <Center py={6}  ml="250px" >
        <Box 
          maxW={'330px'}
          w={'315px'}
          h={"464px"}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack bg="#00bf6f" 

            textAlign={'center'}
             p={6}
            color='white'
            align={'center'}>
            <Text
              fontSize="22px"
              fontWeight={500}
         
              p={2}
              px={3}
              color='white'
              rounded={'full'}>
              Basic
            </Text>
          </Stack>
          <Stack direction={'row'} align={'center'} justify={'center'} mt="30px">
             <Image src={img} alt="img"/>
            </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} margin="auto" >
          <Button
              mt={5}
              ml={90}
            //   w={'full'}
              bg={"#00bf6f"}
              color={'white'}
              rounded={"5px"}
            //   boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              Sign up
            </Button>

            <p style={{marginTop:"20px" ,width:"150px",marginLeft:"70px" ,textAlign:"unset"}}>
          Send unlimited surveys with up to 10 questions. Response limits apply.
          </p>
  
           
          </Box>
        </Box>
      </Center>


      <Center py={6} >
        <Box
      
          maxW={'330px'}
          w={'315px'}
          h={"464px"}
        
         
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack  bg="#05467e" 
            textAlign={'center'}
            p={6}
            color={'white'}
            align={'center'}>
            <Text
              fontSize={'22px'}
              fontWeight={500}
             
              p={2}
              px={3}
              color={"white"}
              >
             Individual Advantage
            </Text>
            
          </Stack>
          <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}> ₹</Text>
              <Text fontSize={'6xl'} fontWeight={500}>
                1250
              </Text>
              <Text  color={'gray.500'}>/month</Text>
            
            </Stack>
            <p style={{textAlign:"center",}}>Billed ₹15,000 annually</p>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Button
             
            //   mt={5}
              ml={50}
            //   w={'full'}
              bg={"#05467e"}
              color={'white'}
              rounded={"5px"}
           
            
             
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              See all features
            </Button>
           <p style={{textAlign:"center",marginTop:"20px"}}>
           Get our most popular features for creating, sending & analyzing surveys.
           </p>
  
           
          </Box>
        </Box>
      </Center>

      <Center py={6} >
        <Box
        
          maxW={'330px'}
          w={'315px'}
          h={"464px"}
        
         
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack  bg="#53225b" 
            textAlign={'center'}
            p={6}
            color={'white'}
            align={'center'}>
            <Text
              fontSize={'22px'}
              fontWeight={500}
             
              p={2}
              px={3}
              color={"white"}
              >
             Team Advantage
            </Text>
            
          </Stack>
          <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}> ₹</Text>
              <Text fontSize={'6xl'} fontWeight={500}>
              975
              </Text>
              <Text  color={'gray.500'}>/month</Text>
            
            </Stack>
            <p style={{textAlign:"center",}}>Starting at 3 users, billed annually</p>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Button
             
            //   mt={5}
              ml={50}
            //   w={'full'}
              bg={"#53225b"}
              color={'white'}
              rounded={"5px"}
           
            
             
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              See all features
            </Button>
           <p style={{textAlign:"center",marginTop:"20px"}}>
           Get our most popular features for creating, sending & analyzing surveys.
           </p>
  
           
          </Box>
        </Box>
      </Center>




      </Flex>
    );
  }