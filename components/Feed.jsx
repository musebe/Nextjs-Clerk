import Link from 'next/link';

const Feed = () => {
  return (
    <div className='flex gap-3 md:gap-5 py-11'>
      <Link href='/create-todo' className='black_btn'>
        Get Started Now
      </Link>
    </div>
  );
};

export default Feed;
