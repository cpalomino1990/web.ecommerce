import React from 'react'
import NavarTop from './NavarTop';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='h-screen bg-[#f9fbfc]'>
            <NavarTop />
            <div>{children}</div>
        </div>

    )
}

export default layout