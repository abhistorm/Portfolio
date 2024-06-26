import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import code1 from '../assets/code1.jpg';
import code2 from '../assets/code2.jpg';
import code3 from '../assets/code3.webp';
import code4 from '../assets/code4.jpg';
import code5 from '../assets/code5.png';
import code6 from '../assets/code6.jpg';

const projectData = [
    {
        title: 'Restaurant Web Application',
        description: 'A Restaurant Web Application built with Python Flask and SQLite',
        demoLink: '',
        codeLink: 'https://github.com/abhistorm/FooRestaurant',
        image: code1,
    },
    {
        title: 'Fallen Broke A Short Film',
        description: 'Created Film using Unreal Engine, Sequencer, Animations,MovieRender',
        demoLink: 'https://drive.google.com/file/d/1h8OBEMw3E7fmf_TYic_fyLGXTIAVLLKR/view',
        codeLink: 'https://github.com/abhistorm/Fallen-Broke-A-Short-Film',
        image: code4,
    },
    {
        title: 'PrivShare',
        description: 'A full web application for file sharing such as documents, images, videos, and others. Built with NodeJs and React',
        demoLink: '/',
        codeLink: 'https://github.com/abhistorm/PrivShare-Specialization-project-main',
        image: code6,
    },
    {
        title: 'E-commerce Website',
        description: 'An e-commerce website is an online platform designed specifically for buying and selling products.',
        demoLink: '/',
        codeLink: 'https://github.com/abhistorm/Ecommerce-Website-Main',
        image: code5,
    },
    {
        title: 'AirBnB Clone Website',
        description: 'A simple Clone of the famous AirBnB website',
        demoLink: 'https://abhistorm.github.io/',
        codeLink: 'https://github.com/abhistorm/abhistorm.github.io',
        image: code2,
    },
    {
        title: 'Stable Oda Telegram Bot',
        description: 'Stable Oda Bot is a telegram bot built with Python. It generates images via text prompts',
        demoLink: '/',
        codeLink: 'https://github.com/Bolaji5821/Stable-OdaBot',
        image: code3,
    },
];

const Works = () => {
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxIsOpen(true);
    };

    const closeLightbox = () => {
        setLightboxIndex(-1);
        setLightboxIsOpen(false);
    };

    return (
        <div name='work' className='w-full md:h-screen text-black-300 bg-[#ffffff]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-black-300 border-cyan-500'>
                        Projects
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my most recent Projects</p>
                    <p className='py-6 text-1xl'>Click to view image</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative cursor-pointer overflow-hidden'
                        >
                            <LazyLoadImage
                                src={project.image}
                                alt={`Project Image ${index + 1}`}
                                effect='opacity'
                                className='w-full h-full object-cover rounded-md'
                                placeholderSrc={'https://via.placeholder.com/300'}
                            />
                            {/* Hover Effects */}
                            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col absolute top-0 left-0 w-full h-full text-white bg-opacity-80 hover:bg-black'>
                                <span className='text-lg font-bold tracking-wider'>
                                    {project.title}
                                </span>
                                <p className='text-center mt-2'>
                                    {project.description}
                                </p>
                                <div className='pt-4 text-center'>
                                    <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {lightboxIsOpen && (
                    <Lightbox
                        mainSrc={projectData[lightboxIndex].image}
                        nextSrc={projectData[(lightboxIndex + 1) % projectData.length].image}
                        prevSrc={projectData[(lightboxIndex + projectData.length - 1) % projectData.length].image}
                        onCloseRequest={closeLightbox}
                        onMovePrevRequest={() => setLightboxIndex((lightboxIndex + projectData.length - 1) % projectData.length)}
                        onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % projectData.length)}
                    />
                )}
            </div>
        </div>
    );
};

export default Works;
