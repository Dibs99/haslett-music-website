import { Container } from "@chakra-ui/layout";

const Section = ({children, dark = false}) => (
    <Container
        as="section"
        maxW={'11xl'}
        py={40}
        px={{base: 5, md:40}}
        variant={dark ? "dark" : "light"}
        >
        {children}
    </Container>
)

export default Section