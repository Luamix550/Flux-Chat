"use client"
import React, { useState } from 'react'
import { users } from '@/app/users';
import { Avatar, button } from '@nextui-org/react';
import {Tooltip} from "@nextui-org/tooltip";
import {Textarea} from "@nextui-org/input";

export default function Profile({ params } : { params : { userId: string } }) {
    const { userId } = params;
    const user = users.filter(user => user.id === parseInt(userId));
    const [description, setDescription] = useState(user[0].description);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };
    

    return (
        <div className='bg-wallpaper min-h-screen'>
            <div className='grid grid-cols-4 min-h-screen'>
                <div className='bg-gradient-to-t from-black to-blue-900 w-[70%] col-span-1'>

                </div>
                <div className='col-span-2 h-screen px-5 gap-5 flex flex-col'>
                    <div className='flex flex-col items-center backdrop-blur-3xl rounded-lg gap-10 overflow-y-auto h-screen'>
                        <h1 className='text-7xl text-white drop-shadow-lg font-Amsterdam uppercase m-5'>My Profile</h1>
                        <div className='flex gap-5 justify w-full'>
                            <div className='m-5 flex flex-col gap-5'>
                                <Avatar color='primary' src={user[0].src} className='w-[200px] h-[200px]' />
                                <h1 className='font-Grotesk'>{user[0].username}</h1>
                                <p className='font-Grotesk'><span className='text-customBlue'>Age: </span>{user[0].age}</p>
                            </div>
                            <div className='m-5 flex flex-col justify-center items-center rounded-lg p-5 w-1/2 gap-5 bg-white'>
                                <h1 className='uppercase font-Grotesk text-5xl'>About Me</h1>
                                { isEditing ? (
                                    <Textarea 
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className='font-Grotesk'
                                    />
                                ) : (
                                    <p className='font-Grotesk text-justify'>{description}</p>
                                )}

                                { isEditing ? (
                                    <button
                                    onClick={handleSaveClick}
                                    className='flex w-full justify-end'>
                                        <Tooltip showArrow={true} placement='bottom' content="Save" color='primary'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6 hover:text-customBlue hover:cursor-pointer bi bi-floppy" viewBox="0 0 16 16">
                                                <path d="M11 2H9v3h2z"/>
                                                <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                            </svg>
                                        </Tooltip>
                                    </button>
                                ) : (
                                    <div className='flex w-full justify-end'>
                                        <Tooltip showArrow={true} placement='bottom' content="Edit" color='primary'>
                                            <svg onClick={handleEditClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 hover:cursor-pointer hover:text-customBlue">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </Tooltip>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
