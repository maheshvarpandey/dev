/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
function HomePage() {
    useState(() => {
        let slides = document.querySelectorAll(".slide-ana>div");
        let slideSayisi = slides.length;

        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        for (let index = 0; index < slides.length; index++) {
            const element = slides[index];
            element.style.transform = "translateX(" + 100 * index + "%)";
        }
        let loop = 0 + 1000 * slideSayisi;

        function goNext() {
            loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        function goPrev() {
            loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
            }
        }

        next.addEventListener("click", goNext);
        prev.addEventListener("click", goPrev);
        document.addEventListener("keydown", function (e) {
            if (e.code === "ArrowRight") {
                goNext();
            } else if (e.code === "ArrowLeft") {
                goPrev();
            }
        });
    });

    return (
        <>
            <div className="px-6 xl:px-0 mx-auto container py-16">
                <div>
                    <div>
                        <div className="lg:flex flex-wrap items-center">
                            <div className="lg:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
                                <div className="w-full">
                                    <h1 className="text-2xl lg:text-4xl font-bold text-indigo-900 tracking-wider lg:w-11/12 leading-relaxed">New Events by Jesscia Geller</h1>
                                    <div className="py-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={60} height={2} viewBox="0 0 60 2" fill="none">
                                            <rect width={60} height={2} fill="#E53E3E" />
                                        </svg>
                                    </div>
                                    <div className="flex w-full pt-8">
                                        <button className="bg-red-600 text-white py-5 px-6 mr-2" id="prev">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={26} viewBox="0 0 14 26" fill="none">
                                                <path d="M12.5 2L1.5 13L12.5 24" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <div className="bg-red-600 text-white py-5 px-6" id="next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={26} viewBox="0 0 14 26" fill="none">
                                                <path d="M1.5 24L12.5 13L1.5 2" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-2/3 w-full md:mt-10 lg:mt-0">
                                <div className="slider">
                                    <div className="slide-ana">
                                        <div
                                            className="lg:flex"
                                            style={{
                                                transform: "translateX(0%)",
                                            }}
                                        >
                                            <div>
                                                <div className="relative h-96">
                                                    <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png" alt />
                                                </div>
                                                <div className="py-6 border-b border-gray-200">
                                                    <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                                                    <p className="py-3 text-sm text-gray-700 leading-7">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes and spaces. </p>
                                                    <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                                                    <div className="pt-6">
                                                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                                        <circle cx={9} cy={9} r="7.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">4:00pm to 6:00pm</p>
                                                            </div>
                                                            <div className="flex items-center pl-2">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none">
                                                                        <circle cx={8} cy="8.1665" r="2.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">Manhattan, NY</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block lg:ml-8">
                                                <div className="relative h-96">
                                                    <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection2.png" alt />
                                                </div>
                                                <div className="py-6 border-b border-gray-200">
                                                    <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                                                    <p className="py-3 text-sm text-gray-700 leading-7">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes and spaces. </p>
                                                    <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                                                    <div className="pt-6">
                                                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                                        <circle cx={9} cy={9} r="7.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">4:00pm to 6:00pm</p>
                                                            </div>
                                                            <div className="flex items-center pl-2">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none">
                                                                        <circle cx={8} cy="8.1665" r="2.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">Manhattan, NY</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="lg:flex"
                                            style={{
                                                transform: "translateX(100%)",
                                            }}
                                        >
                                            <div>
                                                <div className="relative h-96">
                                                    <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png" alt />
                                                </div>
                                                <div className="py-6 border-b border-gray-200">
                                                    <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                                                    <p className="py-3 text-sm text-gray-700 leading-7">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes and spaces. </p>
                                                    <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                                                    <div className="pt-6">
                                                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                                        <circle cx={9} cy={9} r="7.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">4:00pm to 6:00pm</p>
                                                            </div>
                                                            <div className="flex items-center pl-2">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none">
                                                                        <circle cx={8} cy="8.1665" r="2.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">Manhattan, NY</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block lg:ml-8">
                                                <div className="relative h-96">
                                                    <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection2.png" alt />
                                                </div>
                                                <div className="py-6 border-b border-gray-200">
                                                    <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                                                    <p className="py-3 text-sm text-gray-700 leading-7">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes and spaces. </p>
                                                    <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                                                    <div className="pt-6">
                                                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                                        <circle cx={9} cy={9} r="7.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">4:00pm to 6:00pm</p>
                                                            </div>
                                                            <div className="flex items-center pl-2">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none">
                                                                        <circle cx={8} cy="8.1665" r="2.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">Manhattan, NY</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="lg:flex"
                                            style={{
                                                transform: "translateX(200%)",
                                            }}
                                        >
                                            <div>
                                                <div className="relative h-96">
                                                    <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png" alt />
                                                </div>
                                                <div className="py-6 border-b border-gray-200">
                                                    <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                                                    <p className="py-3 text-sm text-gray-700 leading-7">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes and spaces. </p>
                                                    <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                                                    <div className="pt-6">
                                                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                                        <circle cx={9} cy={9} r="7.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">4:00pm to 6:00pm</p>
                                                            </div>
                                                            <div className="flex items-center pl-2">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none">
                                                                        <circle cx={8} cy="8.1665" r="2.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">Manhattan, NY</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block lg:ml-8">
                                                <div className="relative h-96">
                                                    <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection2.png" alt />
                                                </div>
                                                <div className="py-6 border-b border-gray-200">
                                                    <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                                                    <p className="py-3 text-sm text-gray-700 leading-7">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes and spaces. </p>
                                                    <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                                                    <div className="pt-6">
                                                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                                        <circle cx={9} cy={9} r="7.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">4:00pm to 6:00pm</p>
                                                            </div>
                                                            <div className="flex items-center pl-2">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none">
                                                                        <circle cx={8} cy="8.1665" r="2.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">Manhattan, NY</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="lg:flex"
                                            style={{
                                                transform: "translateX(300%)",
                                            }}
                                        >
                                            <div>
                                                <div className="relative h-96">
                                                    <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection1.png" alt />
                                                </div>
                                                <div className="py-6 border-b border-gray-200">
                                                    <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                                                    <p className="py-3 text-sm text-gray-700 leading-7">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes and spaces. </p>
                                                    <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                                                    <div className="pt-6">
                                                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                                        <circle cx={9} cy={9} r="7.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">4:00pm to 6:00pm</p>
                                                            </div>
                                                            <div className="flex items-center pl-2">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none">
                                                                        <circle cx={8} cy="8.1665" r="2.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">Manhattan, NY</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block lg:ml-8">
                                                <div className="relative h-96">
                                                    <img className="absolute inset-0 object-cover object-center w-full h-full" src="https://cdn.tuk.dev/assets/components/111220/events/eventsection2.png" alt />
                                                </div>
                                                <div className="py-6 border-b border-gray-200">
                                                    <h2 className="text-2xl text-indigo-900 font-bold">Policy Level Decisions</h2>
                                                    <p className="py-3 text-sm text-gray-700 leading-7">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes and spaces. </p>
                                                    <p className="text-sm text-red-600">Tuesday, 12th August, 2020</p>
                                                    <div className="pt-6">
                                                        <div className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                                                        <circle cx={9} cy={9} r="7.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path d="M9 4.8335V9.00016L11.5 11.5002" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">4:00pm to 6:00pm</p>
                                                            </div>
                                                            <div className="flex items-center pl-2">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none">
                                                                        <circle cx={8} cy="8.1665" r="2.5" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7141 12.8806L9.17831 16.4164C8.86602 16.729 8.44227 16.9047 8.0004 16.9047C7.55852 16.9047 7.13478 16.729 6.82248 16.4164L3.28581 12.8806C0.682416 10.2771 0.682489 6.05602 3.28597 3.45258C5.88946 0.84914 10.1105 0.84914 12.714 3.45258C15.3175 6.05602 15.3175 10.2771 12.7141 12.8806Z" stroke="#718096" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p className="pl-1">Manhattan, NY</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {` 
            /* Slider css below */
            .slider {
                width: 100%;
                height: 630px;
                margin: 0 auto;
                position: relative;
                overflow: hidden;
            }
            .slide-ana {
                height: 100%;
            }
            .slide-ana > div {
                width: 100%;
                height: 100%;
                position: absolute;
                transition: all 1s;
            }
             `}
            </style>
        </>
    );
}

export default HomePage;
