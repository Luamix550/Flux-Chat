'use client';

import { User, Link, Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { BarsIcon, ExitIcon, GroupIcon, HomeIcon, MessageIcon, UserIcon, UsersIcon } from './icons/Icons';
import { Avatar } from '@nextui-org/react';
import { SidebarProps } from '@/app/types/types';
import NavItems from './NavItems';

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();

  <NavItems/>

  return (
    <div className="min-h-screen bg-white">
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-customGray z-10">
        <nav className="flex justify-around items-center h-16">
          <NavItems />
        </nav>
      </div>

      <div className="hidden lg:block">
        <div className={`fixed left-0 top-0 h-full bg-customGray transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
          <div className="flex items-center justify-between p-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              {isSidebarOpen ? <ExitIcon /> : <BarsIcon />}
            </button>
          </div>
          {isSidebarOpen ? (
            <nav className="flex flex-col space-y-2 p-4">
              <button onClick={() => router.push('/Home')} className="flex text-left items-center text-white p-2 hover:bg-gray-200 hover:text-black rounded-lg transition-colors duration-200">
                <HomeIcon />
                <span className='pl-2 text-lg'>Home</span>
              </button>
              <button onClick={() => router.push('/Friends')} className="flex text-left items-center text-white p-2 hover:bg-gray-200 hover:text-black rounded-lg transition-colors duration-200">
                <UsersIcon />
                <span className='pl-2 text-lg'>Friends</span>
              </button>
              <button onClick={() => router.push('/Groups')} className="flex text-left items-center text-white p-2 hover:bg-gray-200 hover:text-black rounded-lg transition-colors duration-200">
                <GroupIcon />
                <span className='pl-2 text-lg'>Groups</span>
              </button>
              <button onClick={() => router.push('/Profile')} className="flex text-left items-center text-white p-2 hover:bg-gray-200 hover:text-black rounded-lg transition-colors duration-200">
                <UserIcon />
                <span className='pl-2 text-lg'>Profile</span>
              </button>
              <button onClick={() => router.push('/Chat')} className="flex text-left items-center text-white p-2 hover:bg-gray-200 hover:text-black rounded-lg transition-colors duration-200">
                <MessageIcon />
                <span className='pl-2 text-lg'>Chat AI</span>
              </button>
            </nav>
          ) : (
            <nav className="flex flex-col items-center space-y-6 mt-6">
              <button onClick={toggleSidebar} className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 hover:text-black rounded-lg transition-colors duration-200"><HomeIcon /></button>
              <button onClick={toggleSidebar} className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors duration-200"><UsersIcon /></button>
              <button onClick={toggleSidebar} className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors duration-200"><GroupIcon /></button>
              <button onClick={toggleSidebar} className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors duration-200"><UserIcon /></button>
              <button onClick={toggleSidebar} className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-lg transition-colors duration-200"><MessageIcon /></button>
            </nav>
          )}
          <div className="text-white absolute bottom-4 left-0 right-2 flex justify-center">
            <div className="overflow-hidden">
              {!isSidebarOpen ? (
                <Tooltip placement="right" content="Profile picture" delay={1} color="primary">
                  <Avatar />
                </Tooltip>
              ) : (
                <User
                  name="Junior Garcia"
                  description={
                    <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                      @jrgarciadev
                    </Link>
                  }
                  avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
