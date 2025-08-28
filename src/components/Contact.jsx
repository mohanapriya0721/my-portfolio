import React from 'react'

const Contact = () => {
  return (
    <section id='Contact' className='flex flex-col bg-black text-white px-5 py-16'>
      <div className='flex flex-col items-center'>
      <h1 className='text-3xl border-b-2 border-blue-500 mb-5 w-[200px] font-bold hover:text-blue-400 '>CONTACT NO</h1>
      <p className='pb-5'>For more details,Kindly contact me.</p>
      <a href='mailto:mohanapriya.srinivasan2004@gmail.com' className='py-2 hover:text-blue-300'><span className='font-bold'>Email:</span>mohanapriya.srinivasan2004@gmail.com</a>
      <p className='py-2 hover:text-blue-300'><span className='font-bold '>Phone:</span> 9360657948</p>
      </div>
    </section>
    
  )
}

export default Contact
