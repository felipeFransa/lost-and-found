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
                <div className="w-8/12 h-24 flex-col justify-center">
                    <div className="w-full h-12 flex justify-center items-center">
                        <div className="w-60 h-10 rounded border-2 border-blue-700"></div>
                    </div>
                    <div className="w-full h-12 flex justify-around items-center rounded-md">
                        <div className="w-8 h-8 bg-cyan-500 rounded-md"></div>
                        <div className="w-8 h-8 bg-cyan-500 rounded-md"></div>
                        <div className="w-8 h-8 bg-cyan-500 rounded-md"></div>
                        <div className="w-20 h-8 flex justify-center items-center bg-green-600 rounded-md">Next</div>
                    </div>
                </div>
            </div>
        </div>
    )
}