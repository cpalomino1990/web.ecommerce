'use client'
import { Image } from '@heroui/react'
import React from 'react'

const Cover = () => {

return (
    <div className='flex flex-col lg:flex-row gap-10 w-full px-4 lg:px-20'>
        <div className='flex w-full justify-center items-center'>
            <Image
                alt='image'
                className='object-contain'
                src='/images/cover.png'
                width={800}
                height={600} // Optional: add height for better aspect ratio control
            />
        </div>

        <div className='w-full flex flex-col justify-center items-center '>
            <p className='text-3xl sm:text-4xl lg:text-6xl font-bold '>New Arrival</p>
            <p className='text-2xl sm:text-3xl lg:text-3xl font-bold'>70% off this winter</p>
            <p className='text-lg sm:text-xl mt-5 px-6 sm:px-10 lg:px-20'>
                Lorem Ipsum has been the industrys it to makved not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
    </div>
    )
}

export default Cover