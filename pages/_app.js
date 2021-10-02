import { theme } from '../styles'
import { ChakraProvider } from "@chakra-ui/react"
import Footer from '../components/Footer'
import './navBar.css';
import '@fontsource/inter';
import '@fontsource/merriweather-sans';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
     <Component {...pageProps} />
     <Footer/>
     <NavBar/>
    </ChakraProvider>
  )
}

export default MyApp
