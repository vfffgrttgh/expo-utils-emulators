import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center">
                <div className="w-fit h-fit p-3 m-3 rounded-lg bg-sky-500">
                    <h1 className="text-3xl text-white font-bold font-mono">Step 1</h1>
                    <h3 className="text-xl text-white">First, go to VSCode and<br />
                        open your folder.
                    </h3>
                </div>
                <div className="w-fit h-fit p-3 m-3 rounded-lg bg-emerald-500">
                    <h1 className="text-3xl text-white font-bold font-mono">Step 2</h1>
                    <h3 className="text-xl text-white">Go to <Link href="/" className="text-blue-500">HomePage</Link> and<br />
                        choose a device.
                    </h3>
                </div>
                <div className="w-fit h-fit p-3 m-3 rounded-lg bg-red-500">
                    <h1 className="text-3xl text-white font-bold font-mono">Step 3</h1>
                    <h3 className="text-xl text-white">You click on the name<br />
                        and view your app<br />
                        in a web-based simulator.
                    </h3>
                </div>
            </div>
        </>
    );
}