import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEpisodes,
  selectEpisodes,
  selectEpisodesError,
  selectEpisodesStatus,
} from '../../redux/episodesSlice';
import { Box, Text } from '@chakra-ui/react';

const Episodes = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectEpisodes);
  const status = useSelector(selectEpisodesStatus);
  const error = useSelector(selectEpisodesError);

  console.log(data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEpisodes());
    }
  }, [dispatch, status]);

  return (
    <Box>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && (
        <Box>
          {data.map((episode) => (
            <Box key={episode.id}>
              <Text color="gray.500" fontSize="sm" fontWeight="semibold" mr="2">
                {episode.name}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {episode.air_date}
              </Text>

              <Text color="gray.500" fontSize="sm">
                {episode.episode}
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Episodes;
