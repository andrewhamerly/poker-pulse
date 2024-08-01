import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, SimpleGrid, Heading, Card, CardBody, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GET_POSTS } from '../utils/queries';
import NewPostForm from '../components/Post/NewPost';

const Feed = ({ userId }) => {
    const { data } = useQuery(GET_POSTS);

    const posts = data?.posts || [];

    return (
      <Box bg={'brand.onyx'} p={6} minHeight="100vh" display="flex" flexDirection="column" alignItems="center">
      <Box
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        transition={'0.3s'}
        bg={'brand.hunterGreen'}
        borderRadius={'lg'}
        width={{ base: '90%', sm: '80%', md: '60%' }} // Adjust width for responsiveness
        p={6}
        mb={6}
        boxShadow={'lg'}
        textAlign="center"
      >
        <Heading color={'white'} as={"h3"} size={"md"} fontWeight={'bold'}>
          Add a New Post
        </Heading>
        <NewPostForm userId={userId} />
      </Box>

      <Box
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        transition={'0.3s'}
        bg={'brand.hunterGreen'}
        borderRadius={'lg'}
        width={{ base: '90%', sm: '80%' }}
        p={6}
        boxShadow={'lg'}
        mb={6}
        textAlign="center"
      >
        <Heading color={'white'} as={"h3"} size={"md"} fontWeight={'bold'}>
          Latest Posts
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} justifyItems={'center'}>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Card mb={4} key={post._id} bg="white" boxShadow="md" borderRadius="md" width="100%">
                <CardBody>
                  <Text>{`Post #${index + 1}`}</Text>
                  <Text>{post.content}</Text>
                  <Text fontSize="sm" color="gray.500">{`by ${post.user.username} on ${new Date(post.createdAt).toLocaleDateString()}`}</Text>
                </CardBody>
              </Card>
            ))
          ) : (
            <Text color="white">No posts available.</Text>
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Feed;