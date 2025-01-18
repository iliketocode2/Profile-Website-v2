import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">404 - Page Not Found</h1>
      <Link href="/" className="mt-4 text-lg text-blue-600 dark:text-blue-400 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;