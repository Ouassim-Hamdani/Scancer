export const CardRecentScans = () => {
    return (
        <div className="px-6 py-6 rounded-2xl space-y-3 shadow-xl border-gray-200 border col-span-2 row-span-2 ">
            <div className="flex flex-row justify-between items-center">
                <span className="font-semibold" >Recent Scans</span>
                <div className="text-gray-500 flex space-x-5 text-sm">
                    <button>Day</button>
                    <div>
                    <button>Week</button>
                    </div>
                    
                </div>
            </div>
            
            <hr></hr>

            <div className="">
                <ul className="m-0 p-0 space-y-2 overflow-y-auto h-40 scrollbar-hide  ">
                    <li>
                        <div className="flex justify-between space-x-1">
                            <span className="text-xs w-16 mt-4">11:59 pm</span>
                            <div className="flex justify-between bg-gray-300 w-550 rounded-lg py-1 hover:bg-primary hover:text-white">
                                <div className="flex space-x-4">
                                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full ml-4" />
                                    <span className="mt-1">Anna Keller</span>
                                </div>
                                <button className="text-xl mr-4 mb-3 tracking-wide">...</button>
                            </div>
                            
                        </div>
                    
                    </li>
                    <li>
                        <div className="flex justify-between space-x-1">
                            <span className="text-xs w-16 mt-4">11:59 pm</span>
                            <div className="flex justify-between bg-gray-300 w-550 rounded-lg py-1 hover:bg-primary hover:text-white">
                                <div className="flex space-x-4">
                                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full ml-4" />
                                    <span className="mt-1">Anna Keller</span>
                                </div>
                                <button className="text-xl mr-4 mb-3 tracking-wide">...</button>
                            </div>
                            
                        </div>
                    
                    </li>
                    <li>
                        <div className="flex justify-between space-x-1">
                            <span className="text-xs w-16 mt-4">11:59 pm</span>
                            <div className="flex justify-between bg-gray-300 w-550 rounded-lg py-1 hover:bg-primary hover:text-white ">
                                <div className="flex space-x-4">
                                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full ml-4" />
                                    <span className="mt-1">Anna Keller</span>
                                </div>
                                <button className="text-xl mr-4 mb-3 tracking-wide">...</button>
                            </div>
                            
                        </div>
                    
                    </li>   
                </ul>
            </div>   
        </div>
    );
};