export const CardRecentScans = () => {
    return (
        <div className="px-6 py-6 z-50 rounded-2xl space-y-3 shadow-xl border-gray-200 border col-span-2 row-span-1 ">
            <div className="flex flex-row justify-between items-center">
                <span className="font-semibold text-xl text-gray-900" >Recent Scans</span>
                
            </div>
            
            <hr></hr>

            <div className="w-full">
                <ul className="m-0 p-0 space-y-2 overflow-y-auto  h-24  w-full">
                    <li className="w-full">
                        <div className="flex justify-start items-center space-x-1 w-full">
                            <span className="text-xs w-16 text-gray-600 ">11:59 pm</span>
                            <div className="flex justify-start bg-gray-300 w-550 rounded-lg py-1 w-full hover:bg-primary hover:text-white">
                                <div className="flex flex-row justify-start space-x-4 items-center w-full">
                                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full ml-4" />
                                    <span className=" text-gray-800">Anna Keller</span>
                                </div>
                            </div>
                            
                        </div>
                    
                    </li>
                    <li className="w-full">
                        <div className="flex justify-start items-center space-x-1 w-full">
                            <span className="text-xs w-16 text-gray-600 ">11:59 pm</span>
                            <div className="flex justify-start bg-gray-300 w-550 rounded-lg py-1 w-full hover:bg-primary hover:text-white">
                                <div className="flex flex-row justify-start space-x-4 items-center w-full">
                                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full ml-4" />
                                    <span className=" text-gray-800">Anna Keller</span>
                                </div>
                            </div>
                            
                        </div>
                    
                    </li>
                     
                </ul>
            </div>   
        </div>
    );
};