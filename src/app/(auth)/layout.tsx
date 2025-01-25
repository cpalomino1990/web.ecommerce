'use client'
import { Image } from '@heroui/react';
import React from 'react'

const LayoutAuth = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex  justify-center items-center h-screen bg-purple-100">
            <div className='flex items-center h-screen justify-center w-full bg-[#e7cdff]'>
                <Image alt='image' src='/images/ecommerce.png'
                    height={600}>
                </Image>
            </div>
            <div className="flex w-full justify-center">
                {children}
            </div>
        </div>
    )
}

export default LayoutAuth