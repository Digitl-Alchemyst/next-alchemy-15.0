import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-light-300 bg-light-200/80 backdrop-blur-sm dark:border-dark-600 dark:bg-dark-800/80'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Image
                src='/logo.jpg'
                alt='Next Alchemy Logo'
                width={32}
                height={32}
                className='h-8 w-8 rounded-full'
              />
              <h3 className='text-lg font-bold text-gradient-lime-violet'>Next Alchemy 15</h3>
            </div>
            <p className='max-w-xs text-sm text-dark-600 dark:text-light-400'>
              Your ultimate Next.js 15 boilerplate with modern tools and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-dark-700 dark:text-light-200'>
              Quick Links
            </h4>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/docs'
                className='text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                Documentation
              </Link>
              <Link
                href='/components'
                className='text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                Components
              </Link>
              <Link
                href='/examples'
                className='text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                Examples
              </Link>
              <Link
                href='/changelog'
                className='text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                Changelog
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-dark-700 dark:text-light-200'>Resources</h4>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/getting-started'
                className='text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                Getting Started
              </Link>
              <Link
                href='/guides'
                className='text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                Guides
              </Link>
              <Link
                href='/api-reference'
                className='text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                API Reference
              </Link>
              <Link
                href='/support'
                className='text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                Support
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold text-dark-700 dark:text-light-200'>Connect</h4>
            <div className='space-y-2'>
              <Link
                href='mailto:contact@example.com'
                className='flex items-center space-x-2 text-sm text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
              >
                <Mail className='h-4 w-4' />
                <span>contact@example.com</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className='flex space-x-4 pt-2'>
              <Link
                href='https://github.com/your-username'
                className='text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5' />
              </Link>
              <Link
                href='https://twitter.com/your-username'
                className='text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
                aria-label='Twitter'
              >
                <Twitter className='h-5 w-5' />
              </Link>
              <Link
                href='https://linkedin.com/in/your-username'
                className='text-dark-600 transition-colors hover:text-accent1-600 dark:text-light-400 dark:hover:text-accent1-400'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-8 border-t border-light-300 pt-6 dark:border-dark-600'>
          <div className='flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0'>
            <p className='text-sm text-dark-600 dark:text-light-400'>
              © {currentYear} Next Alchemy 15. All rights reserved.
            </p>
            <div className='flex items-center space-x-1 text-sm text-dark-600 dark:text-light-400'>
              <span>Built with</span>
              <Heart className='h-4 w-4 fill-current text-red-500' />
              <span>using Next.js 15 by</span>
              <Link
              href='https://alchemy.digital/'
              className='font-medium text-accent1-600 transition-colors hover:text-accent1-400'
              >
                Alchemy Labz
                </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
