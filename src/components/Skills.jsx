import React from 'react';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#000000] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                    <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#ff4c4c] hover:scale-110 duration-500'>
                        <p className='my-4'>HTML/CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#6575ff] hover:scale-110 duration-500'>
                        <p className='my-4'>Game Design</p>
                    </div>
                    <div className='shadow-md shadow-[#f3ff52] hover:scale-110 duration-500'>
                        <p className='my-4'>VFX & Movie Production</p>
                    </div>
                    <div className='shadow-md shadow-[#68c7ff] hover:scale-110 duration-500'>
                        <p className='my-4'>SDE</p>
                    </div>
                    <div className='shadow-md shadow-[#7aff68] hover:scale-110 duration-500'>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#ff4c4c] hover:scale-110 duration-500'>
                        <p className='my-4'>GIT/Github</p>
                    </div>
                    <div className='shadow-md shadow-[#6575ff] hover:scale-110 duration-500'>
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#f3ff52] hover:scale-110 duration-500'>
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-[#68c7ff] hover:scale-110 duration-500'>
                        <p className='my-4'>MySQL</p>
                    </div>
                    <div className='shadow-md shadow-[#ff4c4c] hover:scale-110 duration-500'>
                        <p className='my-4'>Flask</p>
                    </div>
                    <div className='shadow-md shadow-[#6575ff] hover:scale-110 duration-500'>
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#f3ff52] hover:scale-110 duration-500'>
                        <p className='my-4'>Unreal Engine</p>
                    </div>
                    <div className='shadow-md shadow-[#68c7ff] hover:scale-110 duration-500'>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#ff4c4c] hover:scale-110 duration-500'>
                        <p className='my-4'>After Effects</p>
                    </div>
                    <div className='shadow-md shadow-[#6575ff] hover:scale-110 duration-500'>
                        <p className='my-4'>DevOps</p>
                    </div>
                    <div className='shadow-md shadow-[#f3ff52] hover:scale-110 duration-500'>
                        <p className='my-4'>React Native</p>
                    </div>
                    <div className='shadow-md shadow-[#ffcf82] hover:scale-110 duration-500'>
                        <p className='my-4'>AWS Cloud Services</p>
                    </div>
                    <div className='shadow-md shadow-[#68c7ff] hover:scale-110 duration-500'>
                        <p className='my-4'>Google Cloud</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skills;