
import { CgArrowsScrollH } from "react-icons/cg";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { CgGames } from "react-icons/cg";


import Image from "next/image"
export default function Home(){
    return (
    <div className="w-100% "> 
        <div className=" banner w-100% h-96  pl-142 pr-142 bg-black flex flex-row justify-center gap-32 ">
            <section>
                <div className=" content pt-16 ">
                <h2 className="text-sm w-96 h-6 font-bold font-mono text-slate-300">Pro.Beyond.</h2>
                <h1 className="text-slate-300 text-7xl font-thin">IPhone 14 <span className="font-semibold">Pro</span></h1>
                <p className="text-slate-300 text-2xl font-thin pt-6">
                Created to change everything for the better. For everyone</p>
                <button className="text-center text-lg font-normal mt-5 p-3 text-slate-300 border-spacing-1 cursor-pointer bg-opacity-30 w-44 h-14 rounded border-2 border-orange-300">Shop Now</button>
            </div>
            </section>

            <section className="iphone mt-4">
            <Image src="/iphone14.png"alt="iphone"width={280} height={180}/>
            </section>
            </div>
            <div className="categary w-100% h-60 px-52 bg-slate-300 ">
            <section className="flex justify-between pt-8 pb-2">
            <h2 className="text-xl font-semibold text-slate-900">Browse By Category</h2> 
            <CgArrowsScrollH size={50} />
            </section>

            <section className="flex  justify-between cursor-pointer ">
                <div><IoIosPhonePortrait size={90} /><h4 className="pl-4">Phones</h4></div>
                <div><BsSmartwatch size={75} /> <h4 className=" pt-3">Smart Watch</h4></div>
                <div><FaCamera size={75} /><h4 className="pl-3 pt-3">Camera</h4></div>
                <div><FaHeadphones size={75} /><h4 className=" pt-3">Head Phones</h4></div>
                <div><HiComputerDesktop size={75} /><h4 className=" pt-3">Computers</h4></div>
                <div><CgGames size={75} /><h4 className="pl-4 pt-3">Games</h4></div>
            </section>
            </div>

            <div className="w-100% h-400 flex flex-row">
                
                <div className="left-side w-50% h-160 flxe"  >
                <section className="flex flex-row w-25%" >
                <Image src="/playstation.png"alt="iphone"width={380} height={180}/>
                <section className="text-left px-8 w-25% flex flex-col align-middle pt-44">
                    <h2 className="text-7xl font-bold text-slate-900">Playstation 5</h2>
                    <p className="font-medium from-neutral-500 pt-8 text-left w-56">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                </section>
                </section>
                
                <section className="flex flex-row w-25%">
                <Image src="/headphone.png"alt="iphone"width={380} height={180}/>
                <section className="text-left px-11 w-25% flex flex-col align-middle pt-32">
                <h2 className="text-4xl font-bold text-slate-900">Apple AirPods </h2><span className="font-bold text-7xl" >Max</span>
                <p className="font-medium from-neutral-500 pt-6 text-left w-56">Computational audio. Listen, it is powerful</p>
                </section>
                </section>
                </div>
                <div className="right-side  w-50% h-500  bg-slate-400 ml-16 "  >
                <section className="flex flex-col w-50% ">
                <Image src="/macbook.png"alt="macbook"width={400} height={280}/>
                <section className="text-left w-50% flex flex-col pl-7  pt-8">
                <h2 className="text-6xl font-bold text-slate-900">Macbook </h2>
                <span className="font-bold text-7xl" >Air</span>
                <p className="font-medium from-neutral-500 pt-11 w-48 text-left ">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-800 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-2 border-orange-300 bg-slate-300">Shop Now</button>
                </section>
                </section>
                </div>
            </div>

            <section className="w-100% h-6"><h3 className=" text-ellipsis text-pretty text-opacity-45 text-gray-900 pt-4 font-bold text-2xl font-seri text-center bg-green-50">Discounts upto 50%</h3>    
            </section>
            <div className="w-100% px-40 py-14 h-800 flex gap-10 flex-row justify-between bg-green-50">
            <section className="bg-gray-300 w-64 h-96 px-5 py-8 justify-items-center">
                <Image src="/gold.png"alt="iphone"width={100} height={280}/>
                <section className="text-left pl-2 pt-8 justify-items-center" >
                <h2 className="text-lg font-bold text-slate-900 text-center" >Apple iPhone 14 Pro 512GB Gold (MQ233) <span className="font-serif font-bold">$1437</span> </h2>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-300 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-3 bg-black">Shop Now</button>
                </section>
                </section>
                
                <section className="bg-gray-300 w-64 h-96 px-5 py-8 justify-items-center">
                <Image src="/airpods2.png"alt="iphone"width={110} height={280}/>
                <section className="text-left pl-2 pt-8 justify-items-center" >
                <h2 className="text-lg font-bold text-slate-900 text-center" >AirPods Max Silver
                Starlight Aluminium <span className="font-serif font-bold">$549</span> </h2>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-300 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-3 bg-black">Shop Now</button>
                </section>
                </section>

                <section className="bg-gray-300 w-64 h-96 px-5 py-8 justify-items-center">
                <Image src="/watch.png"alt="watch"width={100} height={280}/>
                <section className="text-left pl-2 pt-4 justify-items-center" >
                <h2 className="text-lg font-bold text-slate-900 text-center" >Apple Watch Series 9 GPS 41mm Starlight Aluminium <span className="font-serif font-bold">$399</span> </h2>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-300 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-3 bg-black">Shop Now</button>
                </section>
                </section>

                <section className="bg-gray-300 w-64 h-96 px-5 py-8 justify-items-center">
                <Image src="/mobileblue.png"alt="iphone"width={110} height={280}/>
                <section className="text-left pl-2 pt-8 justify-items-center" >
                <h2 className="text-lg font-bold text-slate-900 text-center" >Apple iPhone 14 Pro 1TB Gold (MQ2V3)<span className="font-serif font-bold">$1499</span> </h2>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-300 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-3 bg-black">Shop Now</button>
                </section>
                </section>
                </div>

            <div className="w-100% px-40 h-400 ">
                <section className="conten">
                    <ul  className="cursor-pointer text-pretty text-opacity-45  text-gray-900  text-lg font-extrabold font-serif flex gap-8 h-12 items-center ">

                        <li>New Arrival</li>
                        <li>Bestseller</li>
                        <li>Featured Products</li>
                    </ul>
                </section>
            </div>
            
                <div className="w-100% px-40 py-10 h-800 flex gap-10 flex-row justify-between bg-green-50">
                <section className="bg-gray-300 w-64 h-96 px-5 py-8 justify-items-center">
                <Image src="/iphone14.png"alt="iphone"width={100} height={280}/>
                <section className="text-left pl-2 pt-8 justify-items-center" >
                <h2 className="text-lg font-bold text-slate-900 text-center" >Apple iPhone 14 Pro Max 128GB Deep Purple <span className="font-serif font-bold">$900</span> </h2>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-300 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-3 bg-black">Shop Now</button>
                </section>
                </section>
                
                <section className="bg-gray-300 w-64 h-96 px-5 py-8 justify-items-center">
                <Image src="/camera.png"alt="iphone"width={120} height={280}/>
                <section className="text-left pl-2 pt-8 justify-items-center" >
                <h2 className="text-lg font-bold text-slate-900 text-center" >Blackmagic Pocket Cinema Camera 6k<span className="font-serif font-bold">$2535</span> </h2>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-300 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-3 bg-black">Shop Now</button>
                </section>
                </section>

                <section className="bg-gray-300 w-64 h-96 px-5 py-8 justify-items-center">
                <Image src="/watch.png"alt="watch"width={100} height={280}/>
                <section className="text-left pl-2 pt-3 justify-items-center" >
                <h2 className="text-lg font-bold text-slate-900 text-center" >Apple Watch Series 9 GPS 41mm Starlight Aluminium <span className="font-serif font-bold">$399</span> </h2>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-300 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-3 bg-black">Shop Now</button>
                </section>
                </section>

                <section className="bg-gray-300 w-64 h-96 px-5 py-8 justify-items-center">
                <Image src="/airpods2.png"alt="headphone"width={110} height={280}/>
                <section className="text-left pl-2 pt-8 justify-items-center" >
                <h2 className="text-lg font-bold text-slate-900 text-center" >AirPods Max Silver
                Starlight Aluminium <span className="font-serif font-bold">$549</span> </h2>
                <button className="text-center text-lg font-normal mt-6 p-3 text-slate-300 border-spacing-1 bg-opacity-30 w-44 h-14 rounded border-3 bg-black">Shop Now</button>
                </section>
                </section>
                </div>
        </div>
        
    )
}
