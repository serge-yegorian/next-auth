"use client";

import axios from "axios";
import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary and cannot be blank");
            return;
        }

        try { 
            const response = await axios.post('api/register', {name, email, password});
            const responseData = response.data;

            // Check if the response indicates an error
            if (responseData.status == 401) {
                setError(`Email ${email} already registered`);
                return;
            } else {
                // Registration successful
                const form = e.target;
                form.reset();
                console.log(responseData.message, "success");
                router.push('/');
            }
        } catch (err) {
            setError('Error during registration');
            console.error("Error during registration:", err);
        }
    }

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className='text-lg font-bold my-4'>Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input onChange={e => setName(e.target.value)} type={'text'} placeholder='full name'/>
                    <input onChange={e => setEmail(e.target.value)} type={'text'} placeholder='email'/>
                    <input onChange={e => setPassword(e.target.value)} type={'password'} placeholder='password'/>

                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">register</button>

                    {error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>}

                    <Link className="text-sm mt-3 text-right" href={'/'}>Already have an account? <span className="underline">Login</span></Link>
                </form>
            </div>
        </div>
    )
}