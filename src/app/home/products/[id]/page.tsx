'use client'
import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, Image, Tab, Tabs } from "@heroui/react";
import { Product } from '@/models/product';
import { getProduct } from '@/lib/products';
import { useParams } from 'next/navigation';

const ProductDetailPage = () => {

    const [product, setProduct] = useState<Product | null>(null)
    const { id } = useParams();


    useEffect(() => {

        const fetchProduct = async () => {
            const fecthedProduct = await getProduct(id ? id.toString() : "");
            setProduct(fecthedProduct.data);
        }
        fetchProduct();
        return () => { }
    }, [])




    const colors = ["danger"];

    return (
        <div className='flex flex-col gap-5  px-80 pt-32'>

            <Button className='w-32' radius='full' color="danger" startContent={<Icon icon="mingcute:arrow-left-fill" />} variant="bordered">
                <a href='/home'>
                    Back
                </a>
            </Button>

            <div className='flex flex-row gap-7'>

                < div className='w-full' >
                    <Card shadow='lg' className="">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={product?.imageUrl || '/images/empty-img.png'}
                            width="100%"
                            height="100%"
                        />

                    </Card>
                </div >

                <div className='w-full flex flex-col gap-3 text-gray-700' >

                    <p className='text-4xl '>{product?.name}</p>


                    <p className='text-2xl font-bold '> {`$ ${product?.price}`}</p>


                    <p className='text-lg '>{product?.description}</p>

                    <div className="flex flex-wrap gap-4">
                        {colors.map((color) => (
                            <Tabs key={color} aria-label="Tabs colors" color={'danger'} radius="full">
                                <Tab key="SX" title="SX" />
                                <Tab key="S" title="S" />
                                <Tab key="M" title="M" />
                                <Tab key="L" title="L" />
                                <Tab key="XL" title="XL" />
                            </Tabs>
                        ))}
                    </div>
                    <div className='flex ' >
                        <Button className='mr-12  ' color='primary'>Add to Cart</Button>
                        <Button color='secondary'>Buy</Button>
                    </div>
                </div>
            </div >
        </div>

    );
}


export default ProductDetailPage

