import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dateExpand from '../../assets/dateExpand.svg'
import React, { useState, useEffect, useRef } from 'react'
import { dataAnalytics as data } from "../../constants/constants";

export const CardAnalytics = () => {
    const [height, setHeight] = useState(0)
        const [width, setWidth] = useState(0)
        const ref = useRef(null)
      
        useEffect(() => {
          setHeight(ref.current.clientHeight)
          setWidth(ref.current.clientWidth)
        })

    

    return (
        <div className="px-6 py-6 rounded-2xl space-y-4 shadow-xl border-gray-200 border col-span-2  row-span-1" ref={ref}>
            <div className="flex flex-row justify-between items-center">
                <span className="text-gray-800 font-semibold text-lg">Analytics</span>
                <div className='flex flex-row space-x-1 items-center '>
                    <span className="text-gray-500 text-md">This Week</span>
                    <img src={dateExpand} alt="" />
                </div>
                
            </div>
            <div className='flex justify-center text-xs'>
                <LineChart width={width} height={height/1.53} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Man" stroke="#4264D0" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Woman" stroke="#3AC281" />
                </LineChart>
            </div>
        </div>
    );
};