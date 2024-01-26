import Link from "next/link";

export default function LoginForm() {
    return(
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className='text-lg font-bold my-4'>Enter Details</h1>

                <form className="flex flex-col gap-3">
                    <input type={'text'} placeholder='email'/>
                    <input type={'password'} placeholder='password'/>

                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">login</button>

                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        Error Message
                    </div>

                    <Link className="text-sm mt-3 text-right" href={'/register'}>Don't have an account? <span className="underline">Register</span></Link>
                </form>
            </div>
        </div>
    )
}