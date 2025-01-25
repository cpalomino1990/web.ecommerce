'use client'
import React from 'react'
import Cover from './Cover'
import ProductList from './ProductList'


const HomePage = () => {


    return (
        <div className='flex flex-col gap-32 h-full'>
            <Cover />
            <ProductList />
        </div>
    )
}

export default HomePage