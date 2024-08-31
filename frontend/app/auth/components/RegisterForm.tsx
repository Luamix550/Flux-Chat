"use client"
import React, { useEffect, useState } from 'react';
import { Input, Image, Button } from "@nextui-org/react";
import { EyeFilledIcon } from './EyeFilledIcon';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import type { sessionForm } from '../../types/types';
import useRegisterValidation from '../hooks/RegisterFormValidation';
import { toast } from 'sonner';

export default function RegisterForm({ changeWindow } : sessionForm) {
  const [isVisible, setIsVisible] = useState(false);
  const { values, errors, handleChange, validate, isInvalid } = useRegisterValidation({ name: '', email: '', password: '', repeatPassword: '' });

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleSubmit = () => validate();

  useEffect(() => {
    Object.values(errors).forEach(error => toast.error(error));
  }, [errors]);

  return (
    <div className='flex flex-col items-center justify-center bg-white rounded-md bg-cover bg-top font-Grotesk'>
      <div className='flex flex-col justify-center items-center animate-bouncing'>
        <div className='flex flex-col items-center gap-1 m-5'>
            <h1 className='text-4xl'>Welcome!</h1>
            <p className='text-[17px]'>Create an account to join FluxChat.</p>
        </div>    
        <div className='flex flex-col gap-2 w-96'>
            <Input
            name='name'
            value={values.name}
            onChange={handleChange}
            isInvalid={isInvalid.name}
            color='primary'
            variant='bordered'
            type="text"
            label={
                <div className='flex items-center'>
                <Image src='/user.svg' alt='name' width={30} height={20} />
                <p>Name</p>
                </div>
            }
            />
            <Input
            name='email'
            value={values.email}
            onChange={handleChange}
            isInvalid={isInvalid.email}
            color='primary'
            variant='bordered'
            type="email"
            label={
                <div className='flex items-center'>
                <Image src='/email.svg' alt='email' width={30} height={20} />
                <p>Email</p>
                </div>
            }
            />
            <Input
            name='password'
            value={values.password}
            onChange={handleChange}
            isInvalid={isInvalid.password}
            color='primary'
            variant='bordered'
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
            <Input
            name='repeatPassword'
            value={values.repeatPassword}
            onChange={handleChange}
            isInvalid={isInvalid.repeatPassword}
            color='primary'
            variant='bordered'
            label={
                <div className='flex items-center'>
                <Image src='/password.svg' alt='password' width={30} height={25} />
                <p>Repeat password</p>
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
        <Button onClick={handleSubmit} type='submit' className='m-10 bg-slate-300 shadow-lg hover:scale-110 text-[17px] hover:bg-slate-500'>
            Sign Up
        </Button>
        <p className='text-[17px]'>Already have an account? <span className='hover:text-blue-500 cursor-pointer' onClick={changeWindow}>Sign In</span></p>
      </div>
    </div>
  );
}

