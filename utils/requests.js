import { supabaseClient } from './supabaseClient';

export const getTodos = async ({ userId, token }) => {
  const supabase = await supabaseClient(token);
  const { data: todos } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);
  return todos;
};

export const postTodo = async ({ userId, token, e }) => {
//   console.log({ userId, token, e });
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('todos')
    .insert({
      user_id: userId,
      todo: e.target[0].value,
      tag: e.target[1].value,
    })
    .select();
  if (error) {
    console.log('error');
    return new Response('Failed to create a new todo', { status: 500 });
  }
  return data;
};
