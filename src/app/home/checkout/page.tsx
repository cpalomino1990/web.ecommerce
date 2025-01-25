'use client'
import { Card } from '@heroui/react'

import React from 'react'

const CheckoutPage = () => {
    return (
        <div className='flex w-full  px-80 pt-32'>


            <div className='flex flex-col gap-5 w-full '>

                <div className='flex w-full flex-col gap-3'>
                    <div className='grid w-full grid-cols-12 font-bold'>

                        <p className='col-span-5'>Products</p>
                        <p className='col-span-2'>Price</p>
                        <p className='col-span-2'>Quantity</p>
                        <p className='col-span-2'>Subtotal</p>
                        <p></p>

                    </div>

                    {/* PRODUCTS */}
                    <div className='grid w-full grid-cols-12'>


                        <p className='col-span-5'>
                            Zapatos Nikes
                        </p>
                        <p>$ 24.54</p>
                        <p>2</p>
                        <p>1,680...</p>
                        <p></p>

                    </div>



                </div>

            </div>

            <div className='w-full flex flex-1'>
                <Card className='w-80  p-7' shadow='lg'>

                    sdfdsfsd
                </Card>
            </div>
        </div>)
}

export default CheckoutPage