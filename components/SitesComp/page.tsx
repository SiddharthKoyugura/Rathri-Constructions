import React from "react";
import {promises as fs} from 'fs';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIndianRupeeSign, faBed, faBath, faShuffle} from '@fortawesome/free-solid-svg-icons';
import {faHeart } from '@fortawesome/free-regular-svg-icons';
import {faSquarespace } from '@fortawesome/free-brands-svg-icons';
interface DataItem{
    id:number;
    name:string;
    url:string;
    cost:number;
    desc:string;
}
export default async function Page()
{
    const file = await fs.readFile(process.cwd()+'/components/Featured.json','utf-8');
    const data:DataItem[]= JSON.parse(file);
    //console.log(data);
    return(
        <div className='flex justify-center items-center'>
            <div className="grid gap-10 grid-cols-1">
                {data.map((item:DataItem)=>(
                    <div key={item.id} className="me w-fit flex shadow-lg sm:flex-col">
                        <div>
                            <Image src={item.url} width={450} height={200} alt="not" className="rounded-md"/>
                        </div>
                        <div className='flex flex-col gap-4 m-5'>
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
                            <p className='text-light-gray'>{item.desc}<br/></p>
                            <div className="flex justify-between">
                                <div className="flex gap-2 text-light-gray"><FontAwesomeIcon icon={faBed} style={{width:"30px", height:"30px"}}/> 3 beds</div>
                                <div className="flex gap-2 text-light-gray"><FontAwesomeIcon icon={faBath} style={{width:"25px", height:"25px"}}/> 2 baths</div>
                                <div className="flex gap-2 text-light-gray"><FontAwesomeIcon icon={faSquarespace} style={{width:"25px", height:"25px"}}/> 600 sqft</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-light-gray border-2 border-gray-300 p-2 rounded-md">See Details</div>
                                <div className="text-light-gray flex gap-8">
                                    <FontAwesomeIcon icon={faShuffle} style={{width:"25px", height:"25px"}} />
                                    <FontAwesomeIcon icon={faHeart} style={{width:"25px", height:"25px"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// export default function page()
// {
//     return(
//         <div>
//             <h1>Heading1</h1>
//         </div>
//     )
// }