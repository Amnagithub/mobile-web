
import { FcLikePlaceholder } from "react-icons/fc";
import { TiShoppingCart } from "react-icons/ti";
import { RiContactsLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";


export default function Header(){
    return (
        <div className="header  bg-slate-300 ">
            <h1 className="cyber">cyber</h1>
            <div className="searchbar">
                <input className=""type="search " placeholder="Search"  /><button><CiSearch className="size-5 pt-1 pr-1"/></button>
            </div>
            <div className="nav">
                <ul>
                    <li><link href="" />Home</li>
                    <li><link href="" />About</li>
                    <li><link href="" />Contact Us</li>
                    <li><link href="" />Blog</li>
                </ul>
            </div>
            <div className="icons">

            <FcLikePlaceholder className="size-5"/>
            <TiShoppingCart className="size-5"/>
            <RiContactsLine className="size-5"/>
            </div>
             

        </div>
    )
}