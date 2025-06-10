// src/app/(admin)/layout.tsx
import '../globals.css';


import { Toaster } from '@/components/ui/toaster';


const StudioLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <main className='flex-grow'>{children}</main>
      </div>
      <Toaster />
    </>
  );
}

export default StudioLayout;