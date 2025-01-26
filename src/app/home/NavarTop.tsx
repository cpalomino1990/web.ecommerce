'use client'
import { auth } from '@/lib/auth'
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import { ShoppingCartIcon } from '@/components/Icon'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useStoreContext } from '@/context/home.context'

const NavarTop = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();

    const { getCartCount } = useStoreContext();

    return (
        <Navbar position='sticky' className='bg-white'>
            <NavbarBrand onClick={() => router.push('/home')}>
                <p className="text-primary cursor-pointer hover:text-secondary font-bold text-4xl text-inherit">
                    Lisa
                </p>
            </NavbarBrand>

            <NavbarContent as="div" justify="end">
                {
                    user ?
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <div className='flex gap-2 items-center text-primary'>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="primary"
                                        name={""}
                                        size="sm"
                                        src={user.photoURL || ""}
                                    />
                                    <p className=''>{user.displayName}</p>
                                </div>


                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">{user.email}</p>
                                </DropdownItem>
                                <DropdownItem onPress={() =>
                                    signOut(auth)} key="logout" color="danger">
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown> : <Button onPress={() => router.push('/login')} color='primary'>
                            Sign in
                        </Button>
                }
            </NavbarContent>
            <button
                className="hover:bg-slate-200/20 rounded-full p-2 text-white flex items-center gap-1 "
                onClick={() => router.push("/home/checkout")}
            > <div className='text-primary cursor-pointer '  ><ShoppingCartIcon /></div>
                <span className=" bg-secondary p-1 text-xs  w-6 h-6 rounded-[50%] ">
                    {getCartCount()}
                </span>
            </button>
        </Navbar >)
}

export default NavarTop


