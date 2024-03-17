import Image from 'next/image'
import Home from "@/app/img/icons/casa.svg";
import Email from "@/app/img/icons/envelope.svg";
import Config from "@/app/img/icons/config.svg";
import Cart from "@/app/img/icons/cart.svg";
import User from "@/app/img/icons/user.svg";

export const Header = () => {
    return (

        <div className='w-full flex justify-center items-center my-3'>
        <div className="w-96 h-24 sm:w-full flex justify-center items-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="w-96 h-12 flex justify-center items-center">
                <div className='text-3xl'>Lost and found</div>
            </div>
            <div className="w-96 hidden sm:flex justify-between">
                <div className="w-12 h-12 flex justify-center items-center hover:cursor-pointer rounded-md">
                    <Image src={Home} alt='Home' width={40} height={40} />
                </div>
                <div className="w-12 h-12 flex justify-center items-center hover:cursor-pointer rounded-md">
                    <Image src={Email} alt='Email' width={40} height={40} />
                </div>
                <div className="w-12 h-12 flex justify-center items-center hover:cursor-pointer rounded-md">
                    <Image src={Config} alt='config' width={40} height={40} />
                </div>
                <div className="w-12 h-12 flex justify-center items-center hover:cursor-pointer rounded-md">
                    <Image src={Cart} alt='Cart' width={40} height={40} />
                </div>
                <div className="w-12 h-12 flex justify-center items-center hover:cursor-pointer rounded-md">
                    <Image src={User} alt='User' width={40} height={40} />
                </div>
            </div> 
        </div>
        </div>
    )
}