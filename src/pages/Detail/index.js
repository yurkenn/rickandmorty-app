import { Center, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../../components/Cards/DetailCard';

const Detail = () => {
  const { character_id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${character_id}`
        );
        setCharacter(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [character_id]);

  if (loading) {
    return (
      <Center bg="gray.900" h="100vh">
        <Text color="white">Loading...</Text>
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="100vh">
        <Text>There was an error: {error.message}</Text>
      </Center>
    );
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.900"
      bgImg="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
      bgSize="initial"
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <DetailCard character={character} />
    </Flex>
  );
};
export default Detail;
