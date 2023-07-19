const TodoCard = ({ post }) => {
  return (
    <div className='prompt_card' key={post.id}>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <p className='my-4 font-satoshi text-sm text-gray-700'>{post.todo}</p>
          <p className='font-inter text-sm blue_gradient cursor-pointer'>
            {post.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
