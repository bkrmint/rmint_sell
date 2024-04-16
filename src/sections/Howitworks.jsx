import React from 'react'
import { sell_section3_puzzle, sell_section3_steps } from '../assets/images';

const Howitworks = () => {
  return (
    <section className='max-container flex flex-col flex-1 items-center justify-center'>
      <h2 className='max-sm:text-3xl text-4xl text-gray font-publicsans font-bold text-center max-sm:leading-tight'>
        How does it work
      </h2>
      <div className='padding-t md:w-2/3 flex items-center justify-center '>
        <video autoPlay muted loop>
          <source src={sell_section3_puzzle} type="video/mp4" />
        </video>
      </div>
      <div className='padding-t md:w-3/5 flex items-center justify-center'>
        <img src={sell_section3_steps} alt="sell_section3_steps" />
      </div>
    </section>
  )
}

export default Howitworks