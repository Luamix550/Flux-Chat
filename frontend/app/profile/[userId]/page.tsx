"use client"
import React, { useState } from 'react';
import { users } from '@/app/users';
import { Avatar, Input, Image } from '@nextui-org/react';
import { Tooltip } from "@nextui-org/tooltip";
import { Textarea } from "@nextui-org/input";
import Sidebar from '@/app/feed/components/Sidebar';
import DropdownComponent from './components/Dropdown';

export default function Profile({ params } : { params : { userId: string } }) {
    const { userId } = params;
    const user = users.find(user => user?.id === parseInt(userId));
    const [description, setDescription] = useState(user?.description);
    const [isEditing, setIsEditing] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [profileImg, setProfileImg] = useState<string | null>(user?.src || null);
    const [coverImg, setCoverImg] = useState<string>();
    const [isInvalid, setIsInvalid] = useState<boolean>();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const validateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userDescription = e.target.value;
        if (userDescription.length > 400) setIsInvalid(true);
        else {
            setIsInvalid(false);
            setDescription(userDescription);
        }
    };

    const changeImg = (optionType: string, file: File) => {
        const imgUrl = URL.createObjectURL(file);
        if (optionType === "profile") setProfileImg(imgUrl);
        if (optionType === "coverPhoto") setCoverImg(imgUrl);
    };

    return (
        <div className='bg-wallpaper bg-bottom min-h-screen'>
            <div className='flex min-h-screen'>
                <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>
                <div className='flex flex-col items-center justify-center w-full min-h-screen'>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <div className='flex justify-center'>
                            <div className='relative flex flex-col gap-5 items-center backdrop-blur-3xl shadow-2xl rounded-3xl w-[800px] h-[800px]'>
                                <div className='p-5 w-full rounded-3xl h-full bg-cover bg-center' style={{ backgroundImage: `url(${coverImg || '/default.jpg'})` }}>
                                    <div className='p-3 hover:cursor-pointer rounded-3xl bg-slate-600 absolute top-[320px] right-5'>
                                        <DropdownComponent changePictures={changeImg} />
                                    </div>
                                    <div className="absolute top-[290px]">
                                        <Avatar color='primary' src={profileImg || '/defaultavatar.jpg'} className='w-[100px] h-[100px]' />
                                        <h1 className='text-2xl'>{user?.name}</h1>
                                        <h1>{`@${user?.username}`}</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col p-5 w-full h-full mt-20'>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-5xl text-customBlue2 font-bold'>Info</h1>
                                        {isEditing ? (
                                            <Textarea 
                                                value={description}
                                                maxRows={10}
                                                isInvalid={isInvalid}
                                                onChange={(e) => validateDescription(e)}
                                                className='font-Grotesk'
                                                errorMessage="The description should be at most 400 characters long."
                                            />
                                        ) : (
                                            <p className='text-justify text-customGray text-xl'>{description}</p>
                                        )}
                                        {isEditing ? (
                                            <button onClick={handleSaveClick} className='flex w-full justify-end'>
                                                <Tooltip showArrow placement='bottom' content="Save" color='primary'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6 text-customBlue2 hover:text-customWhite bi bi-floppy" viewBox="0 0 16 16">
                                                        <path d="M11 2H9v3h2z"/>
                                                        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                                    </svg>
                                                </Tooltip>
                                            </button>
                                        ) : (
                                            <div className='flex w-full justify-end'>
                                                <Tooltip showArrow placement='bottom' content="Edit" color='primary'>
                                                    <svg onClick={handleEditClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 hover:cursor-pointer text-customBlue2 hover:text-customWhite">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>
                                                </Tooltip>
                                            </div>
                                        )}
                                        <div className='flex gap-2'>
                                            <p className='font-Grotesk'><span className='text-customBlue2 font-bold'>Age: </span>{user?.age}</p>
                                            <p className='font-Grotesk'><span className='text-customBlue2 font-bold'>Tel: </span>{user?.tel}</p>
                                            <p className='font-Grotesk'><span className='text-customBlue2 font-bold'>City: </span>{user?.city}</p>
                                            <div className='flex'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-customBlue2 font-bold">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                                </svg>
                                                <p className='font-Grotesk'> {user?.friends}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
