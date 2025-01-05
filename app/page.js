import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = [
    { id: 1, src: "/iphone.webp", text:"iOS Simulator" },
    { id: 2, src: "/android.jpg", text:"Android Emulator" },
  ];

  return (
    <>
      <nav className="p-3 m-3 rounded-xl bg-blue-500 text-white font-semibold flex justify-center flex-wrap">
        <h1 className="text-3xl mr-20 m-3">RNATU(App Testing Utils)</h1>
        <Link className="bg-blue-600 text-white p-3 m-3 rounded-xl" href="https://docs.expo.dev/">React Native</Link>
        <Link className="bg-yellow-500 text-white p-3 m-3 rounded-xl" href="https://www.w3schools.com/js/default.asp">Javascript</Link>
      </nav>

      <div className="flex flex-wrap justify-center items-center flex-1">
        {data.map((item) => (
          <div className="w-fit h-fit p-3 m-3 rounded-2xl bg-slate-300 hover:p-2" style={{ transition: "0.5s padding" }} key={item.id}>
            <Image
              src={item.src}
              className="p-3 m-3 rounded-[32px]"
              alt="Iphone"
              width={200}
              height={200}
            />
            <Link className="text-xl font-semibold text-center text-green-600" href="/views">{item.text}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
