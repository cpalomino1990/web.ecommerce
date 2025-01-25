'use client'

import { Button, Card, CardBody, CardFooter, Image } from '@heroui/react'
import React from 'react'
import { Product } from './ProductList'
import { useRouter } from 'next/navigation'

const ProductItem = ({ product }: { product: Product }) => {

    const router = useRouter();


    return (
        <div className='flex flex-col'>
            <Card className='hover:scale-105' shadow="sm" >
                <CardBody className="overflow-visible p-0">
                    <Image
                        onClick={() => { router.push(`home/products/${product.id}`) }}
                        alt={product.description}
                        className="cursor-pointer w-full object-cover h-[140px]"
                        radius="lg"
                        shadow="sm"
                        height={400}
                        src={product.image || '/images/empty-img.png'}
                        width="100%"
                    />
                </CardBody>
                <CardFooter className="text-small flex-col justify-between gap-3">

                    <div className="flex flex-row w-full justify-between">
                        <p className='text-xl'>{product.description}</p>
                        <b className="text-default-500">{product.price}</b>
                    </div>

                    <div className='flex justify-between w-full gap-3'>

                        <Button color='primary' className='w-full'>Buy</Button>
                        <Button color='secondary' className='w-full'>Add to cart</Button>



                    </div>

                </CardFooter>

            </Card>

        </div>

    )
}

export default ProductItem