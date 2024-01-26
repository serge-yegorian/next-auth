export default function UserInfo() {
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
                <div>
                    name: <sapn className="font-bold">John</sapn>
                </div>
                <div>
                    email: <sapn className="font-bold">john@gmail.com</sapn>
                </div>
                <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3">log out</button>
            </div>
        </div>
    )
   
}