"use client"
import { useState } from "react";
import Typewriter from 'typewriter-effect';
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function HomePage() {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const changeWindow = () => setIsRegister(!isRegister);

  return (
    <div className="flex flex-col md:flex-row items-center max-sm:h-[1000px] max-md:h-[900px]  h-screen justify-center font-Grotesk bg-wallpaper bg-cover bg-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-sm:h-[400px] max-sm:w-[380px] md:h-[600px] md:w-[500px] shadow-2xl backdrop-blur-3xl rounded-md p-4">
        
        <div className="relative flex flex-col items-center justify-center md:w-[480px] md:h-[600px] text-black max-sm:pr-[0px] max-lg:pr-[120px] bg-cover bg-center p-5 gap-5">
          
          <div className="text-7xl text-white drop-shadow-lg max-sm:text-6xl max-md:text-7xl font-Amsterdam text-center max-lg:mt-2 max-sm:mt-2 max-md:ml-2 max-lg:ml-2">
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString('FluxChat')
                  .start();
              }}
            />
          </div>
          
          <p className="text-sm text-justify md:text-[17px] max-md:w-[580px] max-lg:w-[400px] max-sm:pr-[0px] max-lg:pr-[90px]  max-sm:mb-[0px] max-lg:mb-[80px] max-sm:w-[300px] pb-20 mx-auto">
            Welcome to FluxChat, your hub for instant, real-time communication. Connect effortlessly with friends, family, and colleagues. Join now and stay connected with those who matter most.
          </p>
          
          <div className="absolute flex flex-col left-7 bottom-4 md:bottom-5 md:top-[480px]">
            <p className="mb-2 text-sm md:text-lg text-white drop-shadow-lg">Developed By:</p>
            <AvatarGroup className="cursor-pointer" isBordered>
              <Avatar color="primary" title="Brayan Salazar" size="md" src="/Brayan.png" onClick={() => {
                window.open("https://www.linkedin.com/in/brayan-salazar-perdomo", "_blank")
              }} />
              <Avatar color="primary" title="Luis Herrera" size="md" src="/Luis.jpeg" onClick={() => {
                window.open("https://www.linkedin.com/in/luisherreradev/", "_blank")
              }} />
            </AvatarGroup>
          </div>
          
        </div>
        
      </div>
      {isRegister ? <RegisterForm changeWindow={changeWindow} /> : <LoginForm changeWindow={changeWindow} />}
    </div>
  );
}
