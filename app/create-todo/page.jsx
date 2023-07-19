'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postTodo } from '../../utils/requests';
import { useAuth } from '@clerk/nextjs';
import Form from '@components/Form';

const CreateToDo = () => {
  const router = useRouter();
  const { userId, getToken } = useAuth();

  const [submitting, setSubmitting] = useState(false);
  const [posts, setPosts] = useState({ todo: '', tag: '' });

  const createTodo = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      const token = await getToken({ template: 'supabase' });
      const posts = await postTodo({ e, userId, token });
      setPosts(posts);
      if (posts) {
        router.push('/');
      }
      // console.log(posts);
    } catch (error) {
      // Handle the error here
      console.error('An error occurred:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type='Post'
      post={posts}
      setPost={setPosts}
      submitting={submitting}
      handleSubmit={createTodo}
    />
  );
};

export default CreateToDo;
