import React from 'react';
import { Github } from 'lucide-react';
import  ThemeToggle  from '@/components/global/ThemeToggle';
import Link from 'next/link';

import { Button } from '../ui/button';
import Image from 'next/image';
import Search from './Search';
import { TrolleyIcon } from '@sanity/icons';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full backdrop-blur-lg'>
      <div className='border-b border-light-300 bg-light-100/75 dark:border-dark-600 dark:bg-dark-800/75'>
        <div className='container flex h-16 items-center justify-between px-4'>
          <div className='flex items-center space-x-2'>
            <Link href='/' className=''>
              <Button
                variant='ghost'
                size='lg'
                className='transition-all duration-300 hover:scale-105 hover:bg-transparent'
              >
                <Image
                  src='/logo.jpg'
                  alt='Next Alchemy Logo'
                  width={50}
                  height={50}
                  className='h-8 w-8 rounded-full'
                />
                <h3 className='hidden text-2xl font-bold text-gradient-lime-violet sm:block'>
                  Next Alchemy 15
                </h3>
              </Button>
            </Link>
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
