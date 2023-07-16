import Link from 'next/link';
import Image from 'next/image';
import { UserButton, auth } from '@clerk/nextjs';

const Nav = () => {
  const { userId } = auth();

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Clerk-Auth</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        <div className='flex gap-3 md:gap-5'>
          {userId && (
            <Link href='/create-todo' className='black_btn'>
              Create Post
            </Link>
          )}
          {!userId && (
            <>
              <Link
                type='button'
                href='sign-in'
                className='text-blue-500 hover:text-black mr-4 '
              >
                Sign In
              </Link>
              <Link
                href='sign-up'
                className='text-blue-500 hover:text-black mr-4 '
              >
                Sign Up
              </Link>
            </>
          )}
          {userId && (
            <div className='ml-auto'>
              <UserButton afterSignOutUrl='/' />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {userId && (
          <Link href='/create-todo' className='black_btn'>
            Create Post
          </Link>
        )}
        {!userId && (
          <>
            <Link
              type='button'
              href='sign-in'
              className='text-blue-500 hover:text-black mr-4 '
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='text-blue-500 hover:text-black mr-4 '
            >
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <div className='ml-auto'>
            <UserButton afterSignOutUrl='/' />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
