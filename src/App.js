import logo from './logo.svg';
import './App.css';
import { VStack, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';

function App() {
  const { colorMode, toggleColorMode }= useColorMode();
  const isDark= colorMode=="dark";

  return (
    <VStack p={4}> 
      <Flex w="100%">
        <Heading 
          ml="2" size="md" fontWeight='semibold' color="cyan.400">Portfolio</Heading>
         <Spacer></Spacer>
      <IconButton icon={<FaLinkedin/>} isRound="True" onClick={() =>window.open("https://www.linkedin.com/in/khyati-jain-625229203/")}/>
      <IconButton ml={2} icon={<FaInstagram/>} isRound="True" onClick={() =>window.open("https://www.instagram.com/khyati3105/")}/>
      <IconButton ml={2} icon={<FaGithub/>} isRound="True" onClick={() =>window.open("https://github.com/khyatijain3105/")}/>
      <IconButton ml={8} icon={isDark ?<FaSun/> : <FaMoon />} isRound="True" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Social></Social>
    </VStack>
  );
}

export default App;
