import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { NavLink } from 'react-router-dom';
  import { Image } from '@chakra-ui/react'
  // import {ChevronDownIcon} from '@chakra-ui/icons'
import img from "../Images/Surveyguru1.png"
import "./navbar.css"
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box
      
      // border={"1px solid red"}
      position="fixed"
     className='css-1b7bwed'
     zIndex={2}
      >
        <Flex
         minW={"1520px"}
          border={"1px solid green"}
           bg={useColorModeValue('#fff')}
          color={useColorModeValue('#1e2124;', '#fff')}
          minH={'70px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
          
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Image 
             maxW="180px" maxH="36px" 
             ml={20}
             src={img} alt='logo'/>

          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}
        
            ml={100}>
            
           

          
          
            <Flex display={{ base: 'none', md: 'flex' }}  m="auto"  >
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack 
          
            mr={90}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'m'}
              fontWeight={600}
              variant={'link'}
              color={'#1e2124'}
              href={'/login'}
              textDecoration="none">
              
              Log in
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'m'}
              fontWeight={600}
              color={'#1e2124'}
              bg={'#f9be00'}
              href={'/signup'}
              _hover={{
                bg: 'orange.300',
              }}
              textDecoration="none">
        
            Sign Up free
         
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('#6B787F', 'black.800');
    const linkHoverColor = useColorModeValue('black.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'black.800');
  
    return (
      <Stack direction={'row'} spacing={10} m="auto" w={"650px"}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'m'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                  <Icon color={'black.200'} w={6} h={10} ml="3" as={ChevronDownIcon} />
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack >
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}

              {/* {navItem.children2 && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children2.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )} */}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              // _groupHover={{ color: '.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          {/* <Box>
            <Text
              transition={'all .3s ease'}
              // _groupHover={{ color: '.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box> */}
          {/* <Box>
            <Text
              transition={'all .3s ease'}
              // _groupHover={{ color: '.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box> */}
          {/* <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'black.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex> */}
        </Stack>
      </Link>
    );
  };
  



  // .............................................................................................
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'black')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('#1e2124', '#1e2124')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  // interface NavItem {
  //   label: string;
  //   subLabel?: string;
  //   children?: Array<NavItem>;
  //   href?: string;
  // }
  
  const NAV_ITEMS = [
    {
      label: `Products`,
      children: [
        {
          label: 'SurveyMonkey',
          subLabel: 'Create & send surveys with the world’s leading online survey software',
          href: '#',
        },
       

        {
          label: ' Enterprise',
          subLabel: 'Empower your organization with our secure survey platform',
          href: '#',
        },
        {
          label: 'Integrations & Plug-ins',
          subLabel: 'Bring survey insights into your business apps',
          href: '#',
        },
      

      ],
     
      

    },
    {
      label: 'Solutions',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Resources',
      href: '#',
    },
    {
      label: 'Plans & Pricing',
      href: '#',
    },
  ];