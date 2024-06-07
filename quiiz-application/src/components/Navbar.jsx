// import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
// import './styles.css';

const Navbar = () => {
  return (
    <Box className="navbar">
      <Flex justify="space-between" align="center" p="4">
        <Text className="navbar-logo">QuizApp</Text>
        <Flex gap="4">
          <Link href="#home" className="navbar-link">Home</Link>
          <Link href="#about" className="navbar-link">About</Link>
          <Link href="#contact" className="navbar-link">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
