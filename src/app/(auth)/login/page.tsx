'use client'

import Link from 'next/link'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {

    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { FaGoogle } from 'react-icons/fa'
import { signIn } from "next-auth/react"
import { login } from '@/actions/auth'

// import { loginFormSchema } from '@/lib/validation-schemas'

// const formSchema = loginFormSchema
const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long" }),
});
export default function Login() {
    const form = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    async function onSubmit(values: FieldValues) {
        try {
            // Assuming an async login function
            const data = {
                email: values.email,
                password: values.password

            }
            console.log(data)
            const response = await login(data)
            // console.log("response......", response)
            if (response?.success) {
                toast.success("user logged in successfully")
            }
      
          
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            
            toast.error('Ceheck credentials',error)
        }
    }



    return (
        <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4">
            <Card className="mx-auto max-w-md my-20 w-full">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email and password to login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="email"
                                                    placeholder="johndoe@mail.com"
                                                    type="email"
                                                    autoComplete="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <div className="flex justify-between items-center">
                                                <FormLabel htmlFor="password">Password</FormLabel>
                                                <Link
                                                    href="#"
                                                    className="ml-auto inline-block text-sm underline"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                            <FormControl>
                                                <Input
                                                    type='password'
                                                    id="password"
                                                    placeholder="******"
                                                    autoComplete="current-password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                                {/* <Button variant="outline" className="w-full">
                                    Login with Google
                                </Button> */}
                            </div>
                        </form>
                        <div className="relative my-4 flex items-center justify-center overflow-hidden">
                            <Separator />
                            <div className="py-1 px-2 border rounded-full text-center text-xs mx-1 bg-primary">
                                OR
                            </div>
                            <Separator />
                        </div>
                        <Button variant="outline" className="w-full"
                            onClick={() => signIn("google", {
                                callbackUrl: "/dashboard"
                            })}
                        >
                            <FaGoogle />
                            Login with Google
                        </Button>
                    </Form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
