import styles from '../page.module.css';
import Image from 'next/image';
import SiteInfo from '../../components/SitesComp/page';
export default function sites()
{
    return(
        <div>
            <div className="sitesBg ">
                <section className={styles.siteBg}>
                    <div className="text-4xl text-white text-center">
                        One Stop Home Destinations!!
                    </div>
                </section>
            </div>
            {/* <div className='bg-vlight-blue p-12 flex justify-center items-center sm:p-3'>
                <div className='grid grid-cols-3 grid-rows-3 gap-4 w-4/5 h-1/2 sm:grid-cols-1'>
                    <div className="relative flex col-start-1 col-end-2 row-start-1 row-end-3"><Image src="/sites_images/pool3.jpg" alt='not'  layout="fill"/></div>
                    <div className='relative grid col-start-2 col-end-4'><Image src="/sites_images/apartment3.jpg" width={300} height={1} alt='not' /></div>
                    <div className='relative flex col-start-3 col-end-5'><Image src="/sites_images/balcony.jpg" layout="fill" alt='not' /></div>
                    <div><Image src="/sites_images/apartment2.jpg" width={300} height={250} alt='not' /></div>  
                    <div className='grid relative row-start-1 row-end-3 col-start-1 col-end-3 bg-red-600 grid-rows-12 grid-cols-7'>1</div>
                    <div className='bg-orange-700'>2</div>
                    <div className=' bg-green-500'>3</div>
                    <div className='bg-fuchsia-800'>4</div>
                    <div className='bg-sky-800'>5</div>
                    <div className=' bg-yellow-600'>6</div>
                </div>
            </div> */}
            <div className='text-center mt-4'><h1 className='text-2xl font-semibold'>Our Sites</h1></div>
            <div className='p-16 flex items-center gap-10 sm:flex-col sm:p-4'>
                <div className='w-80 flex flex-col gap-6'>
                    <div className='property p-6 flex flex-col gap-2 shadow-lg'>
                        <h2>Property</h2>
                        <select name="property" id="property" className='w-68 h-12 rounded-lg border-2 border-gray-300 flex shrink text-gray-500'>
                            <option value="" className='border-2 border-gray-300 min-h-10'>All Type</option>
                            <option value="">Villa</option>
                            <option value="">Duplex</option>
                            <option value="">Commercial</option>
                            <option value="">Residential</option>
                        </select>

                        <select name="property" id="property" className='w-68 h-12 rounded-lg border-2 border-gray-300 flex shrink text-gray-500'>
                            <option value="" className='border-2 border-gray-300 min-h-10'>Select Location</option>
                            <option value="">Ameerpet</option>
                            <option value="">Miyapur</option>
                            <option value="">Banjara Hills</option>
                            <option value="">Madikonda</option>
                        </select>

                        <select name="property" id="property" className='w-68 h-12 rounded-lg border-2 border-gray-300 flex shrink text-gray-500'>
                            <option value="" className='border-2 border-gray-300 min-h-10'>All Type</option>
                            <option value="">2+ Rooms</option>
                            <option value="">3+ Rooms</option>
                            <option value="">4+ Rooms</option>
                            <option value="">5+ Rooms</option>
                        </select>

                        <select name="property" id="property" className='w-68 h-12 rounded-lg border-2 border-gray-300 flex shrink text-gray-500'>
                            <option value="" className='border-2 border-gray-300 min-h-10'>Most Popular</option>
                            <option value="">Villa</option>
                            <option value="">Duplex</option>
                            <option value="">Commercial</option>
                            <option value="">Residential</option>
                        </select>
                    </div>

                    <div className='status p-6 flex flex-col gap-2 shadow-xl'>
                        <h2>Status of Property</h2>
                        <ul className='list-disc text-gray-500 flex flex-col gap-3 list-inside'>
                            <li className='hover:text-real-green hover:cursor-pointer'>For Rent</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>For Sale</li>
                        </ul>
                    </div>
                    <div className='amenities p-6 flex flex-col gap-2 shadow-xl'>
                        <h2>Ameneties</h2>
                        <ul className='list-disc text-gray-500 flex flex-col gap-3 list-inside'>
                            <li className='hover:text-real-green hover:cursor-pointer'>Air Conditioning</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Central Heating</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Cleaning Services</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Dining Room</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Dishwasher</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Family Room</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Living Room</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Balcony</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Onsite Parking</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>Wardrobe</li>
                        </ul>
                    </div>
                </div>
                <SiteInfo />
            </div>
        </div>
    )
}