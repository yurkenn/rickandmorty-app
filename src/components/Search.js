import { Input } from '@chakra-ui/react';
import React from 'react'

const Search = ({searchName , setSearchName}) => {
  return (
    <Input
      placeholder="Search for characters"
      w="100%"
      maxW="1200px"
      p="4"
      bg="gray.700"
      borderRadius="md"
      color="gray.100"
      borderColor="gray.600"
      borderWidth="1px"
      _placeholder={{ color: 'gray.400' }}
      _focus={{ borderColor: 'gray.500' }}
      onChange={(e) => {
        setSearchName(e.target.value);
      }}
      value={searchName}
    />
  );
}

export default Search