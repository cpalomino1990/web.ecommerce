
import React from 'react'
import Cover from './Cover'
import ProductList from './ProductList'
import { getProducts } from '@/lib/products'


const HomePage = async () => {

    const response = await getProducts();

    return (
        <div className='flex flex-col gap-32 h-full'>
            <Cover />
            <ProductList products={response.data} />
        </div>
    )
}

export default HomePage