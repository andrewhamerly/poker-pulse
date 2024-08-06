import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, SimpleGrid, Heading, Card, CardBody, Text, Avatar } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GET_POSTS, GET_ME } from '../utils/queries';
import NewPostForm from '../components/Post/NewPost';
import Auth from '../utils/auth';

export default function Feed() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Auth.getToken();

        if (!token) {
            navigate('/signup');
        }
    }, [navigate]);

    const token = Auth.getToken();

    if (!token) {
        return null;
    }

    const { data: userData } = useQuery(GET_ME);
    const userId = userData?.me?._id;

    const { data, refetch, loading, error } = useQuery(GET_POSTS);

    useEffect(() => {
      console.log('Posts query data:', data);
      console.log('Posts query error:', error); 

    }, [data, error]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching posts!</p>;
    const posts = data?.posts || [];

    return (
        <Box bg={'brand.onyx'} p={6} minHeight="100vh" display="flex" flexDirection="column" alignItems="center">
            <Box
                as={motion.div}
                transition={'0.3s'}
                bg={'brand.hunterGreen'}
                borderRadius={'md'}
                width={{ base: '90%', sm: '80%', md: '60%' }} // Adjust width for responsiveness
                p={6}
                mb={6}
                boxShadow={'md'}
                textAlign="center"
            >
                <Heading color={'white'} as={"h3"} size={"md"} fontWeight={'bold'}>
                    Add a New Post
                </Heading>
                <NewPostForm userId={userId} refetchPosts={refetch} />
            </Box>

            <Box
                as={motion.div}
                transition={'0.3s'}
                bg={'brand.onyx'} 
                borderRadius={'md'}
                width={{ base: '90%', sm: '80%' }}
                p={6}
                boxShadow={'md'}
                mb={6}
                textAlign="center"
            >
                <Heading color={'white'} as={"h3"} size={"md"} fontWeight={'bold'} mb={10}>
                    Latest Posts
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} justifyItems={'center'}>
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <Card mb={4} key={post._id} bg="white" boxShadow="md" borderRadius="md" width="100%" p={4}>
                                <CardBody display="flex" alignItems="flex-start">
                                    <Avatar name={post.user.username} mr={4} size="md" />
                                    <Box>
                                        <Text fontWeight="bold" fontSize="lg">{post.user.username}</Text>
                                        <Text mb={2} color="gray.600" fontSize="sm">{new Date(parseInt(post.createdAt)).toLocaleDateString()}</Text>
                                        <Text>{post.content}</Text>
                                    </Box>
                                </CardBody>
                            </Card>
                        ))
                    ) : (
                        <Text color="gray.600">No posts available.</Text>
                    )}
                </SimpleGrid>
            </Box>
        </Box>
    );
}