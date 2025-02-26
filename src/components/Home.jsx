import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#000000]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-2xl sm:text-2xl font-bold text-white">
                        Hi👋🏽 Welcome to my Portfolio Website
                    </h1>
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">

                        I'm a Full Stack Software Engineer
                    </h2>
                    <p className="text-gray-300 py-4 max-w-md">
                        My expertise blends creativity and technical prowess.
                        Proficient in Web Developer,Game Developer,VFX Artist, I specialize in crafting software applications. My project portfolio encompasses technologies
                        such as Node.js, React, React Native, Python Flask, HTML, CSS, Tailwind, MySQL, MongoDB, and AWS Cloud services.
                    </p>
                    <div>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-[#d181d5] cursor-pointer"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};
export default Home;