import { Button, Heading, Stack,Box, Flex ,Input} from "@chakra-ui/react";
import HomePageNavbar from "../Components/HomePageNavbar";




export default function HomePage(){
     return(
        <>
            <HomePageNavbar/>
            <Stack pt="24px" pl="25px" >
           
        
            <Box pt="24px" pl="25px" >
            <Heading     color="rgb(64, 64, 64)" fontSize="32px" lineHeight="1.5"  >Home</Heading>
                <Button bg="#008323" color="white" _hover={{
                    backgroundColor:"green.600"
                }} w="150px">Create survey</Button>

           
              <Input w="200px"  ml="1000px" placeholder="Search"/>
            </Box>
              
          
             
            </Stack>
            <hr style={{marginTop:"50px"}}></hr>
        </>
        
     )
}