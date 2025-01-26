'use client'
import { useStoreContext } from '@/context/home.context'
import { auth } from '@/lib/auth'
import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@heroui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

const PaymentPAge = () => {

    const [user] = useAuthState(auth);
    const { cart, getCartTotal } = useStoreContext();

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="flex flex-col w-full  px-32 py-20 gap-1">
            <h2 className="text-3xl flex font-semibold mb-10  text-pink" > Payment</h2>


            <div className='flex w-full gap-5'>

                <div className='flex w-full'>
                    <Accordion selectedKeys="all" selectionMode="multiple" variant="splitted">
                        <AccordionItem className='font-bold flex flex-col w-full ' key="1" aria-label="Accordion 1" title="Dirección">

                            <div className='flex w-full justify-between px-10 py-5'>

                                <div className='w-full'>
                                    <p className=' font-bold'>Dirección de entrega</p>
                                    <p className=' w-full font-normal'>{user?.displayName}</p>
                                    <p className=' w-full font-normal'>Calle 9G #131-80</p>
                                    <p className=' w-full font-normal'>Barranquilla - Atlántico</p>
                                    <p className=' w-full font-normal'>333 345 34 32</p>
                                </div>
                                <div className='w-full'>
                                    <p className=' font-bold'>Dirección de facturación</p>
                                    <p className=' w-full font-normal'>{user?.displayName}</p>
                                    <p className=' w-full font-normal'>Calle 9G #131-80</p>
                                    <p className=' w-full font-normal'>Barranquilla - Atlántico</p>
                                    <p className=' w-full font-normal'>333 345 34 32</p>
                                </div>

                            </div>

                        </AccordionItem>
                        <AccordionItem className='font-bold' key="2" aria-label="Accordion 2" title="Método de envío">
                            <div className='flex w-full justify-between px-10 py-5'>
                                <p> Standard Delivery</p>

                            </div>
                        </AccordionItem>
                        <AccordionItem className='font-bold ' key="3" aria-label="Accordion 3" title="Método de pago">
                            <div className='flex w-full justify-between px-10 py-5'>
                                <p> Pago PSE - Bank Account</p>

                            </div>
                        </AccordionItem>
                    </Accordion>
                </div>



                <div className='flex'>

                    <Card className='w-96 py-3 px-3 ' >
                        <CardHeader>  <p className="text-xl flex font-semibold  text-pink" > Summary</p></CardHeader>
                        <CardBody className='h-96'>
                            {
                                cart.map((item) => (
                                    <div key={item.id} className='flex flex-col gap-1'>
                                        <p>{item.name}</p>
                                        <p>{`$ ${item.price}`}</p>
                                        <p>  {`Quantity: ${item.quantity}`} </p>
                                        <Divider className='my-2' />
                                    </div>
                                )

                                )
                            }

                        </CardBody>

                        <CardFooter className='mt-5 flex flex-col w-full gap-2'>
                            <div className='bg-pink-50 w-full rounded-lg p-3 my-3'>
                                <div className="flex w-full justify-between">
                                    <p className="text-lg">Sub-total</p>
                                    <p className="text-lg ">{USDollar.format(getCartTotal())}</p>
                                </div>

                                <div className="flex w-full justify-between">
                                    <p className="text-lg">Taxes</p>
                                    <p className="text-lg ">$ 0.00</p>
                                </div>

                                <div className="flex w-full justify-between">
                                    <p className="text-lg">Envío</p>
                                    <p className="text-lg ">$ 0.00</p>
                                </div>

                                <div className="flex w-full justify-between">
                                    <p className="text-xl font-bold">Total</p>
                                    <p className="text-xl font-bold">{USDollar.format(getCartTotal())}</p>
                                </div>
                            </div>
                            <Button size='lg' className='w-full' color='secondary'>Complete Pay</Button>
                        </CardFooter>


                    </Card>


                </div>

            </div>
        </div>
    </div >
      )

}

export default PaymentPAge