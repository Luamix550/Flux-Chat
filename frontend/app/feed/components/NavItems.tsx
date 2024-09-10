import React from 'react'
import { useRouter } from 'next/navigation';
import { BarsIcon, ExitIcon, GroupIcon, HomeIcon, MessageIcon, UserIcon, UsersIcon } from './icons/Icons';

const NavItems: React.FC = () => {
    const router = useRouter()
    return (
    <>
    <button onClick={() => router.push('/Feed')} className="flex flex-col items-center p-2 hover:bg-gray-200 hover:rounded-lg">
      <span className="text-sm text-white hover:text-black"><HomeIcon></HomeIcon></span>
    </button>
    <button onClick={() => router.push('/Friends')} className="flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg">
      <span className="text-sm text-white hover:text-black"><UserIcon></UserIcon></span>
    </button>
    <button onClick={() => router.push('/Groups')} className="flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg">
      <span className="text-sm text-white hover:text-black"><GroupIcon></GroupIcon></span>
    </button>
    <button onClick={() => router.push('/Profile')} className="flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg">
      <span className="text-sm text-white hover:text-black"><UsersIcon></UsersIcon></span>
    </button>
    <button onClick={() => router.push('/Chat AI')} className="flex flex-col items-center p-2 hover:bg-gray-200 rounded-lg">
      <span className="text-sm text-white hover:text-black"><MessageIcon></MessageIcon></span>
    </button>
  </>
  )
}

export default NavItems