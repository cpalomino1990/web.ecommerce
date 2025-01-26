'use client'
import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';
import { Card, Image, Tab, Tabs } from "@heroui/react";
import { Product } from '@/models/product';
import { getProduct } from '@/lib/products';
import { useParams, useRouter } from 'next/navigation';
import { useStoreContext } from '@/context/home.context';

const ProductDetailPage = () => {

    const [product, setProduct] = useState<Product | null>(null)
    const { id } = useParams();
    const router = useRouter();
    const { addToCart } = useStoreContext();

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product.id,
                name: product.name,
                quantity: 1,
                price: product.price,
                imageUrl: product.imageUrl
            })
        }
    }

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
        <div className='flex flex-col gap-5 px-4 pt-32 md:px-10 lg:px-32 xl:px-80'>

            <Button onPress={() => router.push('/home')} className='w-32' radius='full' color="danger" startContent={<Icon icon="mingcute:arrow-left-fill" />} variant="bordered">
                Back
            </Button>

            <div className='flex flex-col lg:flex-row gap-7'>

                <div className='w-full lg:w-1/2'>
                    <Card shadow='lg'>
                        <Image
                            alt="Card background"
                            className="object-contain rounded-xl"
                            src={product?.imageUrl || '/images/no-image.png'}
                            width="100%"
                            height={700}
                        />
                    </Card>
                </div>

                <div className='w-full lg:w-1/2 flex flex-col gap-3 text-gray-700'>
                    <p className='text-3xl sm:text-4xl'>{product?.name}</p>
                    <p className='text-xl sm:text-2xl font-bold'>{`$ ${product?.price}`}</p>
                    <p className='text-base sm:text-lg'>{product?.description}</p>

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

                    <div className='flex mt-5 mb-10'>
                        <Button onPress={() => handleAddToCart()} className='w-full' color='primary'>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage