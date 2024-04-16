import React from 'react'
import { sell_section2, sell_section2_stack, sell_section2_monetize_ai, sell_section2_rev_share, sell_section2_thru_tokens } from '../assets/images';

const Customers = () => {
  return (
    <section className='max-container'>
      <div className='flex flex-1 flex-col items-center justify-center' >
        <h2 className='text-4xl max-sm:text-3xl text-gray font-publicsans font-bold text-center max-sm:leading-tight'>
        Turn your audience into <span className='text-red font-kalam'>customers</span>
        </h2>
        <div className='md:w-1/2 flex flex-col items-center justify-center padding-y'>
          {/* <img src={sell_section2_thru_tokens} alt="sell_section2_thru_tokens" />
          <img src={sell_section2_monetize_ai} alt="sell_section2_thru_tokens" />
          <img src={sell_section2_rev_share} alt="sell_section2_thru_tokens" /> */}
          <img src={sell_section2_stack} alt="sell_section2_thru_tokens"
          className='w-4/5' />

        </div>
        <div className='relative flex items-center justify-center md:w-3/4'>
          <img src={sell_section2} alt="sell_section2" />
        </div>

      </div>

    </section>
  )
}

export default Customers