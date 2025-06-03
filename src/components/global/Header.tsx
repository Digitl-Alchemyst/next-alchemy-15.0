import React from 'react';
import { Github } from 'lucide-react';
import { ThemeToggle } from '@/components/global/ThemeToggle';
import Link from 'next/link';

import { Button } from '../ui/button';
import Image from 'next/image';
import Search from './Search';
import { TrolleyIcon } from '@sanity/icons';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full'>
      <div className='border-b border-light-300 bg-light-100/75 backdrop-blur-lg dark:border-dark-600 dark:bg-dark-800/75'>
        <div className='container flex h-16 items-center justify-between px-4'>
          <div className='flex items-center space-x-2'>
            <h1 className='relative'>
              <Button
                variant='default'
                size='lg'
                className='text-transparent text-gradient-orange-purple'
              >
                <Image
                  src='/logo.jpg'
                  alt=''
                  width={50}
                  height={50}
                  className='h-8 w-8 rounded-full'
                />
                <h3 className='hidden sm:block'>Next Alchemy 15</h3>
              </Button>
            </h1>
          </div>
          <div className='mx-4 hidden flex-1 sm:block'>
            <Search />
          </div>
          <div className='flex items-center space-x-2 sm:space-x-6'>
            <ThemeToggle />
          </div>
        </div>
        <div className='border-t border-light-300 p-2 dark:border-dark-600 sm:hidden'>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
