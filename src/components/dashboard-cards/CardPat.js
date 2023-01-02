import React from 'react'

export const CardPat = () => {
  return (
    <div className="px-6 py-5 rounded-2xl space-y-3 shadow-xl border-gray-200 border col-span-1 row-span-2 max-h-80">
            <p className="text-lg font-semibold">Patients</p>
            <div>
                <ul className="space-y-2 py-1 overflow-y-auto h-44 scrollbar-hide ">
                    <li>
                        <div className="flex justify-between">
                            <div className="flex space-x-3">
                                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full mt-2" />
                                <div className="flex flex-col">
                                    <span className="">Ferrouk massinissa</span>
                                    <span className="text-gray-600 text-sm">specialiste</span>
                                </div>
                                
                            </div>
                            <button className="tracking-wide font-semibold">...</button>
                        </div>
                    </li>
                    <hr></hr>
                   
                    <li>
                        <div className="flex justify-between">
                            <div className="flex space-x-3">
                                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full mt-2" />
                                <div className="flex flex-col">
                                    <span className="">Ferrouk massinissa</span>
                                    <span className="text-gray-600 text-sm">specialiste</span>
                                </div>
                                
                            </div>
                            <button className="tracking-wide font-semibold">...</button>
                        </div>
                    </li>
                    <hr></hr>
                    <li>
                        <div className="flex justify-between">
                            <div className="flex space-x-3">
                                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="object-cover w-9 h-9 rounded-full mt-2" />
                                <div className="flex flex-col">
                                    <span className="">Ferrouk massinissa</span>
                                    <span className="text-gray-600 text-sm">specialiste</span>
                                </div>
                                
                            </div>
                            <button className="tracking-wide font-semibold">...</button>
                        </div>
                    </li>

                    

                </ul>
            </div>
        </div>
  )
}
