import Image from "next/image"
import Avatar from "@/app/img/icons/user.svg"

export const Post = () => {
    return (
        <div className="w-full flex justify-center items-center">

            <div className="w-96 h-96 flex justify-center items-center bg-white rounded-md">


            <div className="w-96 h-96 flex flex-col justify-between items-center rounded-md">
                
                <div className="w-96 h-20 flex justify-center items-center">
                    <div className="w-96 h-20 flex justify-between items-center">


                        <div className="w-4/12 h-16 flex justify-center items-center">
                            <div className="w-16 h-16 flex justify-center items-center rounded-full border-2 border-black">
                                <Image src={Avatar} alt="Avatar" width={40} height={40} />
                            </div>
                        </div>
                        <div className="w-8/12 h-16 rounded-md bg-green-500"></div>
                    </div>
                </div>


                <div className="w-96 h-64 flex flex-col justify-around items-center">
                    <div className="w-80 h-44 bg-blue-600 rounded-md"></div>
                    <div className="w-80 h-10 bg-red-600 rounded-md"></div>
                </div>
            </div>
            </div>
        </div>  
    )
}