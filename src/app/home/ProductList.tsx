
import React from 'react'
import ProductItem from './ProductItem';
import { Product } from '@/models/product';


const ProductList = ({ products }: { products: Product[] }) => {

    // const products: Product[] = [
    //     {
    //         id: '1',
    //         description: 'Leather Handbag',
    //         price: 120.99,
    //         category: 'Accessories',
    //         image: 'https://static.dafiti.com.co/p/mp-1841-5786842-1-zoom.jpg'
    //     },
    //     {
    //         id: '2',
    //         description: 'Elegant Silk Scarf',
    //         price: 49.99,
    //         category: 'Accessories',
    //     },
    //     {
    //         id: '3',
    //         description: 'Casual Cotton T-Shirt',
    //         price: 19.99,
    //         category: 'Clothing',
    //     },
    //     {
    //         id: '4',
    //         description: 'High-Waisted Jeans',
    //         price: 39.99,
    //         category: 'Clothing',
    //     },
    //     {
    //         id: '5',
    //         description: 'Moisturizing Face Cream',
    //         price: 25.0,
    //         category: 'Personal Care',
    //     },
    //     {
    //         id: '6',
    //         description: 'Aromatic Body Lotion',
    //         price: 15.5,
    //         category: 'Personal Care',
    //     },
    //     {
    //         id: '7',
    //         description: 'Comfortable Pajama Set',
    //         price: 35.0,
    //         category: 'Sleepwear',
    //     },
    //     {
    //         id: '8',
    //         description: 'Fluffy Slippers',
    //         price: 20.0,
    //         category: 'Footwear',
    //     },
    //     {
    //         id: '9',
    //         description: 'Running Sneakers',
    //         price: 65.0,
    //         category: 'Footwear',
    //     },
    //     {
    //         id: '10',
    //         description: 'Woolen Night Robe',
    //         price: 55.0,
    //         category: 'Sleepwear',
    //     },
    // ];


    return (
        <div className=' w-full gap-10 grid grid-cols-4 px-32'>
            {
                products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))
            }
        </div>
    )
}

export default ProductList