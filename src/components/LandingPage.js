// prueba/src/components/LandingPage.js

import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-zinc-100 dark:bg-zinc-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">My Website</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-zinc-900 dark:text-white">Home</a></li>
              <li><a href="#" className="text-zinc-900 dark:text-white">About</a></li>
              <li><a href="#" className="text-zinc-900 dark:text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Welcome to My Website</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-8">This is a simple landing page built with Tailwind CSS.</p>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Get Started</a>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
            <img src="https://placehold.co/300x200" alt="Feature 1" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Feature 1</h3>
            <p className="text-zinc-700 dark:text-zinc-300">Description of feature 1.</p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
            <img src="https://placehold.co/300x200" alt="Feature 2" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Feature 2</h3>
            <p className="text-zinc-700 dark:text-zinc-300">Description of feature 2.</p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-md">
            <img src="https://placehold.co/300x200" alt="Feature 3" className="w-full h-40 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Feature 3</h3>
            <p className="text-zinc-700 dark:text-zinc-300">Description of feature 3.</p>
          </div>
        </section>
      </main>
      <footer className="bg-zinc-100 dark:bg-zinc-800 p-4">
        <div className="container mx-auto text-center">
          <p className="text-zinc-700 dark:text-zinc-300">&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
