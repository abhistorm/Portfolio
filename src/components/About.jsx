import React from "react";

const About = () => {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#000000] text-[#000000]"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className=" py-16 rounded-md bg-[#ffff] flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-red-500">
                                About
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>
                                Hi. I'm Abhinav Gupta, nice to meet you. Please take a
                                look around.
                            </p>
                        </div>
                        <div>
                            <p>
                                {" "}
                                A software Engineer with experience in building Responsive and
                                Scalable Web apps. I am well-knowledged in Game Developer,VFX Production
                                practices. I'm always willing to learn new technologies to upscale my skills and creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;