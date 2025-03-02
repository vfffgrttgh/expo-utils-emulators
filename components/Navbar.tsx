"use client"

export default function Navbar() {
    return (
        <nav className="flex flex-wrap bg-amber-300 p-2 m-2 rounded-lg justify-center items-center">
            <div className="bg-emerald-600 w-fit h-fit p-5 rounded-3xl" />
            <h1 className="text-white text-3xl font-semibold mr-35 font-mono ml-8">NextSim</h1>
            <button className="bg-green-500 m-2 p-3 rounded-lg" onClick={() => {location.href= "/docs"}}>Docs</button>
        </nav>
    )
};