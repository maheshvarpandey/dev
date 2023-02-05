/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import img1 from '../images/cover2.jpg';
// import img2 from '../images/cover3.jpg';
// import img3 from '../images/cover4.jpg';
// import img4 from '../images/cover5.jpg';
// import img5 from '../images/cover7.jpg';
// import img6 from '../images/banner2.jpg';
import { useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";


function Teams() {

// Access-Control-Allow-Origin:  http://127.0.0.1:3000
// Access-Control-Allow-Methods: POST
// Access-Control-Allow-Headers: Content-Type, Authorization

    useEffect(() => {
        // var myHeaders = new Headers();
        // myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000")
        // myHeaders.append("Access-Control-Allow-Methods", "GET")
        // myHeaders.append(" Access-Control-Allow-Headers", "Content-Type, Authorization")
        // myHeaders.append("Cookie", "g_did=F6629658-19AD-411C-9D4D-F298CBEAC101; dpr=1.3125; datr=TwKmY4-UC92_yiv8zD-VtlfB; ig_nrcb=1; csrftoken=O3R8LdOVAIs0ZqoE2tYD4vHDFigVftun; mid=Y6YCUAALAAH93KSdBWdjxs4zRarD; csrftoken=G7N5DyEX6dsVYLPxvNMS6QtdC8OKyoyL; ig_did=72E6153F-1A52-44F6-8FE8-01EE879FFA42; ig_nrcb=1; mid=Y6YEoQAEAAFnje5uiqcNJvoOeUpd");
        // myHeaders.append("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)");
        // myHeaders.append("x-csrftoken", "O3R8LdOVAIs0ZqoE2tYD4vHDFigVftun");
        // myHeaders.append("x-asbd-id", "198387");

        var requestOptions = {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Methods": "GET",
                "Cookie": "g_did=F6629658-19AD-411C-9D4D-F298CBEAC101; dpr=1.3125; datr=TwKmY4-UC92_yiv8zD-VtlfB; ig_nrcb=1; csrftoken=O3R8LdOVAIs0ZqoE2tYD4vHDFigVftun; mid=Y6YCUAALAAH93KSdBWdjxs4zRarD; csrftoken=G7N5DyEX6dsVYLPxvNMS6QtdC8OKyoyL; ig_did=72E6153F-1A52-44F6-8FE8-01EE879FFA42; ig_nrcb=1; mid=Y6YEoQAEAAFnje5uiqcNJvoOeUpd",
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)"
            },
            redirect: 'follow'
        };

        axios("https://www.instagram.com/api/v1/users/web_profile_info/?username=fitnesscoach.dev", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className="mb-6">
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3">Some Work here</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Some of our clients transformation is here</h1>
                </div>
            </div>
            {/* <div className="w-full px-10 pt-10">
                <section className="overflow-hidden text-gray-700">
                    <div className="container px-2 py-2 mx-auto lg:pt-24 lg:px-8">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={img1} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={img2} />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={img3} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={img4} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={img5} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={img6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center">
                    <button className="mt-6 shrink-0 w-full md:w-auto lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 bg-indigo-700 hover:text-white font-medium text-white">
                        <a href="https://www.instagram.com/fitnesscoach.dev/" target="_blank" rel="noreferrer">
                            Show More
                        </a>
                    </button>
                </div>
            </div> */}

            <div>
                <Gallery  />
            </div>
        </div>
    );
}

export default Teams;
