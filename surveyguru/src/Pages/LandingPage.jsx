import { border, Box, ButtonGroup, Center, Flex, Grid, Select, Stack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react"

import { Heading } from '@chakra-ui/react'
import img1 from "../Images/Screenshot1.png"
import img2 from "../Images/Screenshot2.png"
import img3 from "../Images/Screenshot3.png"
import img4 from "../Images/Screenshot4.png"
import img5 from "../Images/Screenshot5.png"
import img6 from "../Images/Screenshot6.png"
import Footer from "../Components/Footer"
import Pricing from "../Components/Pricing";
import BlogPostWithImage from "../Components/blog"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./landing.css"

export default function LandingPage() {
    const navigate = useNavigate()
    const HandleGetStarted = () => {
        navigate("/signup")
    }

    return (
        <>
            {/* navbar           ................................................................................. */}
            <Navbar />
            {/*hero................................................................................................  */}
            <Stack direction={'row'} height="600.34px" bg="#CAE8DC" margin="auto" >
                <Stack margin="auto" direction={'row'} mt={"50px"}>
                    <Box width="642px" height="456px" marginTop="80px" marginLeft="50px" >
                        <div style={{ margin: "64px", width: "520px" }} >
                            <Heading color="rgb(34, 79, 60)" width="542px"
                                fontWeight="635"
                                fontSize="44px"
                                lineHeight="52px"
                                letterSpacing="normal" >
                                Create free surveys and forms online in minutes
                            </Heading>
                            <p style={{
                                color: "rgb(34, 79, 60)",
                                margin: "20px 0px",
                                textAlign: "left",
                                fontSize: "17px",
                                fontWeight: "500",
                                //   border:"1px solid red",
                            }}>
                                Ask, listen, and act on insights fast with a global leader in surveys and forms software.
                            </p>
                            <Button mt="32px" bg="rgb(249, 190, 0)"
                                className="css-x1ay3"
                                onClick={HandleGetStarted}
                                h="50px"
                                p="0px 36px"
                                fontSize="15px"
                                fontWeight="500"
                                alignItems="center">Get started</Button>
                        </div>


                    </Box>
                    {/* <Box height="593.34px" >
                        <Image height="593.34px" margin="auto" src="https://prod.smassets.net/assets/cms/sm/uploads//homepage-hero-exp-bg-green.png" alt="homepagehero" />
                    </Box> */}
                </Stack>

            </Stack>

            {/*suerveyaudince................................................................................   */}

            <Stack height="180px" width="1061px" m="auto" bg="#f7f7f7" mt="25px">
                <Box>
                    <Heading
                        textAlign="center"
                        padding="32px 0px"
                        fontSize="24px"
                        fontWeight="500">Who is your survey audience?</Heading>
                </Box>
                <Box m="auto" >
                    <Flex>
                        <ButtonGroup margin="auto" gap='5' >
                            <Button bg="#fff" borderColor="#edeeee" w="202px" h="40px" className="css-wi0tni" >Employees</Button>
                            <Button bg="#fff" borderColor="#edeeee" w="202px" h="40px" className="css-wi0tni" >Customers</Button>
                            <Button bg="#fff" borderColor="#edeeee" w="202px" h="40px" className="css-wi0tni" >Target Markets</Button>
                            <Button bg="#fff" borderColor="#edeeee" w="202px" h="40px" className="css-wi0tni" >Other</Button>
                        </ButtonGroup>
                    </Flex>

                </Box>

            </Stack>

            <Stack width="1100px" direction={'row'} mt="50px" margin="auto">

                <Box width="72%"
                    height="100%"
                    _hover={{
                        cursor: "pointer",
                        // top: 0,
                        // left: 0,
                        width: "73%",
                        height: "100%",
                        boxShadow: "0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15)",
                        // content: "''",
                        zIndex: 1,
                        // position:"relative"
                    }} >
                    <Image width="100%"
                        height="100%" src={img1} alt="ss1"></Image>
                </Box>

                <Grid templateColumns='repeat(2, 1fr)' gap={1} width="100%"
                    height="100%">
                    <Box _hover={{
                        cursor: "pointer",
                        // top: 0,
                        // left: 0,
                        width: "101%",
                        height: "100%",
                        boxShadow: "0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15)",
                        // content: "''",
                        zIndex: 1,
                    }}> <Image src={img2} alt="ss1"></Image></Box>
                    <Box _hover={{
                        cursor: "pointer",
                        // top: 0,
                        // left: 0,
                        width: "101%",
                        height: "100%",
                        boxShadow: "0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15)",
                        // content: "''",
                        zIndex: 1,
                    }}> <Image src={img5} alt="ss1"></Image></Box>
                    <Box
                     _hover={{
                        cursor: "pointer",
                        // top: 0,
                        // left: 0,
                        width: "101%",
                        height: "100%",
                        boxShadow: "0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15)",
                        // content: "''",
                        zIndex: 1,
                    }}> <Image src={img4} alt="ss1"></Image></Box>
                    <Box _hover={{
                        cursor: "pointer",
                        // top: 0,
                        // left: 0,
                        width: "101%",
                        height: "100%",
                        boxShadow: "0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15)",
                        // content: "''",
                        zIndex: 1,
                    }}> <Image src={img3} alt="ss1"></Image></Box>
                </Grid>
            </Stack>


            {/* aciveuser.......................................................................................... */}
            <Box mt="50px" >
                <Heading fontSize="18px" textAlign="center">Join more than 17 million active users worldwide</Heading>
                <Image width="1261px" margin="auto" mt="20px" src={img6} alt="ss6" />
            </Box>



            {/* chose plan.......................................................................................... */}

            <Stack mt="50px" >
                <Heading fontSize="32px" textAlign="center">Choose a plan that works for you</Heading>
                <p style={{ textAlign: "center", marginTop: "25px", fontSize: "20px" }}>Get an individual plan with features that you need, or create a team instead!</p>
            </Stack>

            <Pricing />
{/* ........................... */}
            <Box minH="290px" height={450} mt="50px" >
                <Image minH="290px" objectFit="cover" height={450} position="absolute" src="https://prod.smassets.net/assets/content/sm/AudienceBG-NEW.png"></Image>
              <div style={{position:"relative", width:"700px", textAlign:"center",margin:"auto",borderTop:"1px solid",}} >
                    <p style={{marginTop:"155px" ,color:"white" ,fontSize:"18px"}}>
                        <strong>
                        Looking for targeted responses to your surveys?
                        </strong>
                    <br />
                    Get the responses you need in minutes with SurveyMonkey Audience, our trusted panel of more than 175 million respondents from across the globe.
                    </p>
                    
                
                <Button>Learn More</Button>
              </div>
                

            </Box>

            {/* list of data ..............................................................................*/}


            <Stack height="180px" width="1061px" margin="auto"  >
                <Box mt="50px">
                    <Heading textAlign="center" fontSize="32px">Start with an expert-written template</Heading>
                    <p style={{ textAlign: "center", marginTop: "25px", fontSize: "20px", width: "730px", marginLeft: "180px" }}>Our sample survey templates make it easy for you to start collecting feedback in just minutes. Explore hundreds of questions across different survey types, all designed to get you accurate results you can rely on.</p>
                </Box>
            </Stack>


            {/* ...................................................... */}






            {/*data of aary */}



            {/* ................................................................ */}



            {/* tools that spark.............................................................. */}


            <Stack height="180px" width="1061px" margin="auto"  >
                <Box mt="50px">
                    <Heading textAlign="center" fontSize="32px">Tools that spark business breakthroughs</Heading>
                    <p style={{ textAlign: "center", marginTop: "50px", fontSize: "20px", width: "730px", marginLeft: "180px" }}>Discover specialized toolkits designed for your role and industry.</p>
                </Box>
            </Stack>

            <Stack w="1320px" margin="auto" marginTop="50px" padding="20px">
                <Flex textAlign="center" gap="65px" >
                    <Box p="10px" >

                        <Image src="https://prod.smassets.net/assets/content/sm/customer-support-toolkit-directory.png" alt="xyz"></Image>
                        <Box w="300px" m={"auto"} lineHeight="32px">
                            <Heading fontSize="20px" mt={5}>Customer support</Heading>
                            <p style={{ marginTop: "5px", fontSize: "18px !important" }} >Provide better customer experiences while keeping your teams engaged.</p>
                            <Text mt="5px" color="rgb(0, 127, 170)" fontSize={18}>Learn more</Text>
                        </Box>

                    </Box>
                    <Box >
                        <Image src="https://prod.smassets.net/assets/content/sm/hr-leader-toolkit-directory.png" alt="xyz"></Image>
                        <Box w="300px" m={"auto"} lineHeight="32px">
                            <Heading fontSize="20px" mt={5}>Human resources</Heading>
                            <p style={{ marginTop: "5px", fontSize: "18px" }} >Retain your workforce by fostering a world-class employee experience.</p>
                            <Text mt="5px" color="rgb(0, 127, 170)" fontSize={18}>Learn more</Text>
                        </Box>
                    </Box  >
                    <Box >
                        <Image src="https://prod.smassets.net/assets/content/sm/product-manager-toolkit-directory.png" alt="xyz"></Image>
                        <Box w="300px" m={"auto"} lineHeight="32px">
                            <Heading fontSize="20px" mt={5}>Product management</Heading>
                            <p style={{ marginTop: "5px", fontSize: "18px" }} >Build products that drive impact and offer a strong product-market fit.</p>
                            <Text mt="5px" color="rgb(0, 127, 170)" fontSize={18}>Learn more</Text>
                        </Box>
                    </Box>
                </Flex>
            </Stack>


            {/* .................................................................... */}


            <Heading fontSize="32px" textAlign="center" mt="50px">  Still curious?</Heading>
            <Text mt="50px" textAlign="center" >
                Explore these additional resources to help you launch successful survey projects.</Text>


            <BlogPostWithImage />


            <Text margin="auto" mt="50px" textAlign="center" w="800px">Net Promoter, Net Promoter System, Net Promoter Score, NPS and the NPS-related emoticons are registered trademarks of Bain & Company, Inc., Fred Reichheld and Satmetrix Systems, Inc.</Text>

            {/* Footer............................................................................................... */}

            <Footer />
            <hr />


            <Box m="auto" mt="50px" w="1400px" >

                <Select bg="black" color="white" w="120px">
                    <option>English</option>
                    <option>French</option>
                    <option>Hindi</option>
                    <option>German</option>
                </Select>

                <Text mt="25px"  w="580px">  SurveyMonkey is brought to you by momentive.ai. Shape what's next with AI‑driven insights and experience management solutions built for the pace of modern business.
                </Text>
                <Text p="25px 0px" >Copyright © 1999-2022 Momentive</Text>
            </Box>

            {/* .............................................. */}
        </>
    )
}