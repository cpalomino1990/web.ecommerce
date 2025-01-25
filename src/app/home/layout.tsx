import React from 'react'
import NavarTop from './NavarTop';
import StoreProvider from '@/providers/StoreProvider';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <StoreProvider>
            <div className='h-screen bg-[#f9fbfc]'>
                <NavarTop />

                <div>{children}</div>
            </div>
        </StoreProvider>
    )
}

export default layout