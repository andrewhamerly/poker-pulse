import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';

const NewPostForm = ({ userId }) => {
  const [content, setContent] = useState('');
  const [addPost, { error }] = useMutation(ADD_POST);

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
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
      />
      <button type="submit">Add Post</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default NewPostForm;