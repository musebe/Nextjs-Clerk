import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        More than authentication.
        <br className='max-md:hidden' />
        <span className='blue_gradient text-center'>
          {' '}
          Complete User Management
        </span>
      </h1>
      <p className='desc text-center'>
        Clerk is more than a “sign-in box”. Integrate complete user management
        UIs and APIs, purpose-built for React, Next.js, and the Modern Web.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
