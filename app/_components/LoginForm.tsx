"use client"

import { useState } from "react";
import { LoginType } from "../_types/LoginType";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";


const LoginForm = () => {
    const [user, setUser] = useState<LoginType>({
        email: '',
        password: ''
    })
    const [remember, setRemember] = useState<boolean>(false)

    const router = useRouter()

    const loginSubmitHandler = (e:any) => {
        e.preventDefault()
        if(!user?.email||!user?.password){
            toast.error('please enter email and password!!')
            return
        }

        router.push('/admin/create-job-post')
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">

            {/* Glass Card */}
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl w-full max-w-md p-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    <p className="text-white/80 mt-2">Sign in to continue</p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={loginSubmitHandler}>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            value={user.email}
                            className="peer w-full bg-transparent border border-white/40 rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:border-white"
                            placeholder="Email"
                            onChange={(e) =>
                                setUser(prev => ({
                                    ...prev,
                                    email: e.target.value
                                }))
                            }

                        />
                        <label className="absolute left-4 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 transition-all">
                            Email
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type="password"
                            value={user.password}
                            className="peer w-full bg-transparent border border-white/40 rounded-lg px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:border-white"
                            placeholder="Password"
                            onChange={(e) =>
                                setUser(prev => ({
                                    ...prev,
                                    password: e.target.value
                                }))
                            }
                        />
                        <label className="absolute left-4 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 transition-all">
                            Password
                        </label>
                    </div>

                    {/* Options */}
                    <div className="flex items-center justify-between text-sm text-white/80">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-white" checked={remember} onChange={(e)=>setRemember(e.target.checked)} />
                            Remember me
                        </label>
                       
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-white text-purple-600 font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                    >
                        Login
                    </button>
                </form>

               
               
            </div>
            <Toaster/>
        </div>
    );
};

export default LoginForm;
