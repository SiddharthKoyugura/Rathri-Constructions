import React from 'react';
import { promises as fs } from 'fs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {faHeart } from '@fortawesome/free-regular-svg-icons';
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

interface DataItem {
  id: number;
  name: string;
  cost: number;
  url: string;
  desc:string;
}

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/components/Featured.json', 'utf8');
  //console.log(process.cwd());
  const data:DataItem[] = JSON.parse(file);

  
    return(
        <div className='flex sm:flex-col gap-10  w-full p-10 sm:p-4'>
          {data.map((item:DataItem)=>{
            return(
              //<li key={item.id}>{item.name}</li>
              <div key={item.id} className='shadow-3xl rounded-xl'>
                <img src={item.url} alt='not found' style={{width:"460px", height:"280px"}} className='sm:block'/>
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
