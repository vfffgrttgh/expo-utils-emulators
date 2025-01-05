import { Suspense } from "react";

export default function Page() {
    const data = [
        { id: 1, src: "https://appetize.io/embed/6q5hgbmupyc6c5mhznjd37goga?device=pixel7&amp;launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A51.0.0%26channel-name%3Dproduction%26snack-channel%3DlwfOGBik8t&amp;params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&amp;appearance=light&amp;deviceColor=black&amp;scale=auto&amp;orientation=portrait&amp;centered=both" },
        { id: 2, src: "https://appetize.io/embed/7kfu7r2ugwm7c4risjyigiuhve?device=iphone16pro&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A51.0.0%26channel-name%3Dproduction%26snack-channel%3DtQEbahbfwX&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=light&deviceColor=black&scale=auto&orientation=portrait&centered=both" },
    ];

    return (
        <>
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className="flex flex-wrap justify-center items-center flex-1">
                    {data.map((item) => (
                        <iframe
                            key={item.id}
                            src={item.src}
                            className="w-96 h-[670px] p-3 m-3 rounded-xl"
                        />
                    ))}
                </div>
            </Suspense>
        </>
    )
}