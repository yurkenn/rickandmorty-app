import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const DetailCard = ({ character }) => {
  return (
    <Box display={'flex'} flexDirection={'row'} mt={10} textAlign="start" shadow="md">
      <Image src={character?.image} alt={character?.name} borderRadius="md" />
      <Box ml={5}>
        <Text mt="1" fontWeight="semibold" color={'gray.200'}>
          Name:
          <Text as="span" ml="2" fontFamily={'monospace'} color="white" fontSize="xl">
            {character?.name}
          </Text>
        </Text>
        <Text mt="1" fontWeight="semibold" color={'gray.200'}>
          Status:
          <Text
            as="span"
            ml="2"
            color={character.status === 'Alive' ? 'green.400' : 'red.500'}
            fontFamily={'monospace'}
            fontSize="xl"
          >
            {character?.status}
          </Text>
        </Text>
        <Text mt="1" fontWeight="semibold" color={'gray.200'}>
          Species:
          <Text as="span" ml="2" color="white" fontFamily={'monospace'} fontSize="xl">
            {character?.species}
          </Text>
        </Text>

        <Text mt="1" fontWeight="semibold" color={'gray.200'}>
          Gender:
          <Text as="span" ml="2" color="white" fontFamily={'monospace'} fontSize="xl">
            {character?.gender}
          </Text>
        </Text>
        <Text mt="1" fontWeight="semibold" color={'gray.200'}>
          Origin:
          <Text as="span" ml="2" color="white" fontFamily={'monospace'} fontSize="xl">
            {character?.origin.name}
          </Text>
        </Text>
        <Text mt="1" fontWeight="semibold" color={'gray.200'}>
          Location:
          <Text as="span" ml="2" color="white" fontFamily={'monospace'} fontSize="xl">
            {character?.location.name}
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default DetailCard;
