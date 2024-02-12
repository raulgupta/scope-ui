import Image from "next/image";

export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen 
                    bg-gradient-to-r from-black to-red-950 
                    animate-gradient-xy font-mono font-extrabold`}>

        <h1 className={`text-white text-4xl font-bold tracking-wide 
                      animate-pulse`}>
            Welcome To Deux   
        </h1>
    </div>
  );
}
