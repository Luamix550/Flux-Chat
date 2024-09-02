"use client"
import React, { useEffect, useState } from 'react'
import { Input, Image, Button } from "@nextui-org/react";
import { EyeFilledIcon } from './EyeFilledIcon';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import type { sessionForm } from '../../types/types';
import useLoginValidation from '../hooks/LoginFormValidation';
import { toast } from 'sonner';
import { useMediaQuery } from 'usehooks-ts';

export default function LoginForm({ changeWindow } : sessionForm) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const isMediumOrLargerDevice = useMediaQuery('(min-width: 768px)');
  const { values, errors, handleChange, validate, isInvalid } = useLoginValidation({ email: '', password: '' });
  
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = () => validate()

  useEffect(() => {
    Object.values(errors).forEach(error => toast.error(error, {
      duration: 2000
    }));
  }, [errors])

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center shadow-lg md:bg-white max-sm:w-[0px] max-sm:h-[400px] h-[600px] w-[500px] max-lg:h-[600px] max-lg:w-[600px] max-md:w-[500px] max-sm:mt-8 max-md:mt-8 rounded-md bg-cover bg-top font-Grotesk'>
      <div className='flex flex-col items-center animate-bouncing'>
        <div className='flex flex-col justify-center items-center gap-1 m-5'>
            <h1 className='text-5xl text-customBlue'>Hello!</h1>
            <p className='text-[17px] max-sm:text-white max-md:text-white'>Sign in to start chatting in real-time.</p>
          </div>
          <div className='flex flex-col gap-2 w-96'>
            <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={isInvalid.email}
              color='primary'
              variant={ isClient && isMediumOrLargerDevice ? 'bordered' : 'faded' }
              type="email"
              label={
              <div className='flex items-center'>
                <Image src='/email.svg' alt='email' width={30} height={20}/>
                <p>Email</p>
              </div>
            }/>
            <Input
              name='password'
              value={values.password}
              onChange={handleChange}
              isInvalid={isInvalid.password}
              color='primary'
              variant={ isClient && isMediumOrLargerDevice ? 'bordered' : 'faded' }
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
          <Button onClick={handleSubmit} type='submit' className='m-10 bg-slate-300 shadow-lg hover:scale-110 text-[17px] hover:bg-slate-500'>
            Sign In
          </Button>
          <p className='text-[17px] max-sm:text-white max-md:text-white '>Dont&apos;t have an account? <span className='hover:text-customBlue cursor-pointer' onClick={changeWindow}>Sing Up</span></p>
      </div>
    </div>
  )
}

