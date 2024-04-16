import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
 
import { sell_web_hero, sell_mobile_hero } from '../assets/images'
import Button from '../components/Button';

const Hero = () => {
  const saltRef = useRef(null);
  const sellRef = useRef(null);

  useGSAP( () => {
    const tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 1});

    tl.fromTo(saltRef.current, {autoAlpha: 1}, {autoAlpha: 0 , duration: 4})
    .fromTo(sellRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: 4, delay: 2}, 0)

  }, [])


  return (
    <section className="w-full flex flex-col justify-center items-center min-h-screen max-container">
      <div className="relative flex flex-col justify-center items-center max-xl:padding-x pt-6 max-sm:pb-16">
        <div className='max-md:hidden flex w-3/4'>
          <video autoPlay muted loop>
            <source src={sell_web_hero} type="video/mp4" />
          </video>
        </div>
        <div className='md:hidden mt-6'>
          <video autoPlay muted loop>
            <source src={sell_mobile_hero} type="video/mp4" />
          </video>
        </div>
        {/* <div className='relative inline-block items-center justify-center '>
          <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-6xl max-sm:text-4xl max-sm:leading-none font-bold text-center">
            <div className=' items-baseline gap-2'>
              <span ref={saltRef} className='font-kalam text-red'>Salt </span>
              <span ref={sellRef} className='absolute top-7 text-red font-kalam'>Sell </span>
              <span className='relative'> your content for</span>
            </div>
            <br/>
              <span className='text-red font-kalam inline-flex items-center'>Real Experiences</span>
          </h1>
        </div> */}
        <div className='relative flex items-center justify-center'>
          <h1 className="mt-6 font-publicsans xl:text-7xl lg:text-6xl md:text-6xl text-4xl max-sm:leading-none font-bold text-center">
            <span>
                <span className='font-kalam text-red'>Sell</span> your content for
            </span>
            <br/>
            <span className='text-red font-kalam'>
              Real Experiences
            </span>
          </h1>
        </div>

        <div className='flex flex-row items-center justify-center gap-4 mt-8'>
          <Button btnText={"Upload"} />
          <Button btnText={"Counts"}/>
        </div>
      </div>
    </section>
  )
}

export default Hero