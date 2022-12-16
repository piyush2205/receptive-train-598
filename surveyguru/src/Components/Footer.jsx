
import {
    Grid,
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  List,
} from '@chakra-ui/react';
import { ReactNode } from 'react';



export default function Footer(){
return(
    <>
        <Stack width="1400px" h="380px" m="auto" mt="100px">
        <Flex direction={"column"} gap="50px" color="#73747A">
        
             <Flex  direction={"row"} gap="100px">
             <Box>
                <Text>Community:</Text>
              </Box>
              <Flex direction={"row"} gap="20px" color="#73747A">
           
                <Text>Developers</Text>
              
               <Text color="black">•</Text>
                <Text>Facebook</Text>
             
                <Text color="black">•</Text>
                <Text>Twitter</Text>
              
                <Text color="black">•</Text>
                <Text>Linkedin</Text>
             
                <Text color="black">•</Text>
                <Text>our blog</Text>
                <Text color="black">•</Text>
                <Text>Instagram</Text>

                <Text color="black">•</Text>
                <Text>Youtube</Text>
             
              </Flex>
             </Flex>
             


             <Flex  direction={"row"} gap="100px" mt="-10px">
             <Box>
                <Text>About Us:</Text>
              </Box>

              <Flex direction={"row"} gap="20px" h="100px" ml="20px" w="1400px"  color="#73747A">
             <Text>Leadership Team</Text>
              
              <Text color="black">•</Text>
                <Text>Board of Directors</Text>
             
                <Text color="black">•</Text>
                <Text>Investor Relations</Text>
              
                <Text color="black">•</Text>
                <Text>App Directory</Text>
             
                <Text color="black">•</Text>
                <Text>Newsroom</Text>
                <Text color="black">•</Text>
                <Text>Office Locations</Text>
                <Text color="black">•</Text>
                <Text>Imprint</Text>
                <Text color="black">•</Text>
                <Text>Careers</Text>
                <Text color="black">•</Text>
                <Text>Sitemap</Text>
                <Text color="black">•</Text>
                <Text>Help</Text>
                  <Text color="black">•</Text>
                <Text>Login</Text>
                <Text color="black">•</Text>
                <Text>Signup</Text>

             
              </Flex>
             </Flex>

             <Flex  direction={"row"} gap="120px"  mt="-50px"> 
             <Box>
                <Text>Policies:</Text>
              </Box>
              <Flex direction={"row"} gap="20px" color="#73747A">
           
                <Text>Terms of Use</Text>
              
                <Text color="black">•</Text>
                <Text>Privacy Notice</Text>
             
                <Text color="black">•</Text>
                <Text>California Privacy Notice</Text>
              
                <Text color="black">•</Text>
                <Text>Acceptable Uses Policy</Text>
             
                <Text color="black">•</Text>
                <Text>Security Statement</Text>
                <Text color="black">•</Text>
                <Text>GDPR Compliance</Text>
                <Text color="black">•</Text>
                <Text>Email Opt-In</Text>
             
              </Flex>
             </Flex>
             <Flex  direction={"row"} gap="100px">
             <Box>
                <Text>Use Cases:</Text>
              </Box>

              <Flex direction={"row"} gap="20px" color="#73747A">
           
                <Text>
Online Polls</Text>
              
                <Text color="black">•</Text>
                <Text>Facebook Surveys</Text>
             
                <Text color="black">•</Text>
                <Text>Survey Template </Text>
              
                <Text color="black">•</Text>
                <Text>Scheduling Polls</Text>
             
                <Text color="black">•</Text>
                <Text>Google Forms vs. SurveyMonkey</Text>
                <Text color="black">•</Text>
                <Text>Employee Satisfaction Surveys</Text>
                <Text color="black">•</Text>
                <Text>Mobile Surveys</Text>
             
              </Flex>
             </Flex>

              
        </Flex>
           
        </Stack>
    </>
)
}