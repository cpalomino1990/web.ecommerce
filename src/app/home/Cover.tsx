'use client'
import { Image } from '@heroui/react'
import React from 'react'

const Cover = () => {
    return (
        <div className='flex gap-10 w-full'>
            <div className='flex w-full justify-center items-center'>
                <Image
                    alt='iamge'
                    className=''
                    src='/images/cover.png'
                    width={600}
                >

                </Image>
            </div>

            <div className='w-full flex flex-col justify-center items-center'>
                <p className='text-6xl font-bold'>New Arrival</p>
                <p className='text-3xl font-bold'>70% off this winter</p>
                <p className='text-xl mt-5 px-20 '>Lorem Ipsum has been the industrys it to makved not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>

        </div>
    )
}

export default Cover