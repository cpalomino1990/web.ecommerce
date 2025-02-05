'use client'

import { Button, Card, CardBody, CardFooter, Image } from '@heroui/react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '@/models/product'
import { useStoreContext } from '@/context/home.context'

const ProductItem = ({ product }: { product: Product }) => {

    const { addToCart } = useStoreContext();

    const router = useRouter();

    const handleAddToCart = () => {
        addToCart(
            {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                imageUrl: product.imageUrl
            }
        )
    }

    return (
        <div className="flex flex-col">
            <Card className="hover:scale-105" shadow="sm">
                <CardBody className="overflow-visible p-0 transition duration-150 ease-in-out">
                    <Image
                        onClick={() => { router.push(`home/products/${product.id}`) }}
                        alt={product.description}
                        className="cursor-pointer w-full object-contain h-[140px] sm:h-[200px] md:h-[250px] lg:h-[300px]"  // Responsive height
                        radius="lg"
                        shadow="sm"
                        height={400}
                        src={product.imageUrl || '/images/no-image.png'}
                        width="100%"
                    />
                </CardBody>
                <CardFooter className="text-small bg-pink-50 flex-col justify-between gap-3 p-3">
                    <div className="flex flex-col sm:flex-row justify-center w-full gap-2">
                        <p className="text-xl text-ellipsis w-full sm:w-auto truncate">{product.name}</p>
                    </div>
                    <b className="text-default-500 text-lg">{`$ ${product.price}`}</b>
                    <div className="flex justify-between w-full gap-3 mt-3">
                        <Button onPress={() => handleAddToCart()} color="primary" className="w-full ">
                            Add to cart
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ProductItem