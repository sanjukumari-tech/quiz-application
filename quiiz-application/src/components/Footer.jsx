// import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
// import './styles.css';

const Footer = () => {
  return (
    <Box className="footer" p="4">
      <Text className="footer-text">© 2024 QuizApp. All rights reserved.</Text>
      <Text className="footer-text">
        Follow us on 
        <Link href="https://twitter.com" className="footer-link"> Twitter</Link>, 
        <Link href="https://facebook.com" className="footer-link"> Facebook</Link>, 
        <Link href="https://instagram.com" className="footer-link"> Instagram</Link>
      </Text>
    </Box>
  );
};

export default Footer;
