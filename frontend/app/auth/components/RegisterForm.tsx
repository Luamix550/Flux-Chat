"use client"
import React, { useEffect, useState } from 'react';
import { Input, Image, Button } from "@nextui-org/react";
import { EyeFilledIcon } from './EyeFilledIcon';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import type { sessionForm } from '../../types/types';
import useRegisterValidation from '../hooks/RegisterFormValidation';
import { toast } from 'sonner';
import { useMediaQuery } from 'usehooks-ts';

export default function RegisterForm({ changeWindow } : sessionForm) {
  const [isVisible, setIsVisible] = useState(false);
  const isMediumOrLargerDevice = useMediaQuery('(min-width: 768px)');
  const { values, errors, handleChange, validate, isInvalid } = useRegisterValidation({ name: '', email: '', password: '', repeatPassword: '' });

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleSubmit = () => validate();

  useEffect(() => {
    Object.values(errors).forEach(error => toast.error(error, {
        duration: 2000
    }));
  }, [errors]);

  return (
    <div className='flex flex-col items-center justify-center md:bg-white md:h-[600px] md:w-[500px] max-sm:mt-8 max-md:mt-8 rounded-md bg-cover bg-top font-Grotesk'>
      <div className='flex flex-col justify-center items-center animate-bouncing'>
        <div className='flex flex-col items-center gap-1 m-5'>
            <h1 className='text-4xl max-sm:text-white'>Welcome!</h1>
            <p className='text-[17px] max-sm:text-white '>Create an account to join FluxChat.</p>
        </div>    
        <div className='flex flex-col gap-2 w-96'>
            <Input
            name='name'
            value={values.name}
            color='primary'
            variant={ isMediumOrLargerDevice ? 'bordered' : 'faded' }
            type="text"
            isInvalid={isInvalid.name}
            onChange={handleChange}
            label={
                <div className='flex items-center'>
                <Image src='/user.svg' alt='name' width={30} height={20} />
                <p className='max-sm:text-black' >Name</p>
                </div>
            }
            />
            <Input
            name='email'
            value={values.email}
            color='primary'
            variant={ isMediumOrLargerDevice ? 'bordered' : 'faded' }
            type="email"
            isInvalid={isInvalid.email}
            onChange={handleChange}
            label={
                <div className='flex items-center'>
                <Image src='/email.svg' alt='email' width={30} height={20} />
                <p className='max-sm:text-black'>Email</p>
                </div>
            }
            />
            <Input
            name='password'
            value={values.password}
            color='primary'
            variant={ isMediumOrLargerDevice ? 'bordered' : 'faded' }
            isInvalid={isInvalid.password}
            onChange={handleChange}
            label={
                <div className='flex items-center'>
                <Image src='/password.svg' alt='password' width={30} height={25} />
                <p className='max-sm:text-black'>Password</p>
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
            color='primary'
            variant={ isMediumOrLargerDevice ? 'bordered' : 'faded' }
            isInvalid={isInvalid.repeatPassword}
            onChange={handleChange}
            label={
                <div className='flex items-center'>
                <Image src='/password.svg' alt='password' width={30} height={25} />
                <p className='max-sm:text-black' >Repeat password</p>
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
        <p className='text-[17px] max-sm:text-white'>Already have an account? <span className='hover:text-blue-500 cursor-pointer' onClick={changeWindow}>Sign In</span></p>
      </div>
    </div>
  );
}

