import React from 'react'
import { FiMail } from "react-icons/fi"; 
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
     

    <div id='contact' className='pt-32 container' >
       {/* Section Heading */}
       <div className='text-center mb-10'>
        <h1 className='text-4xl md:text-6xl font-bold underline'>Contact ME</h1>
        <hr className='w-24 border-t-4  mx-auto ' />
      </div>
<div className='grid md:grid-cols-2 gap-10'>
<div className=' space-y-8'>
<h1 className='text-3xl md:text-5xl font-bold underline' >Get in touch</h1>
<p className='text-gray-600 text-[18px] pt-2'>
  Drop me a line,give mea call , or send me message  by submitting a form
</p>
<div className='flex gap-3 items-center'>
  <FiMail size={35}/>ismail233290@gmail.com
</div>
<div className='flex gap-3 items-center'>
  <FaPhoneAlt  size={35}/>03303911285
  </div>
</div>
<div className='space-y-8'>
  <div className='flex flex-col gap-1'>
    <label htmlFor="name">Name</label>
    <input type="text" className='rounded-lg h-[40px] bg-transparent border border-accent'
    id='name'/>
  </div>
  
  <div className='flex flex-col gap-1'>
    <label htmlFor="email">Email</label>
    <input type="text" className='rounded-lg h-[40px] bg-transparent border border-accent'
    id='email'/>
  </div>

  <div className='flex flex-col gap-1'>
    <label htmlFor="message">Message</label>
    <textarea className='rounded-lg bg-transparent border border-accent'
    id='msg' rows={8}>
    </textarea>
  </div>
  <button className='bg-accent p-2 px-6 rounded-lg'>Send</button>
</div>
</div>
</div>
  )
}

export default Contact;