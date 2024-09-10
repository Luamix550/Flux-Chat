"use client";
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { useRouter } from 'next/navigation';
import { SidebarProps } from '../types/types';

export default function Feed() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-wallpaper bg-cover bg-center h-screen">

      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex-1 bg-cover bg-center transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full px-4 py-8 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-center">
            Welcome to{' '}
            <span className="text-customBlue drop-shadow-[0_3.3px_1.2px_rgba(1,128,128,0.8)]">
              FluxChat
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black drop-shadow-[0_3.3px_1.2px_rgba(128,128,128,0.8)] text-center max-w-2xl mt-4">
            Connect with friends, join group chats, and chat with our AI in a sleek, modern interface. Let’s get started!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:justify-center">
            <a
              onClick={() => router.push('/chat')}
              className="inline-block rounded-lg bg-customBlue shadow-lg shadow-cyan-500/50 px-4 py-2 text-base font-semibold leading-7 cursor-pointer text-white hover:text-black ring-1 ring-transparent hover:ring-sky-600 transition-transform transform hover:translate-x-1 duration-300"
            >
              Chat with your AI assistant
              <span className="text-white"> →</span>
            </a>
            <a
              onClick={() => router.push('/friends')}
              className="inline-block rounded-lg bg-gray-200 hover:bg-gray-300 px-4 py-2 text-base font-semibold leading-7 cursor-pointer text-gray-900 ring-1 ring-transparent hover:ring-gray-400 transition-transform transform hover:translate-x-1 duration-300"
            >
              Start chatting with your friends
              <span className="text-slate-900"> →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
