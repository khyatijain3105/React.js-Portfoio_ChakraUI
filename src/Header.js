import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Box, Circle, Flex, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {
    const{ colorMode }= useColorMode();
    const isDark = colorMode =="dark";
    const[isNotSmallerScreen] = useMediaQuery("(min-width:600px");
    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} 
                spacing="100px" p={isNotSmallerScreen ? "16" : "0"}
                alignSelf="flex-start">

                <Box mr="500" mt={isNotSmallerScreen ? "0" :"16" } align='flex-start'>
                    <Text fontSize="3xl" fontWeight="semibold"> Hi, I'm </Text>
                    <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>Khyati Jain</Text>
                    <Text color = {isDark ? "gray.200" : "gray.500"}> GDE- Student of Computer Science- Fullstack Development and Blockchain, at SVVV</Text>
                 <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://www.linkedin.com/in/khyati-jain-625229203/")
                    }>Hire Me</Button>   
                </Box>
                
                

            </Flex>
        </Stack>

    )
}

export default Header
