"use client"
import React, { useState } from 'react';
import { Input, Image, Button } from "@nextui-org/react";
import { EyeFilledIcon } from './EyeFilledIcon';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import type { sessionForm } from '../../types/types';

export default function RegisterForm({ changeWindow } : sessionForm) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='flex flex-col items-center justify-center bg-wallpaper1 rounded-md bg-cover bg-top font-Grotesk'>
      <div className='flex flex-col justify-center items-center animate-bouncing'>
        <div className='flex flex-col items-center gap-1 m-5'>
            <h1>Welcome!</h1>
            <p>Create an account to join FluxChat.</p>
        </div>    
        <div className='flex flex-col gap-2 w-96'>
            <Input
            type="text"
            label={
                <div className='flex items-center'>
                <Image src='/user.svg' alt='name' width={30} height={20} />
                <p>Name</p>
                </div>
            }
            />
            <Input
            type="email"
            label={
                <div className='flex items-center'>
                <Image src='/email.svg' alt='email' width={30} height={20} />
                <p>Email</p>
                </div>
            }
            />
            <Input
            label={
                <div className='flex items-center'>
                <Image src='/password.svg' alt='password' width={30} height={25} />
                <p>Password</p>
                </div>
            }
            endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
                </button>
            }
            type={isVisible ? "text" : "password"}
            />
        </div>
        <Button className='m-10 bg-slate-600'>
            SIGN UP
        </Button>
        <p>Already have an account? <span className='hover:text-blue-500 cursor-pointer' onClick={changeWindow}>Sign In</span></p>
      </div>
    </div>
  );
}

