import React, { useRef } from 'react';

const Contact = () => {
    const emailRef = useRef(null);

    function copyEmailToClipboard() {
        const email = emailRef.current.value;
        navigator.clipboard.writeText(email);
    }
    const phoneRef = useRef(null);

    function copyPhoneToClipboard() {
        const phone = phoneRef.current.value;
        navigator.clipboard.writeText(phone);
    }

    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-t from-[#0c0227] to-[#2b00ff] flex justify-center items-center p-4'>
            <div className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-[#fff]'>Contact</p>
                    <p className='text-gray-300 py-4'>Send me a message</p>
                </div>
                <input className='bg-[#fff] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#fff]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#fff] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                <input className='text-black border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center' type="email" placeholder='Email' name='email' value="abhiace2003@gmail.com" ref={emailRef} />
                <input className='text-black border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center' type="phone" placeholder='Phone Number' name='phone' value="+919027834183" ref={phoneRef} />
                <button onClick={copyEmailToClipboard} className='text-black border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-1 mx-auto flex items-center'>Copy Email</button>
                <button onClick={copyPhoneToClipboard} className='text-black border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-1 mx-auto flex items-center'>Copy Phone Number</button>

            </div>

        </div>
    );
}

export default Contact;
