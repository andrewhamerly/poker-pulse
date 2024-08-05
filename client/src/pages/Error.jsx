import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import errorImage from '../assets/images/poker-pulse-404-graphic.png'

const Error = () => {
  return (
    <Box
      bg="#1D2020"
      color="white"
      p={8}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="text-center"
    >
      <Image
        src={errorImage}
        alt="page not found"
        mb={6}
        className="rounded"
      />
      <Heading as="h1" size="2xl" mb={4} className="text-vermillion text-2xl font-bold">
        404
      </Heading>
      <Text fontSize="lg" mb={6} className="text-whiteSmoke text-lg font-semibold">
        Oops! The page you’re looking for had to fold.
      </Text>
      <Button
        as={Link}
        to="/"
        colorScheme="teal"
        variant="solid"
        size="lg"
        className="px-4 py-2 text-xl font-semibold bg-vermillion border border-outerSpace hover:bg-whiteSmoke hover:text-eerieBlack"
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default Error;