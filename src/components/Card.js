import React from 'react'
import NikeImg from '../img/Nike3.png'
import logo from '../img/Nikelogo.png'
import { useMotionValue, useTransform, motion } from 'framer-motion'

export const Card = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(y, [-100, 100], [-30, 30]);

    const colors = [
        /*{value: '#9DB4D2'},*/
        {value: '#52556D'},
        {value: '#D6D4E0'},
        {value: '#050407'},
        {value: '#F6C02B'},
        {value: '#D2554F'},
    ]
    
  return (
    <div style={{perspective: 2000}}>
        <motion.div 
        style={{x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
        whileTop={{ cursor: 'grabbing' }}
        className='w-[426px] min-h-[600px] bg-[#E5E4E2] rounded-[30px]
        border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'>

            <div className='mb-6 w-[75px] '>
                <img src={logo} alt='' className='object-cover' />
            </div>
            <div className='text-5xl mb-6 font-extrabold'>Nike Air Max 270. Pre-Day</div>
            <p className='max-w-[300px] text-[#000000] text-base font-semibold mb-6 leading-relaxed tracking-wide'>
                The Nike Air Max Pre-Day is a contemporary lifestyle shoe silhouette with 
                futuristic and retro-inspired details</p>

            <div className='flex items-center gap-x-[20px] mb-10'>
                <button className='bg-[#2d2b2c] text-white text-base font-medium
                py-[16px] px-[40px] rounded-lg'>Take Home</button>
                <div className='text-[24px] font-bold text-[#000000]'>$495.00</div>
            </div>

            <ul className='flex space-x-3'>
                {colors.map((color, index) => {
                    return (
                        <li
                            key={index}
                            style={{ backgroundColor: color.value}}
                            className="w-8 h-8 rounded-full cursor-pointer">
                        </li>
                    )
                })}
            </ul>

            <motion.div 
            style={{x, y, rotateX, rotateY, z: 10000 }}
            className='absolute top-72 -right-60 w-[625px] rotate-6'>
                <img src={NikeImg} alt='' draggable='false' />
            </motion.div>
        </motion.div>
    </div>
  )
}
