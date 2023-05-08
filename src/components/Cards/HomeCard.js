import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ character }) => {
  return (
    <Box
      m={5}
      p={5}
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.600"
      maxW="sm"
      textAlign="center"
      overflow="hidden"
      shadow="md"
      _hover={{
        cursor: 'pointer',
        bg: 'gray.500',
      }}
      transition="all 0.2s ease-in-out"
    >
      <Link to={`/character/${character.id}`}>
        <Flex position="relative">
          <Image src={character?.image} alt={character?.name} borderRadius="md" />
          <Text
            position={'absolute'}
            top={'10px'}
            right={'10px'}
            bg={character.status === 'Alive' ? 'green.400' : 'red.500'}
            color={'white'}
            p={2}
            borderRadius="md"
            fontSize="sm"
          >
            {character.status}
          </Text>
        </Flex>
      </Link>
      <Box p="6">
        <Text
          mt="1"
          fontWeight="semibold"
          fontSize={character?.name.length > 20 ? 'md' : 'xl'}
          as="h4"
          lineHeight="tight"
          isTruncated
          color="gray.100"
        >
          {character?.name}
        </Text>

        <Text ml="2" color="gray.400" fontSize="sm">
          {character?.species}
        </Text>

        <Text mt="2" color="gray.400" fontSize="sm">
          {character.location.name}
        </Text>
      </Box>
    </Box>
  );
};

export default HomeCard;
