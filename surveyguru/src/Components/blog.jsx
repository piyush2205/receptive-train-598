// import Image from 'next/image';
import {
Image,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function BlogPostWithImage() {
  return (
    <Stack direction={"row"} gap="50px" mt="50px" ml="120px" width="1250px">
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        // boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://prod.smassets.net/assets/cms/sm/uploads//golden-state-warriors.png'
            }
            alt="zyx"
            layout={'fill'}
          />
        </Box>
        <Stack>
          {/* <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text> */}
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'1xl'}
            fontFamily={'body'}>
      Success Stories
          </Heading>
          <Text color={'gray.500'}>
          Get tips on how to create better surveys, hear the latest product news, or check out our signature research.
          </Text>
        </Stack>
        
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} color="blue.600">See Curiosity at Work</Text>
         
          </Stack>
        </Stack>
      </Box>


      
    </Center>


  <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        // boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://prod.smassets.net/assets/cms/sm/uploads//blog-tile-card.png'
            }
            alt="zyx"
            layout={'fill'}
          />
        </Box>
        <Stack>
          {/* <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text> */}
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'1xl'}
            fontFamily={'body'}>
        Blog
          </Heading>
          <Text color={'gray.500'}>
          Get tips on how to create better surveys, hear the latest product news, or check out our signature research.
          </Text>
        </Stack>
        
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} color="blue.600">See Curiosity at Work</Text>
         
          </Stack>
        </Stack>
      </Box>


      
    </Center>

      <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        // boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://prod.smassets.net/assets/cms/sm/uploads//help-center-tile.png'
            }
            alt="zyx"
            layout={'fill'}
          />
        </Box>
        <Stack>
          {/* <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text> */}
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'1xl'}
            fontFamily={'body'}>
          Help Center
          </Heading>
          <Text color={'gray.500'}>
          Get tips on how to create better surveys, hear the latest product news, or check out our signature research.
          </Text>
        </Stack>
        
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600} color="blue.600">See Curiosity at Work</Text>
         
          </Stack>
        </Stack>
      </Box>


      
    </Center>

    </Stack>
  );
}