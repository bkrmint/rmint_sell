import React from 'react'
import Button from '../components/Button'

const Signup = () => {
  return (
    <section>
      <div className='flex flex-1 flex-col items-center justify-center '>
        <h2 className='max-sm:text-3xl text-4xl text-gray font-publicsans font-bold text-center max-sm:leading-tight'>
          Partner with <br/> 
          <span className='inline-block bg-gradient-to-r from-red  to-[#843199] text-transparent bg-clip-text'>Your Gen AI</span>
        </h2>
        <h3 className='text-2xl font-publicsans text-gray font-bold text-center max-sm:leading-tight py-6'>
          <span className='font-kalam text-red '>Extend</span> your know, like, trust cycle to restaurant chain
        </h3>
        <Button btnText={"Upload"} />
      </div>
    </section>
  )
}

export default Signup