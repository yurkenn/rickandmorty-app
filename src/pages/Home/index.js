import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';
import { Box, Button, Flex } from '@chakra-ui/react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import HomeCard from '../../components/Cards/HomeCard';
import Search from '../../components/Search';

const Home = () => {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const name = useSelector((state) => state.characters.name);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters({ page, name: searchName }));
    }
  }, [dispatch, status, page, name, searchName]);

  const searchedResults = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase());
  });

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
        <Search setSearchName={setSearchName} searchName={searchName} />
        <Flex direction="row" align="center" justify="center" flexWrap="wrap">
          {searchedResults.map((character) => (
            <HomeCard key={character.id} character={character} />
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
              dispatch(fetchCharacters({ page: page + 1, name: searchName }));
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
