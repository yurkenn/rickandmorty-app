import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';
import { Box, Button, Flex, Image, Text, IconButton, Skeleton } from '@chakra-ui/react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

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
      <Box w="100%" maxW="1200px" mt="290" p="4" bg="gray.700" borderRadius="md">
        <Flex direction="row" align="center" justify="center" flexWrap="wrap">
          {characters.map((character) => (
            <Box
              key={character.id}
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
                <Skeleton isLoaded={Boolean(character)}>
                  <Text
                    fontSize="xl"
                    fontFamily='
                  "Roboto Mono", monospace
                  '
                    color="white"
                  >
                    {character?.name ?? 'Name'}
                  </Text>

                  <Text fontSize="md" color="grey" w="100%" css={{ wordWrap: 'break-word' }}>
                    {character?.species ?? 'Species'}
                  </Text>
                  <Image
                    src={character?.image ?? 'https://via.placeholder.com/250x250'}
                    alt={character?.name ?? 'Image'}
                    borderRadius="md"
                    mt="4"
                  />
                </Skeleton>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
      <Flex direction="row" mb="8" align="center" justify="center" mt="8">
        {status === 'loading' && <Loading />}
        {error && <Error message={error} />}
        {hasNextPage && !status !== 'loading' && !error && (
          <Button
            aria-label="Load More"
            colorScheme="green"
            variant="outline"
            mr="4"
            onClick={() => {
              dispatch(fetchCharacters(page));
            }}
          >
            Load More... {page - 1}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
