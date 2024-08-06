import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { Button, Textarea, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { GET_POSTS } from '../../utils/queries';

const NewPostForm = ({ userId }) => {
  const [content, setContent] = useState('');
  const [addPost, { error }] = useMutation(ADD_POST, {
    refetchQueries: [{ query: GET_POSTS }],
    onError: (error) => {
      console.error('Error adding post:', error);
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addPost({
        variables: { userId, content },
      });
      setContent('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl isInvalid={!!error}>
        <Textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
          bg="white"
          color="black"
          mt={3}
          mb={3}
          resize="none"
          height="100px"
        />
        <Button
          type="submit"
          colorScheme="teal"
          variant="solid"
          width="full"
          color="white"
          bg="brand.hunterGreen"
        >
          Add Post
        </Button>
        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </form>
  );
};

export default NewPostForm;