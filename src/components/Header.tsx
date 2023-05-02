'use client';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className='w-full text-slate-100 bg-blue-700 py-3 px-5 flex justify-between items-center'>
      {/* Left */}
      <div>
        <h1>The Movie DB</h1>
      </div>

      {/* Center */}
      <div className='flex items-center bg-blue-800 rounded-sm pr-2 pl-1 lg:w-96'>
        <MagnifyingGlassIcon className='h-6 w-6 text-slate-100' />
        <input
          className='rounded-sm w-full bg-transparent pl-2 outline-none text-slate-100'
          type='text'
          placeholder='Search...'
        />
      </div>

      {/* Right */}
      <div className='flex items-center'>
        <div className='flex items-center'>
          <p className='pl-1 hidden md:block'>
            Hello{' '}
            <strong className='hover:underline cursor-pointer'>
              Luke Menton
            </strong>
          </p>
          <UserIcon className='h-6 w-6 lg:hidden' />
        </div>
      </div>
    </header>
  );
};

export default Header;
