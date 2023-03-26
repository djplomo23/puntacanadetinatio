import React from 'react'
import {Data} from './Data'



export const Card = () => {


  return <>
    {Data.map((data, i) =><div key={i} className='flex flex-wrap text-left px-2 justify-center w-52 h-52 bg-indigo-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100'>
        <div >

        </div>
        <h3 className='text-sm'>
        {data.title}
        </h3>
        <a href={`https://wa.me/18494530100?text=Necesito el servicio ${data.title} $ ${data.price} US`} target='_blank' className='flex justify-center items-center bg-emerald-600 px-4 py-0 my-4 rounded-md cursor-pointer hover:bg-emerald-500 '>
            {`$ ${data.price} US`}
        </a>
    </div>)}
  
  </>
}
