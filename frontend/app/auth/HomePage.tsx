"use client"
import { useState } from "react";
import Typewriter from 'typewriter-effect';
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import {Avatar,  AvatarGroup} from "@nextui-org/react";

export default function HomePage() {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const changeWindow = () => setIsRegister(!isRegister);

  return (
    <div className="flex h-screen items-center justify-around font-Grotesk bg-wallpaper3 bg-cover bg-center">
        <div className="grid grid-cols-2 h-[600px] w-[1200px] shadow-2xl backdrop-blur-3xl rounded-md">
          <div className="relative flex flex-col items-center justify-center text-white bg-cover bg-center p-5 gap-5">
            <div className="text-7xl font-Amsterdam">
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString('FluxChat')
                    .start();
                }}
              />
            </div>
            <p className="w-[500px] text-justify text-[17px]">Welcome to FluxChat, your go-to platform for seamless real-time communication. Connect instantly with friends, family, and colleagues through our easy-to-use interface. Whether you&apos;re chatting one-on-one or in a group, FluxChat keeps you connected with the people who matter most. Join now and experience the future of online communication.</p>
            <div className="absolute flex flex-col items-center top-[480px] left-[50px]">
              <p className="mb-2 text-lg text-white">Developed by:</p>
              <AvatarGroup className="cursor-pointer" isBordered>
                <Avatar color="primary" title="Brayan Salazar" size="lg" src="/Brayan.png" onClick={() => {
                  window.open("https://www.linkedin.com/in/brayan-salazar-perdomo", "_blank")
                }} />
                <Avatar color="primary" title="Luis Herrera" size="lg" src="/Luis.jpeg" onClick={() => {
                  window.open("https://www.linkedin.com/in/luisherreradev/", "_blank")
                }}/>
              </AvatarGroup>
            </div>
          </div>  
          { isRegister ? <RegisterForm changeWindow={changeWindow} /> : <LoginForm changeWindow={changeWindow} /> }
        </div>
    </div>
  );
}