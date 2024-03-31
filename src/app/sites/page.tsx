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
            <div className='text-center mt-4'><h1 className='text-2xl font-semibold'>Our Sites</h1></div>
            <div className='p-16 flex items-center gap-10 sm:flex-col sm:p-4'>
                <div className='w-80 flex flex-col gap-6 flex-shrink'>
                    <div className='property p-6 flex flex-col gap-2'>
                        <h2 className='text-real-green'>Property</h2>
                        <select name="property" id="property" className='w-68 h-12 rounded-lg border-2 border-gray-300 flex shrink text-gray-500'>
                            <option value="" className='border-2 border-gray-300 p-10'>All Type</option>
                            <option value="" className='p-20'>Villa</option>
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

                    <div className='status p-6 flex flex-col gap-2'>
                        <h2 className='text-real-green'>Status of Property</h2>
                        <ul className='list-disc text-gray-500 flex flex-col gap-3 list-inside'>
                            <li className='hover:text-real-green hover:cursor-pointer'>For Rent</li>
                            <li className='hover:text-real-green hover:cursor-pointer'>For Sale</li>
                        </ul>
                    </div>
                    <div className='amenities p-6 flex flex-col gap-2S'>
                        <h2 className='text-real-green'>Ameneties</h2>
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