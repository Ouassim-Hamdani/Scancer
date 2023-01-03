  import { genderColors } from "../../constants/constants";
  import { PieChart, Pie,Cell} from 'recharts';
  import React, { useState, useEffect, useRef } from 'react'
  import dateExpand from '../../assets/dateExpand.svg'

  export const CardGender = () => {
        const [height, setHeight] = useState(0)
        const [width, setWidth] = useState(0)
        const [genderData, setGender] = useState([
          { name: 'Female', value: 0,quantity:0 },
          { name: 'Male', value: 0,quantity:0 },
        ]
        )
        const ref = useRef(null)
      
        useEffect(() => {
          setHeight(ref.current.clientHeight)
          setWidth(ref.current.clientWidth)
          const fetchData= async () => {
            const response = await fetch('http://localhost:5000/api/dashboard')
            const json = await response.json()
      
            if (response.ok) {
              setGender(json.genderData)
            }
          }
      
          fetchData()
          console.log(genderData)
        })

    
    return (
        <div className="px-6 py-6 rounded-2xl space-y-4 shadow-2xl border-gray-200 border col-span-1  row-span-1" ref={ref}>
          <div className="flex flex-row justify-between items-center">
                <span className="text-gray-800 font-semibold text-lg">Patients</span>
                <div className='flex flex-row space-x-1 items-center '>
                    <span className="text-gray-500 text-md">This Month</span>
                    <img src={dateExpand} alt="" />
                </div>
                
            </div>
          <div className="pie flex justify-center">
                <PieChart width={width/1.5} height={height/2.4}>
                <Pie
                data={genderData}
                
                innerRadius={40}
                outerRadius={50}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                  >
                {genderData && genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={genderColors[index % genderColors.length]} />
                ))}
                </Pie>
              
              </PieChart>
          </div>
          <div className="stats flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                      <div className="flex flex-row space-x-2 items-center">
                        <div className="circle-gender bg-[#3AC281] w-4 h-4 rounded-full"></div>
                        <span className="text-gray-600">Woman</span>
                      </div>
                      <span className="pl-6 text-gray-600">{genderData && genderData[0].value}% <span className="text-gray-400">({genderData &&genderData[0].quantity})</span></span>
                  </div>
                  <div className="flex flex-col">
                      <div className="flex flex-row space-x-2 items-center">
                        <div className="circle-gender bg-primary w-4 h-4 rounded-full"></div>
                        <span className="text-gray-600">Man</span>
                      </div>
                      <span className="pl-6 text-gray-600">{genderData &&genderData[1].value}% <span className="text-gray-400">({genderData &&genderData[1].quantity})</span></span>
                  </div>
          </div>
        </div>
    );
};