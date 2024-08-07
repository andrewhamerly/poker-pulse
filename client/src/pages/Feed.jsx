import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { GET_POSTS, GET_ME } from '../utils/queries';
import { LIKE_POST, DELETE_POST } from '../utils/mutations';
import NewPostForm from '../components/Post/NewPost';
import PostCard from '../components/Post/PostCard';
import Auth from '../utils/auth';

export default function Feed() {
    const navigate = useNavigate();
    const token = Auth.getToken();

    useEffect(() => {
        if (!token) {
            navigate('/signup');
        }
    }, [navigate, token]);

    if (!token) {
        return null;
    }

    const { data: userData } = useQuery(GET_ME);
    const userId = userData?.me?._id;

    const { data, refetch, loading, error } = useQuery(GET_POSTS);

    const [likePost] = useMutation(LIKE_POST, {
        onCompleted: () => refetch(),
        onError: (err) => console.error(err)
    });

    const [deletePost] = useMutation(DELETE_POST, {
        onCompleted: () => refetch(),
        onError: (err) => console.error(err)
    });

    useEffect(() => {
        console.log('Posts query data:', data);
        console.log('Posts query error:', error); 
    }, [data, error]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching posts!</p>;
    
    const posts = data?.posts || [];

    const handleLike = async (postId) => {
        try {
            const { data } = await likePost({ variables: { postId } });
            return data.likePost;
        } catch (err) {
            console.error('Error liking post:', err);
            throw new Error('Error liking post');
        }
    };

    const handleDelete = async (postId) => {
        try {
            await deletePost({ variables: { _id: postId } });
        } catch (err) {
            console.error('Error deleting post:', err);
        }
    };

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
                <SimpleGrid columns={{ base: 1 }} spacing={6} justifyItems={'center'}>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <PostCard 
                            key={post._id} 
                            post={post} 
                            handleLike={handleLike}
                            handleDelete={handleDelete} 
                            userId={userId}/>
                        ))
                    ) : (
                        <Text color="gray.600">No posts available.</Text>
                    )}
                </SimpleGrid>
            </Box>
        </Box>
    );
}