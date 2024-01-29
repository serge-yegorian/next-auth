"use client";

import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";

export default function UserInfo() {

    const {data:session} = useSession();

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
                <div>
                    name: <sapn className="font-bold">{session?.user?.name}</sapn>
                </div>
                <div>
                    email: <sapn className="font-bold">{session?.user?.email}</sapn>
                </div>
                <button onClick={()=>signOut()} className="bg-red-500 text-white font-bold px-6 py-2 mt-3">log out</button>
            </div>
        </div>
    )
   
}