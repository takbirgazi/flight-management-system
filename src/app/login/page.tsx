"use client"
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

interface LoginFormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Login = () => {
    const [successMsg, setSuccessMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            const response = await axios.post("https://flight-back.vercel.app/api/v1/auth/login", data);
            const token = response?.data?.data?.accessToken;
            if (!token) {
                return
            } else {
                Cookies.set("authToken", token, { expires: 1 }); // Save token in cookies for 1 day
                setErrorMsg("");
                setSuccessMsg("Log In Successfully!");
                reset();
                router.push("/flight")

            }
        } catch (error) {
            setSuccessMsg("")
            setErrorMsg("Email or Password is incorrect!");
            console.log("Error creating flight:", error);
        }
    };

    return (
        <div>
            <main className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-1">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center text-blue-600">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <span className="text-green-800 text-sm font-semibold">{successMsg && successMsg}</span>
                        <span className="text-red-800 text-sm font-semibold">{errorMsg && errorMsg}</span>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                className={`mt-2 w-full border p-2 border-gray-600 outline-none rounded-md ${errors.email ? "border-red-500" : ""
                                    }`}
                                placeholder="Your email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register("password", { required: "Password is required", minLength: 6 })}
                                className={`mt-2 w-full border p-2 border-gray-600 outline-none rounded-md ${errors.password ? "border-red-500" : ""
                                    }`}
                                placeholder="Your password"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters long.</p>
                            )}
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        I want to create an account? <Link href="/signup" className="text-blue-600 font-medium">Sign Up</Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Login;