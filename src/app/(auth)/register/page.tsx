'use client'
import { Button, Input, Alert } from '@heroui/react'
import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { registerWithEmailPassword, registerWithGoogle } from '@/lib/auth';
import { useRouter, useSearchParams } from 'next/navigation';

const RegisterPage = () => {

    const [error, setError] = useState<string>();
    const searchParams = useSearchParams();
    const router = useRouter()

    const signUpWithGoogle = async () => {
        await registerWithGoogle();
        if (searchParams.get('return') === "payment") {
            router.push('/home/payment')
        } else {
            router.push('/home')
        }
    }

    const onSubmit = async (data: { name: string; email: string; password: string }) => {
        try {

            await registerWithEmailPassword(data.name, data.email, data.password);

            if (searchParams.get('return') === "payment") {
                router.push('/home/payment')
            } else {
                router.push('/home')
            }

        } catch {
            setError('The email address is already in use.');
        }
    };


    return (
        <div className="flex w-full flex-col gap-5 px-60">
            <div className="text-2xl font-bold text-center mb-5 text-black">
                Create Account
            </div>

            {
                error && <Alert color="danger" title={error} />

            }

            <div className='flex w-full'>
                <Button onPress={() => signUpWithGoogle()} className='w-full' size="lg" color="danger" startContent={
                    <Icon icon="flat-color-icons:google"></Icon>
                } variant="bordered">
                    Google
                </Button>
            </div>

            <div className='flex w-full justify-center'>Or</div>

            <form className='flex flex-col gap-5'
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget));
                    onSubmit(data as { name: string; password: string; email: string })
                }}
            >

                <Input
                    isRequired
                    name="name"
                    label="Name"
                    labelPlacement="outside"
                    placeholder="Enter your Name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Username must be at least 3 characters long";
                        }

                        return value === "admin" ? "Nice try!" : null;
                    }}

                />

                <Input
                    isRequired
                    name="email"
                    label="Email"
                    labelPlacement="outside"
                    placeholder="Enter your username"
                    errorMessage="Please enter a valid email"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Username must be at least 3 characters long";
                        }

                        return value === "admin" ? "Nice try!" : null;
                    }}
                />

                <Input
                    type='password'
                    isRequired
                    name="password"
                    label="Password"
                    labelPlacement="outside"
                    placeholder="Enter your Password"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Username must be at least 3 characters long";
                        }

                        return value === "admin" ? "Nice try!" : null;
                    }}
                />

                <Button type='submit'
                    className="w-full" color="primary">
                    Create
                </Button>

                <div className="text-center text-gray-600">
                    Already have an account? <a href="/login" className="text-purple-600">Sign in</a>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage