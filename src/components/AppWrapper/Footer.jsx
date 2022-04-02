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
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />

                </div>
            </div>
        </>
    );
}

export default Footer;