"use client"
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`flex-1 bg-wallpaper bg-bottom transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className='flex flex-col justify-center items-center h-[480px]'>
          <h1 className='text-4xl  font-bold tracking-tight sm:text-center sm:text-6xl'>Welcome to <span className='text-customBlue'>FluxChat</span></h1>
          <p className='text-Amsterdam text-2xl text-black drop-shadow-[0_3.3px_1.2px_rgba(128,128,128,0.8)] text-center w-[800px]'>
            <span className='text-white'>Connect with friends</span>, join group chats, and chat with our AI in a sleek, modern interface. Let’s get started!
          </p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <a href="#"
              className="inline-block rounded-lg bg-customBlue  shadow-lg shadow-cyan-500/50 px-4 py-1.5 text-base font-semibold leading-7 text-white hover:text-black ring-1 hover:bg-sky-600 duration-300">
              Chat with your AI assitant
              <span aria-hidden="true" className="text-white"> →</span>
            </a>
            <a href="#"
              className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Start chatting with your friends
              <span aria-hidden="true" className="text-slate-900"> →</span>
            </a>
          </div>
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Page;
