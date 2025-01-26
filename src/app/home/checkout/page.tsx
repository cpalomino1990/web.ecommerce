'use client'

import { useStoreContext } from "@/context/home.context";
import { Button, Card, CardBody, Divider, Image, } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const CheckoutPage = () => {

  const { cart, removeFromCart } = useStoreContext();
  const [subTotal, setSubTotal] = useState<number>(0);
  const router = useRouter();

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const subTotale = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setSubTotal(subTotale);
  }, [cart])

  const handlePayment = () => {
    router.push("/login?return=payment")
  }


  if (cart.length == 0) {

    return (
      <div className="px-10 py-10 flex flex-col  items-center justify-center w-full md:px-32 md:py-20">
        <Card shadow="none" className="md:w-2/4 bg-pink-50 flex justify-center border-1 border-pink-100 p-20">
          <div className="flex  gap-5 flex-col w-full items-center">
            <Icon className="text-primary opacity-30" style={{ fontSize: "200px" }} icon="mdi:cart-off"></Icon>
            <p className="text-2xl text-gray-400">   There are  no items in the cart</p>
            <Button onClick={() => router.push("/home")} color="primary">Go to Store</Button>
          </div>
        </Card>

      </div>
    )
  }



  return (

    <div className="flex flex-col w-full px-5 py-10 gap-5 sm:px-8 lg:px-32 lg:py-20">
      <h2 className="text-3xl font-semibold mb-10 text-pink">Checkout</h2>

      <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-10">

        {/* Resumen del Pedido */}
        <Card className="flex flex-col w-full px-5 sm:px-10">
          <div className="p-6 w-full">
            <h3 className="text-xl font-semibold mb-8">Resumen del Pedido</h3>

            <div className="hidden md:grid grid-cols-12 w-full mb-10 pb-10 font-bold text-sm sm:text-base">
              <p className="col-span-2"></p>
              <p className="col-span-5">Product</p>
              <p className="col-span-2 justify-center flex">Quantity</p>
              <p className="col-span-2 flex">Sub-total</p>
              <p></p>
            </div>

            {/* TABLE BODY */}
            {cart.map((item) => (
              <div key={item.id}>
                <div className="grid w-full gap-5 items-center grid-cols-12">
                  <div className="col-span-12 md:col-span-2 w-full justify-center flex">
                    <Image
                      src={item.imageUrl || '/images/empty-img.png'}
                      alt="Leather Handbag"
                      width={100}
                      height={150}
                      className="border flex justify-center items-center h-full w-full object-contain rounded-md"
                    />
                  </div>
                  <p className="col-span-12 md:col-span-5 text-lg">{item.name}</p>
                  <p className="flex col-span-6 md:col-span-2 justify-start md:justify-center md:hidden font-bold text-md">Quantity</p>
                  <p className="col-span-6 md:col-span-2 justify-center flex font-bold text-md">{item.quantity}</p>
                  <p className="col-span-6 md:col-span-2 font-bold text-lg">{`$ ${item.price}`}</p>
                  <div>
                    <Button onPress={() => removeFromCart(item.id)} color="danger" variant="bordered" isIconOnly aria-label="Like">
                      <Icon className="text-lg" icon="fluent:delete-28-filled" />
                    </Button>
                  </div>
                </div>
                <Divider className="my-5" />
              </div>
            ))}
          </div>
        </Card>

        {/* Total Section */}
        <div className="flex w-full md:w-96">
          <Card className="w-full h-80">
            <CardBody className="p-5 flex gap-5 flex-col w-full">
              <div className="flex w-full justify-between">
                <p className="text-lg">Sub-total</p>
                <p className="text-lg">{USDollar.format(subTotal)}</p>
              </div>

              <div className="flex w-full justify-between">
                <p className="text-lg">Taxes</p>
                <p className="text-lg">$ 0</p>
              </div>

              <div className="flex w-full justify-between">
                <p className="text-xl font-bold">Total</p>
                <p className="text-xl font-bold">{USDollar.format(subTotal)}</p>
              </div>

              <div className="gap-3 flex flex-col pt-10">
                <Button color="secondary" onPress={() => handlePayment()} className="w-full">
                  Proceed to payment
                </Button>

                <Button color="primary" className="w-full">
                  Continue buy
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>

      </div>
    </div>



  );
};

export default CheckoutPage;

