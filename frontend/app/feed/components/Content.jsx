import React from 'react'

const Content = () => {
  return (
    <div className="flex flex-col max-w-6xl mb-20 xl:px-0 mx-auto">
    <h2 className=" text-3xl font-extrabold text-gray-900">Services</h2>

    <div className="space-y-6">
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10">
                <div className="relative w-full sm:w-1/2">
                    <div className="relative h-full p-5 bg-white border-2 border-customBlue rounded-lg">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Chatting with your friends.</h3>
                        <p className="mb-2 text-gray-600">A secure, decentralized chat app that lets you connect with friends while keeping control of your data.</p>
                    </div>
                </div>

                <div className="relative w-full sm:w-1/2">
                    <div className="relative h-full p-5 bg-white border-2 border-customGray rounded-lg">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">I have your own AI in the app!</h3>
                        <p className="mb-2 text-gray-600">An AI-powered app that delivers personalized experiences using the latest Web 3.0 technology</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content