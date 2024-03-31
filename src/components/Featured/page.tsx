import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {faHeart } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import data from "../Featured.json";

interface DataItem {
  id: number;
  name: string;
  cost: number;
  url: string;
  desc:string;
}

export default async function Page() {
  
    return(
        <div className='flex sm:flex-col gap-10  w-full p-10 sm:p-4'>
          {data.map((item:DataItem)=>{
            return(
              <div key={item.id} className='shadow-3xl rounded-xl'>
                <Image src={item.url} alt='not found' width={460} height={280} className='sm:block'/>
                <div className='flex flex-col gap-2 m-5'>
                  <h1 className='font-bold text-gray-800'>{item.name}</h1>
                  <p className='text-light-gray'>starts from</p>
                  <div className='flex justify-between'>
                    <div className='flex text-real-green font-bold'>
                      <FontAwesomeIcon icon={faIndianRupeeSign} style={{width:"20px", height:"20px", marginTop:"5px"}}/>
                      <h3>{item.cost}</h3>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faHeart} style={{width:"25px", height:"20px"}} className='hover:text-real-green' />
                    </div>
                  </div>
                  <p className='text-light-gray'>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
    )
}
