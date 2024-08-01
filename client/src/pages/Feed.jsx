import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';

const Feed = () => {
    const { data } = useQuery(GET_POSTS);

    const posts = data.posts;

    return (
        <Box bg={'brand.onyx'}>
        <SimpleGrid columns={[1, null, 2]} spacing={6} justifyItems={'center'}>
          <Box as={motion.div} whileHover={{ scale: 1.05 }} transition={'0.3s'} bg={'brand.hunterGreen'} borderRadius={'lg'} width={'300px'} p={6} m={4} boxShadow={'lg'}>
            <Heading color={'white'} as={"h3"} size={"md"} textAlign={'center'} fontWeight={'bold'}>Latest Posts</Heading>
            {posts.map((post, index) => (
              <Card mb={4} key={post._id}>
                <CardBody>
                  <Text>{`Post #${index + 1}`}</Text>
                  <Text>{post.content}</Text>
                  <Text fontSize="sm" color="gray.500">{`by ${post.user.username} on ${new Date(post.createdAt).toLocaleDateString()}`}</Text>
                </CardBody>
              </Card>
            ))}
          </Box>
        </SimpleGrid>
        </Box>
    );
};

export default Feed;