import { Box, Flex, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
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
        Rick and Morty
      </Text>
      <Box w="100%" maxW="1200px" mt="8" p="4" bg="gray.700" borderRadius="md">
        <Flex direction="row" align="center" justify="center" flexWrap="wrap">
          <Box
            m={5}
            p={5}
            borderRadius="lg"
            borderWidth="1px"
            borderColor="gray.500"
            maxW="sm"
            overflow="hidden"
            shadow="md"
            _hover={{
              cursor: 'pointer',
              bg: 'gray.500',
            }}
            transition="all 0.2s ease-in-out"
          >
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Loading;
