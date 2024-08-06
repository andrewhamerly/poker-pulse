import React, { useState, useEffect } from 'react';
import { Box, Text, Avatar, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const PostCard = ({ post, handleLike, userId }) => {
    const [likes, setLikes] = useState(post.likes || 0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        const likedBy = post.likedBy || [];
        setHasLiked(likedBy.includes(userId));
    }, [post, userId]);

    const onLikeClick = async () => {
        try {
            const updatedPost = await handleLike(post._id);
            if (updatedPost) {
                const userHasLiked = (updatedPost.likedBy || []).includes(userId);
                setLikes(updatedPost.likes || likes);
                setHasLiked(userHasLiked);
            } else {
                console.error('Invalid response from handleLike:', updatedPost);
            }
        } catch (err) {
            console.error('Error liking/unliking post:', err);
        }
    };

    const formattedDate = new Date(post.createdAt).toLocaleDateString();

    return (
        <Box mb={4} key={post._id} bg="white" boxShadow="md" borderRadius="md" width="100%" p={4}>
            <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-start' }}>
                <Box display="flex" alignItems="center" mb={{ base: 4, md: 0 }} mr={{ md: 4 }} flexDirection="column">
                    <Avatar name={post.user.username} mr={4} size="md" />
                    <Box>
                        <Text fontWeight="bold" fontSize="lg">{post.user.username}</Text>
                        <Text mb={2} color="gray.600" fontSize="sm">{formattedDate}</Text>
                    </Box>
                    <Box display="flex" alignItems="center" mt={4}>
                        <Button size="sm" onClick={onLikeClick} leftIcon={<FontAwesomeIcon icon={faThumbsUp} />}>
                            {hasLiked ? 'Unlike' : 'Like'}
                        </Button>
                        <Text ml={2}>{likes} {likes === 1 ? 'Like' : 'Likes'}</Text>
                    </Box>
                </Box>
                <Box bg="brand.onyx" p={10} borderRadius="md" flex="1" ml={{ md: 4 }}>
                    <Text color="white">{post.content}</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default PostCard;