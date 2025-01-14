import { Suspense } from "react";

export default function Page() {
    const data = [
        { id: 1, src: "https://appetize.io/embed/6q5hgbmupyc6c5mhznjd37goga?device=pixel7" },
        { id: 2, src: "https://appetize.io/embed/7kfu7r2ugwm7c4risjyigiuhve?device=iphone16pro" },
    ];

    return (
        <>
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className="flex flex-wrap justify-center items-center flex-1">
                    {data.map((item) => (
                        <iframe
                            key={item.id}
                            src={item.src}
                            className="w-96 h-[640px] p-3 m-3 rounded-xl"
                        />
                    ))}
                </div>
            </Suspense>
        </>
    )
}
