

import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

export default function Footer(){
    return(
        <>
        <div className="footer w-full h-40em bg-black px-40 py-8 flex  ">
            <div className="w-80 ">
            <h1 className="cyber text-gray-200 " >cyber</h1>
            <p className=" text-gray-500 pt-3 text-wrap  font-size:2px">Cyber is a world wide E-tech provier.Its covers Half of the advanced technology  in the world.The latest models are availbe on demamnd and </p>
            </div>

            <div className="footernavigation flex items-center justify-evenly ml-32">
                <div className="w-80">
                      <ul className="font-thin text-gray-500 cursor-pointer">
                        <li className="text-lg font-bold cursor-none mb-3">Services</li>
                        <li>Bonus programe</li>
                        <li>Gift cards</li>
                        <li>Service contacts</li>
                        <li>Non-cash Account</li>
                        <li>Payment</li>
                        </ul>
                        </div>
                <div className="w-80font-medium text-gray-500 cursor-pointer " >
                    <h1 className="text-lg font-bold cursor-none ">Assistant to the buyer</h1>
                    <ul className="-thin ">
                    <li>Find an order</li>
                    <li>Terms of delivery</li>
                    <li>Exchange and return</li>
                    <li>Gurante</li>
                    <li>Frequently ask questions</li>
                    <li>Term of the use of the site</li>
                    </ul>
                    </div>
            </div>
           
        </div>
        <section className="bg-black w-full h-20 flex px-40 cursor-pointer gap-6 text-white size-11">
            <CiTwitter  />
            <CiFacebook />
            <CiLinkedin />
            <CiInstagram />
            </section>
        </>
    )
}