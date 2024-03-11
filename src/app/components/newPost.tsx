export const NewPost = () => {
    return (
        <div className="w-96 h-24 flex justify-between items-center bg-white rounded-md">
            <div className="w-4/12 flex justify-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full"></div>
            </div>
            <div className="w-8/12 h-24 flex-col justify-center">
                <div className="w-full h-12 flex justify-center items-center">
                    <div className="w-60 h-10 bg-blue-700 rounded"></div>
                </div>
                <div className="w-full h-12 flex justify-around items-center rounded-md">
                    <div className="w-8 h-8 bg-cyan-500 rounded-md"></div>
                    <div className="w-8 h-8 bg-cyan-500 rounded-md"></div>
                    <div className="w-8 h-8 bg-cyan-500 rounded-md"></div>
                    <div className="w-20 h-8 bg-cyan-500 rounded-md"></div>
                </div>

            </div>
        </div>
    )
}