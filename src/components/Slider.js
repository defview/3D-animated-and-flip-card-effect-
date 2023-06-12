import React from 'react'
import NBA from '../img/lakers1.webp'
import Bball from '../img/bucks1.webp'
import Profile from '../img/pr1.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


export const Slider = () => {
  return (
    <div className='group h-full w-full max-h-[630px] max-w-[1000px] [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500
        [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='absolute inset-0'>
                <Carousel
                 autoPlay
                 infiniteLoop
                 showStatus={false}
                 //showIndicators={false}
                 showThumbs={false}
                 interval={4000}
                >
                    <div>
                        <img 
                        loading='lazy'
                        className='h-full w-full max-h-[630px] max-w-[2000px] object-cover rounded-xl shadow-xl shadow-black/40' 
                        src={NBA}
                        alt=''
                        />
                    </div>
                    <div>
                        <img 
                        loading='lazy'
                        className='h-full w-full max-h-[630px] max-w-[2000px] object-cover rounded-xl shadow-xl shadow-black/40'
                        src={Bball}
                        alt=''
                        />
                    </div>
                </Carousel>
                <div className='absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center'>
                    <div className='space-y-3'>
                        <div className='w-full h-[45px] max-w-fit bg-gray-800/50 rounded-lg
                        space-x-4 flex text-center items-center pr-5'>
                        <img
                        className='w-[45px] h-[45px] rounded-full drop-shadow-xl overflow-hidden'
                        src={Profile}
                        alt=''
                        />
                        <p className='text-lg text-[#E5E4E2] text-center font-medium hover:underline cursor-pointer'>Write up by Fola Alex</p>
                        </div>
                        <div>
                            <text className='text-2xl text-[#E5E4E2] font-semibold'>. Basketball - NBA</text>
                        </div>
                    </div>
                    <div className='text-[#E5E4E2] flex flex-col text-3xl'>
                        <span>3</span>
                        <span>DEC</span>
                    </div>
                </div>

                <div className='absolute bottom-0 right-0 left-0 mx-5 mb-20 text-[#E5E4E2]'>
                    <p className='text-5xl tracking-widest leading-loose font-semibold'>Bucks 129 - 133 Lakers</p>
                    <p className='text-base tracking-wider font-medium leading-relaxed'>#Giannis Antetokounmpo #Anthony Davis #Lakers #Bucks</p>
                </div>
            </div>
            <div className='absolute inset-0 h-full w-full rounded-xl top-0 right-0 bottom-0 left-0 
            px-12 text-[#E5E4E2] bg-gradient-to-b from-transparent via-[#00471B]/60 to-[#F6C02B]/60
            [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                <div className='-mx-5 mt-[300px] mb-20'>
                    <div>
                        <p className='text-xl tracking-widest leading-loose font-semibold cursor-pointer'>Bucks 129 - 133 Lakers</p>
                        <p className='text-xs tracking-wider font-medium leading-relaxed mb-3'>#Giannis Antetokounmpo #Anthony Davis #Lakers #Bucks</p>
                        <p className='text-2xl tracking-wide font-semibold leading-snug'>Write up by Fola Alex</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
