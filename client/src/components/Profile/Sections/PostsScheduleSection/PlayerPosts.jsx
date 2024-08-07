import React from 'react';
import {
    Flex,
    Heading,
    Text,
    Box
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_USER_POSTS } from '../../../../utils/queries';
import Auth from '../../../../utils/auth/';
import NewPostForm from './NewPost';

export default function PlayerPosts() {
    const userId = Auth.getProfile()?.data?._id;

    const { data, refetch } = useQuery(GET_USER_POSTS, {
        variables: { userId },
        skip: !userId,
    });
    
    const posts = data?.userPosts.slice().sort((a, b) => b.createdAt - a.createdAt).slice(0, 3) || [];

    return (
        <Flex direction='column' w={{ base: '95%', md: '40%', lg: '40%' }} align='center' justify='center' bg='#2a3030' borderRadius={25} p={5}>
          <Heading size='md' color='#f5f5f5' mb={3}>Player Posts</Heading>
          {posts.map(post => (
            <Box key={post._id} bg='white' borderRadius='md' p={4} mb={4} w='100%'>
              <Text fontWeight='bold'>{post.user.username}</Text>
              <Text fontSize='sm' color='gray.500'>{new Date(parseInt(post.createdAt)).toLocaleDateString()}</Text>
              <Box bg="brand.onyx" p={10} borderRadius="md" flex="1" ml={{ md: 4 }}>
                    <Text color="white">{post.content}</Text>
                </Box>
              <Text mt={2}>{post.likes} Likes</Text>
            </Box>
          ))}
          <NewPostForm userId={userId} refetchPosts={refetch} />
        </Flex>
      );
    }