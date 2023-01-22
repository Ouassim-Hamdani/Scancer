export const CardPatientsContact = () => {
    return (
        <div className="px-6 py-5 z-50 rounded-2xl space-y-3 shadow-xl border-gray-200 border col-span-1 row-span-1">
            <p className="text-xl text-gray-900 font-semibold">Patients</p>
            <div className="h-full">
                <ul className="space-y-2 py-1 overflow-y-auto h-28">
                    <li>
                        <div className="flex justify-between">
                            <div className="flex space-x-3">
                                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full mt-2" />
                                <div className="flex flex-col">
                                    <span className="text-gray-900">Ferrouk massinissa</span>
                                    <span className="text-gray-600 text-sm">Specialiste</span>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                    <hr></hr>
                   
                    <li>
                        <div className="flex justify-between">
                            <div className="flex space-x-3">
                                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full mt-2" />
                                <div className="flex flex-col">
                                    <span className="text-gray-900">Ferrouk massinissa</span>
                                    <span className="text-gray-600 text-sm">Specialiste</span>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                    
                    

                    

                </ul>
            </div>
        </div>
    );
};