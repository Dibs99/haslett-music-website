import {
    Stack,
    Flex,
    Heading,
    Text,
    VStack,
    useBreakpointValue,
    ButtonGroup,
    Box,
  } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import heroPic from '../../public/david-hero3.jpeg'
import Img from 'react-optimized-image';
import Button from '../Button';
  
const vh = '80vh'
export default function Hero() {
  return (
    <Stack
      w={'full'}
      spacing={0}
      // h={vh}
      // direction={{ base: 'column', md: 'row' }}
      // flexDirection={{ base: 'column-reverse', md: 'inherit'}}
      >
      <Box 
        w={"100%"}
        zIndex={-1}
        position="fixed"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,.2)"
        }}
        >
        <Img 
          src={heroPic} 
          webp 
          sizes={[400, 800]} 
          breakpoints={[600, 1000]}
          style={{objectFit: "cover", objectPosition: "center", width: "100%", height: vh}}
          />
      </Box>
      <Stack
        align={'center'}
        justifyContent={'center'}
        h={vh}
        spacing={5}
        zIndex={1}
        color="white"
        maxWidth="1000px"
      >
       <Container textAlign="left">
        <Heading fontSize="6xl" as="h1">David Haslett</Heading>
        <Text marginTop={0}>Singer - Guitarist - DJ</Text>
        </Container>
        <Container textAlign="left" >
          <ButtonGroup>
            <Button>Options</Button>
            <Button>Packages</Button>
          </ButtonGroup>
        </Container>
      </Stack>
     
    </Stack>
  );
}