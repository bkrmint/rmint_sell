import React from 'react'
import { success_story1, success_story2 } from '../assets/images'

const Success = () => {
  return (
      <div className='max-container flex flex-col items-center justify-center'>
        <h2 className='text-4xl max-sm:text-3xl text-gray font-publicsans font-bold text-center max-sm:leading-tight'>
          Success Stories
        </h2>
        <div className='max-sm:hidden overflow-hidden w-3/4 flex flex-col md:flex-row items-center justify-center padding-y gap-12'>
          <img src={success_story1} alt="success_story1" width={300} height={323} className='max-w-full'/>
          <img src={success_story2} alt="success_story2" width={300} height={323} className='max-w-full'/>
          <img src={success_story2} alt="success_story2" width={300} height={323} className='max-w-full'/>
        </div>
        <div className='sm:hidden w-3/4 flex flex-col items-center justify-center padding-y'>
          <img src={success_story2} alt="success_story2" />
        </div>
      </div>
  )
}

export default Success