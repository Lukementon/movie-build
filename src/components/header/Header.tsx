'use client';
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className='text-slate-300 bg-gray-950 py-8 text-2xl'>
      <div className='flex items-center max-w-screen-2xl mx-auto justify-between py-2'>
        <h1 className='cursor-pointer'>The Movie DB</h1>

        <div className='flex items-center justify-between'>
          <h3 className='cursor-pointer border-b-4 border-b-slate-300'>Home</h3>
          <h3 className='ml-8 cursor-pointer'>Movies</h3>
          <h3 className='ml-8 cursor-pointer'>TV Shows</h3>
          <h3 className='ml-8 cursor-pointer'>Categories</h3>
        </div>

        <MagnifyingGlassIcon className='h-10 w-10 text-slate-300 cursor-pointer' />

        <UserIcon className='h-10 w-10 cursor-pointer' />
      </div>
    </header>
  );
};

export default Header;
