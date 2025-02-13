
import React from 'react'
import Cover from './Cover'
import ProductList from './ProductList'
import { getProducts } from '@/lib/products'
import Script from 'next/script'


const HomePage = async () => {

    const response = await getProducts();

    return (
        <div className='flex flex-col gap-32 h-full'>
            <Script 
                src="https://magnificent-jelly-28a3f8.netlify.app/dist/widget.js"
                strategy="beforeInteractive" 
                    />
            <Cover />
            <ProductList products={response.data} />
        </div>
    )
}

export default HomePage

