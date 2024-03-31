import styles from '../page.module.css';
import Image from 'next/image';
export default function Aboutus()
{
    return(
        <div className='flex flex-col justify-center items-center m-10 gap-5'>
            <h1 className='text-3xl font-semibold'>Our achievements are</h1>
            <div className='flex items-center sm:flex-col sm:items-center sm:m-10'>
                <div><Image src="/services/furnitured.jpg" alt='not found'className='rounded-[12px]'  width={700} height={500}/></div>
                <div className='w-[350px] h-[175px] flex flex-col bg-[rgba(255,255,255,.8)] shadow-4xl rounded-[15px] ml-[-50px] p-[30px] sm:-mt-5 sm:ml-0'>
                    <h1 className='text-3xl text-real-green font-medium'>Ready to move in</h1>
                    <h1 className='text-2xl'>2000 properties</h1>
                    <p className='text-gray-500'>comfortable homes available for immediate use</p>
                </div>
            </div>

            <div className='flex items-center sm:flex-col sm:items-center sm:m-10'>
                <div className='order-2 sm:order-1'><Image src="/services/apartment.jpg" alt='not found' width={700} height={500} className='rounded-[12px]'/></div>
                <div className='w-[350px] h-[175px] order-1 sm:order-2 flex flex-col bg-[rgba(255,255,255,.8)] shadow-4xl rounded-[15px] mr-[-60px] p-[30px] z-10 sm:-mt-5 sm:mr-0 '>
                    <h1 className='text-3xl text-real-green font-medium'>Townships</h1>
                    <h1 className='text-2xl'>3000 properties</h1>
                    <p className='text-gray-500'>Redefining community living</p>
                </div>
            </div>

            <div className='flex items-center sm:flex-col sm:items-center sm:m-10'>
                <div><Image src="/services/independent_home.jpg" alt='not found' width={700} height={500} className='rounded-[12px]'/></div>
                <div className='w-[350px] h-[175px] flex flex-col bg-[rgba(255,255,255,.8)] shadow-4xl rounded-[15px] ml-[-50px] p-[30px] sm:-mt-5 sm:ml-0 '>
                    <h1 className='text-3xl text-real-green font-medium'>Independent house</h1>
                    <h1 className='text-2xl'>1000 properties</h1>
                    <p className='text-gray-500'>Enjoy higher degree of freedom & privacy</p>
                </div>
            </div>
        </div>
        
    )
}