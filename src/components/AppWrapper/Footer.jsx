/* eslint-disable react/jsx-no-target-blank */
import React from "react";
function Footer() {
    return (
        <>
            <div className="bg-gray-100 bg-linear-pink-invert pb-12">
                <div className="mx-auto container pt-20 lg:pt-32 flex flex-col items-center justify-center">
                    <div className="text-black font-extrabold text-3xl">
                        Dev Fitness
                    </div>
                    <div className="flex space-x-4 my-4 font-bold">
                        <div>
                            +91 95925 93856
                        </div>
                        <div>
                            dev.singhaniya123@gmail.com
                        </div>
                    </div>
                    <div className="flex space-x-4 my-4 font-bold">
                         #122 sector 42b Chandigarh
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 Dev Fitness. All rights reserved</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 my-4 font-bold">
                         Developed by 
                         <a href="https://www.instagram.com/mr_panday_jee/" target="_blank">
                             <div className="flex ml-4">
                                 <div>
                                    <svg className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.0002 11.3701C16.1236 12.2023 15.9815 13.0523 15.594 13.7991C15.2065 14.5459 14.5933 15.1515 13.8418 15.5297C13.0903 15.908 12.2386 16.0397 11.408 15.906C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1903 8.22793 13.4229 8.09426 12.5923C7.9606 11.7616 8.09226 10.91 8.47052 10.1584C8.84878 9.40691 9.45438 8.7938 10.2012 8.4063C10.948 8.0188 11.7979 7.87665 12.6302 8.00006C13.4791 8.12594 14.265 8.52152 14.8719 9.12836C15.4787 9.73521 15.8743 10.5211 16.0002 11.3701Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.5 6.5H17.51" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </div>
                                 <div>
                                     Maheshvar
                                 </div>
                             </div>
                        </a>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />

                </div>
            </div>
        </>
    );
}

export default Footer;