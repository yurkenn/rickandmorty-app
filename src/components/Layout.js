import { Box, Flex, Text } from '@chakra-ui/react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <Box bg="gray.900">
      <Flex justifyContent="center" alignItems="center">
        <Link to="/">
          <Text fontWeight="bold" color="white" p="4">
            Home
          </Text>
        </Link>
        <Link to="/episodes">
          <Text fontWeight="bold" color="white" p="4">
            Episodes
          </Text>
        </Link>
        <Link to="/locations">
          <Text fontWeight="bold" color="white" p="4">
            Locations
          </Text>
        </Link>
      </Flex>
      <Box minHeight="100vh">
        {/* The Outlet component will render the child routes */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
