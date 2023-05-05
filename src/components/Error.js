import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Error = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.800">
      <Text
        fontSize="6xl"
        color="white"
        bg={
          'linear-gradient(90deg, rgba(47, 137, 8, 1) 0%, rgba(143, 187, 12, 1) 35%, rgba(246, 255, 0, 1) 100%)'
        }
        bgClip="text"
        fontWeight="extrabold"
        mb="8"
        p="4"
      >
        404 Error
      </Text>
      <Text
        fontSize="4xl"
        color="white"
        bg={
          'linear-gradient(90deg, rgba(47, 137, 8, 1) 0%, rgba(143, 187, 12, 1) 35%, rgba(246, 255, 0, 1) 100%)'
        }
        bgClip="text"
        fontWeight="extrabold"
        mb="8"
        p="4"
      >
        Page not found
      </Text>
    </Flex>
  );
};

export default Error;
