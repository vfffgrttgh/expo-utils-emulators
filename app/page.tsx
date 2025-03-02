import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center">
                <div className="w-fit h-fit p-3 m-3 rounded-lg bg-sky-500">
                    <img src="/android.webp" className="w-56 h-56" />
                    <Link className="text-3xl text-blue-700 font-semibold" href="https://simulator-android.netlify.app">Android</Link>
                </div>
                <div className="w-fit h-fit p-3 m-3 rounded-lg bg-sky-500">
                    <img src="/iphone.jpg" className="w-56 h-56" />
                    <Link className="text-3xl text-blue-700 font-semibold" href="https://simulator-iphone.netlify.app">iPhone</Link>
                </div>
                <div className="w-fit h-fit p-3 m-3 rounded-lg bg-sky-500">
                    <img src="/ipad.webp" className="w-56 h-56" />
                    <Link className="text-3xl text-blue-700 font-semibold" href="https://simulator-ipad.netlify.app">iPad</Link>
                </div>
            </div>
        </>
    );
}