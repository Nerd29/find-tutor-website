'use client';

import { Button, Description, FieldError, Input, Label, TextField } from '@heroui/react';

import Link from 'next/link';

import { Mail, Lock, ArrowRight } from 'lucide-react';

import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { signOut } from 'better-auth/api';

export default function Login() {

     const onSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
    
        console.log(user)
    
         const { data:res, error } = await authClient.signIn.email({
          email: user.email,
          password: user.password,
          callbackURL:"/"
         
        });
    
        console.log(res,error)
        if (res) {
        // redirect("/")
        toast.success("Login Successful")
      } else {
       toast.error("Invalid Email and Password")
      }
    }

    const handleGoogleSignIn=async()=>{
        await authClient.signIn.social({
            provider:"google",
            callbackURL:"/"
        })
    }


    return (
        <div className="min-h-[80vh] flex flex-col bg-slate-50">
            <div className="flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        <div className="text-center space-y-2 relative">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                                Welcome <span className="text-blue-600">Back</span>
                            </h2>
                            <p className="text-slate-500 font-medium">Continue your learning journey today</p>
                        </div>

                        <div className="space-y-4">
                            <Button onClick={handleGoogleSignIn}
                                variant="bordered"
                                className="w-full h-12 font-semibold rounded-2xl border-slate-200 hover:bg-slate-50 transition-colors gap-3"
                            >
                                <Image
                                    width={20}
                                    height={20}
                                    src="https://www.google.com/favicon.ico"
                                    className="w-5 h-5"
                                    alt="Google"
                                />
                                Sign in with Google
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-slate-100"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-4 text-slate-400 font-semibold tracking-widest">Or with email</span>
                            </div>
                        </div>

                        <form  onSubmit={onSubmit}
                            className="space-y-6"
                        >
                             <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                                }}
                            >
                                <Label>Email</Label>
                                <Input placeholder="john@example.com" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                                }}
                            >
                                <Label>Password</Label>
                                <Input placeholder="Enter your password" />
                                <Description>
                                Must be at least 8 characters with 1 uppercase and 1 number
                                </Description>
                                <FieldError />
                            </TextField>
                            <div className="flex justify-end">
                                <Link
                                    href="#"
                                    className="text-sm font-bold text-blue-600 hover:underline underline-offset-4 transition-all"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Button
                                color="primary"
                                type="submit"
                                className="w-full h-14 text-[16px] font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
                            >
                                Log In <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>

                        <div className="text-center pt-2">
                            <p className="text-sm text-slate-500 font-medium">
                                New to MediQueue?{' '}
                                <Link
                                    href="/register"
                                    className="text-blue-600 font-black hover:underline underline-offset-4 transition-all"
                                >
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}