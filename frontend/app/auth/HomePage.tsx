"use client"
import { useState } from "react";
import Typewriter from 'typewriter-effect';
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

export default function HomePage() {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const changeWindow = () => setIsRegister(!isRegister);

  return (
    <div className="flex h-screen items-center justify-around font-Grotesk bg-wallpaper3 bg-cover bg-center">
        <div className="grid grid-cols-2 h-[600px] w-[1200px] shadow-2xl backdrop-blur-3xl rounded-md">
          <div className="flex flex-col items-center justify-center text-white bg-cover bg-center p-5 gap-5">
            <div className="text-7xl">
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString('FluxChat')
                    .start();
                }}
              />
            </div>
            <p className="w-[500px] text-justify text-[17px]">Welcome to FluxChat, your go-to platform for seamless real-time communication. Connect instantly with friends, family, and colleagues through our easy-to-use interface. Whether you&apos;re chatting one-on-one or in a group, FluxChat keeps you connected with the people who matter most. Join now and experience the future of online communication.</p>
          </div>  
          { isRegister ? <RegisterForm changeWindow={changeWindow} /> : <LoginForm changeWindow={changeWindow} /> }
        </div>
    </div>
  );
}