import Image from "next/image"
import Avatar from "@/app/img/icons/user.svg"

export const NewPost = () => {
    return (
        <div className="w-full flex justify-center items-center my-3">
            <div className="w-96 h-24 flex justify-between items-center bg-white rounded-md">
                <div className="w-4/12 flex justify-center">
                    <div className="w-16 h-16 flex justify-center items-center rounded-full border-2 border-black">
                     <Image src={Avatar} alt="avatar" width={40} height={40}/>
                    </div>
                </div>
                <div className="w-80 h-24 flex-col justify-center my-1">
                    <div className="w-auto h-12 flex justify-center items-center mx-1">
                        <div className="w-full h-10 rounded border-2 border-blue-700"></div>
                    </div>
                    <div className="w-auto h-12 flex justify-between items-center rounded-md mx-1">
                        <div className="w-8 h-8 bg-orange-600 rounded-md"></div>
                        <div className="w-8 h-8 bg-rose-600 rounded-md"></div>
                        <div className="w-8 h-8 bg-cyan-500 rounded-md"></div>
                        <div className="w-20 h-8 flex justify-center items-center bg-green-600 rounded-md hover:cursor-pointer hover:bg-green-500">Next</div>
                    </div>
                </div>
            </div>
        </div>
    )
}