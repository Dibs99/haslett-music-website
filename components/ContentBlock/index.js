import { Heading, SimpleGrid, Stack } from "@chakra-ui/layout"
import { Text, Box } from '@chakra-ui/react';


const ContentBlock = ({title, content, children, reverse=false}) => {
    return(
        <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            justifyContent="center"
            alignItems="center"
            >
                <Stack
                    spacing={5}>
                    <Heading>{title}</Heading>
                    <Text fontSize="lg">{content}</Text>
                </Stack>
                <Box
                    rounded="lg"
                    overflow="hidden"
                    order={reverse && -1}>
                    {children}
                </Box>
        </SimpleGrid>
    )
}


export default ContentBlock