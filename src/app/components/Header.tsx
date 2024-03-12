import Image from 'next/image'
import Home from "@/app/img/icons/casa.svg";
import Email from "@/app/img/icons/envelope.svg";
import Config from "@/app/img/icons/config.svg";
import Cart from "@/app/img/icons/cart.svg";
import User from "@/app/img/icons/user.svg";

export const Header = () => {
    return (
        <div className="w-full h-24 flex justify-around items-center bg-white">
            <div className="w-96 h-12 flex justify-center items-center bg-black rounded-md">
                <div className='text-3xl'>E-commerce Feelps</div>
            </div>


            <div className="w-96 flex justify-between">
                <div className="w-12 h-12 flex justify-center items-center rounded-md">
                    <Image src={Home} alt='Home' width={100} height={100} />
                </div>
                <div className="w-12 h-12 flex justify-center items-center rounded-md">
                    <Image src={Email} alt='Email' width={100} height={100} />
                </div>
                <div className="w-12 h-12 flex justify-center items-center rounded-md">
                    <Image src={Config} alt='config' width={100} height={100} />
                </div>
                <div className="w-12 h-12 flex justify-center items-center rounded-md">
                    <Image src={Cart} alt='Cart' width={100} height={100} />
                </div>
                <div className="w-12 h-12 flex justify-center items-center rounded-md">
                    <Image src={User} alt='User' width={100} height={100} />
                </div>
            </div>
        </div>
    )
}