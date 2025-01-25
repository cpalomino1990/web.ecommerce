'use client'
import { Button } from '@heroui/react'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, Image, Tab, Tabs } from "@heroui/react";

const ProductDetailPage = () => {

    const product = {
        id: '1',
        description: 'Leather Handbag',
        price: 120.99,
        category: 'Accessories',
        image: 'https://static.dafiti.com.co/p/mp-1841-5786842-1-zoom.jpg'
    }

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
                            src="https://heroui.com/images/hero-card-complete.jpeg"
                            width="100%"
                            height="100%"
                        />

                    </Card>
                </div >

                <div className='w-full flex flex-col gap-3 text-gray-700' >

                    <p className='text-4xl '>{product.description}</p>


                    <p className='text-2xl font-bold '>{product.price}</p>


                    <p className='text-lg '>sdfsdf sd fsd fsd fsd fs df sdf sdf sdf sdf sd fsdfsdf</p>

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

