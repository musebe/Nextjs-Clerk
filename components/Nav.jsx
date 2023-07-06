'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';

const Nav = () => {
  const { user } = useUser();

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
          {user ? (
            <Link href='/create-todo' className='black_btn'>
              Create Post
            </Link>
          ) : (
            <div></div>
          )}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
              <button
                type='button'
                className='rounded-full bg-blue px-3.5 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset  hover:bg-blue-100'
              >
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {user ? (
          <Link href='/create-todo' className='black_btn'>
            Create Post
          </Link>
        ) : (
          <div></div>
        )}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode='modal'>
            <button
              type='button'
              className='rounded-full bg-blue px-3.5 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset  hover:bg-blue-100'
            >
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Nav;
