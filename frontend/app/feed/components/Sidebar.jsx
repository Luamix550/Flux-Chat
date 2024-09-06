// components/Sidebar.js
import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon, People as PeopleIcon, Group as GroupIcon, Chat as ChatIcon } from '@mui/icons-material';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Tooltip } from "@nextui-org/tooltip";
import { User } from '@nextui-org/react';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-customGray text-white fixed left-0 top-0 h-full flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}
    >
      <div className="flex items-center justify-between p-4">
        <IconButton onClick={toggleSidebar} className="text-white hover:scale-110 transition duration-300">
          <MenuIcon />
        </IconButton>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col items-start p-4 space-y-6">
          {isSidebarOpen && (
            <>
              <div className="flex flex-col pl-10 items-center space-x-4">
                <AvatarGroup isBordered max={10} total={10}>
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="sm" />
                  <Avatar src="https://i.pravatar.cc/300" size="sm" />
                  <Avatar src="https://i.pravatar.cc/300" size="sm" />
                  <Avatar src="https://i.pravatar.cc/300" size="sm" />
                </AvatarGroup>
                <span className='pt-2 pr-4'>Friends</span>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
                <span>Groups</span>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
                <span>Chat IA</span>
              </div>
            </>
          )}

          {!isSidebarOpen && (
            <div className="flex flex-col items-center space-y-8">
              <Tooltip placement='right' content="Profile picture" delay={1} color='primary'>
                <Avatar src="https://i.pravatar.cc/300" size="md" onClick={toggleSidebar} />
              </Tooltip>
              <Tooltip placement='right' content="Friends" delay={1} color='primary'>
                <PeopleIcon className="size-8 hover:-translate-y-2 transition duration-300" onClick={toggleSidebar} />
              </Tooltip>
              <Tooltip placement='right' content="Groups" delay={1} color='primary'>
                <GroupIcon className="size-8 hover:scale-110 transition duration-300" onClick={toggleSidebar} />
              </Tooltip>
              <Tooltip placement='right' content="Chat with IA" delay={1} color='primary'>
                <ChatIcon className="size-8 hover:scale-110 transition duration-300" onClick={toggleSidebar} />
              </Tooltip>
            </div>
          )}
        </div>
      </div>

      <div className="flex-shrink-0 p-6 pr-10 mt-auto flex justify-center">
        {isSidebarOpen && (
          <User
            name="Luis Diaz"
            avatarProps={{
              src: "https://i.pravatar.cc/300",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
