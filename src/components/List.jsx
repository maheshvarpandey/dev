/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from "react";
import banner1 from '../images/banner1.jpg';

function List() {
    const [show, setShow] = useState(null)
    return (
        <>
            <div className="w-full">
                {/* <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Projects</p>
                        <div>
                            <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">New Project</p>
                            </button>
                        </div>
                    </div>
                </div> */}
                {/*  */}
                
                <div className="relative flex justify-center items-center md:justify-start ">
                    <img className="hidden lg:block  w-full" src={banner1} alt="randeer" />
                    <img className="md:block lg:hidden hidden  w-full " src={banner1} alt="randeer" />
                    <img className="md:hidden w-full " src={banner1} alt="randeer" />
                    <div className="flex absolute justify-start flex-col md:flex-row items-center md:space-y-12 md:space-y-0">
                        <div className="py-4 sm:py-20  md:hidden" />
                        <div className="lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 2xl:w-2/3">Your one step can change your life.</p>
                            <p className="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">Your fitness can make you different from others, the only one cure about every disease is workout wake up and let's do it.</p>
                            <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                                <a href="https://www.instagram.com/dev.the.devil1281/" target="_blank">
                                    Explore Now
                                </a>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default List;
