'use client'
import { signInWithEmailPassword, signInWithGoogle } from '@/lib/auth'
import { Alert, Button, Input, } from '@heroui/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const LoginPage = () => {

    const [error, setError] = useState<string>();
    const router = useRouter()
    const searchParams = useSearchParams();

    const onSubmit = async (data: { email: string; password: string }) => {

        try {
            const userId = await signInWithEmailPassword(data.email, data.password);
            sessionStorage.setItem('userId', userId);

            if (searchParams.get('return') === "payment") {
                router.push('/home/payment')
            } else {
                router.push('/home')
            }

        } catch {
            setError("Email or password Invalid.")
        } finally {

        }
    }

    const signInGoogle = async () => {
        await signInWithGoogle();

        if (searchParams.get('return') === "payment") {
            router.push('/home/payment')
        } else {
            router.push('/home')
        }

    }



    return (
        <div className='flex flex-col gap-2 px-52   md:w-full  ' >
            <div className="text-2xl font-bold text-center mb-5 text-black">
                Welcome to Lisa!
            </div>
            <div className="text-xl font-bold text-center mb-5 text-black">
                Sign in
            </div>
            {
                error && <Alert color="danger" title={error} />


            }

            <div className='flex w-full'>
                <Button onPress={() => signInGoogle()} className='w-full' size="lg" color="danger" startContent={
                    <Icon icon="flat-color-icons:google"  width="200" height="200"></Icon>
                } variant="bordered">
                    Google
                </Button>
            </div>

            <div className='flex w-full'>
                <Button onPress={() => signInGoogle()} className='w-full' size="lg" color="danger" startContent={
                    <Icon icon="fa-brands:facebook-square" width="120" height="150" />
                } variant="bordered">
                    Facebook
                </Button>
            </div>
            <div className='text-black flex w-full justify-center'>Or</div>


            <form className='flex flex-col gap-5 '

                onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget));
                    onSubmit(data as { password: string; email: string })
                }}

            >
                {/* EMAIL */}
                <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your username"
                    type="email"
                />

                <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your email"
                    type="password"
                />
                <div className="flex  justify-between w-full ">
                    <Button className="w-full" color="primary" type="submit">
                        Sign in
                    </Button>

                </div>

                <div className="text-center text-gray-600">
                    Dont have an account? <a href="/register" className="text-purple-600">Register</a>
                </div>

            </form>

        </div>
    )
}

export default LoginPage