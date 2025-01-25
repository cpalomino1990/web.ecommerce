'use client'
import { useStoreContext } from "@/context/home.context";
import { auth } from "@/lib/auth";
import { Button, Card, CardBody, Divider, Image, } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const CheckoutPage = () => {

  const { cart, removeFromCart, getCartTotal } = useStoreContext();
  const router = useRouter();
  const [user] = useAuthState(auth);

  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });



  const handlePayment = () => {

    if (!user) {
      router.push("/login?return=payment")
    } else {
      router.push("/home/payment")
    }
  }


  if (cart.length == 0) {

    return (
      <div className="flex flex-col items-center justify-center w-full px-32 py-20">
        <Card shadow="none" className="w-2/4 bg-pink-50 flex justify-center border-1 border-pink-100 p-20">
          <div className="flex  gap-5 flex-col w-full items-center">
            <Icon className="text-primary opacity-30" style={{ fontSize: "200px" }} icon="mdi:cart-off"></Icon>
            <p className="text-2xl text-gray-400">   There are  no items in the cart</p>
            <Button color="primary">Go to Store</Button>
          </div>
        </Card>

      </div>
    )
  }



  return (

    <div className="flex flex-col w-full  px-32 py-20 gap-1">
      <h2 className="text-3xl flex font-semibold mb-10  text-pink" > Cart Items</h2>

      <div className="flex w-full gap-10">

        <Card className="flex flex-col w-full px-10">
          {/* Resumen del Pedido */}
          <div className=" p-6 w-full ">
            <h3 className="text-xl font-semibold mb-8">Resumen del Pedido</h3>

            <div className="grid grid-cols-12 w-fullmb-10 pb-10 font-bold">
              <p className="col-span-2" ></p>
              <p className="col-span-5">Product</p>
              <p className="col-span-2 justify-center flex">Quantity</p>
              <p className="col-span-2  flex">Sub-total</p>
              <p></p>
            </div>

            {/*  TABLE BODY */}

            {
              cart.map((item) => (
                <div key={item.id}>
                  <div className="grid w-full gap-5 items-center grid-cols-12 ">
                    <div className="col-span-2 w-full justify-center flex" >
                      <Image
                        src={item.imageUrl || '/images/empty-img.png'} // Asegúrate de tener una propiedad 'image' en cada producto
                        alt='Leather Handbag'
                        // height={100}
                        width={100}
                        height={150}
                        className="border flex justify-center items-center h-full w-full  object-contain rounded-md"
                      />
                    </div>
                    <p className="col-span-5 text-lg">{item.name}</p>
                    <p className="col-span-2 justify-center flex font-bold text-md">{item.quantity}</p>
                    <p className="col-span-2 font-bold text-lg">{`$ ${item.price}`}</p>
                    <div>
                      <Button onPress={() => removeFromCart(item.id)} color="danger" variant="bordered" isIconOnly aria-label="Like">
                        <Icon className="text-lg" icon="fluent:delete-28-filled" />
                      </Button>
                    </div>
                  </div>
                  <Divider className="my-5" />
                </div>

              ))
            }
          </div>
        </Card>

        <div className="flex">
          <Card className="w-80 h-72">
            <CardBody className="p-5 flex gap-2 flex-col w-full">


              <div className="flex w-full justify-between">
                <p className="text-lg">Sub-total</p>
                <p className="text-lg ">{USDollar.format(getCartTotal())}</p>
              </div>

              <div className="flex w-full justify-between">
                <p className="text-lg">Taxes</p>
                <p className="text-lg ">$ 0</p>
              </div>


              <div className="flex w-full justify-between">
                <p className="text-xl font-bold">Total</p>
                <p className="text-xl font-bold">{USDollar.format(getCartTotal())}</p>
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
    </div >



  );
};

export default CheckoutPage;

