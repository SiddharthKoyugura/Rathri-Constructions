import styles from '../page.module.css';
import Image from 'next/image';
export default function Aboutus()
{
    return(
        <div className='flex flex-col justify-center items-center my-10 gap-5'>
            <h1 className='text-3xl font-semibold'>Our achievements aree</h1>
            {/* <div className={styles.slider}>
                <div className={styles.slide}>
                    <h1>2000</h1>
                    <p>Ready to move in homes</p>
                </div>
                <div className={styles.slide}>Township</div>
                <div className={styles.slide}>Independent Homes</div>
                <div className={styles.slide}>Roads</div>  className='relative w-[32rem] h-96'
                <div className={styles.slide}>8</div>
            </div>  */}

            <div className='flex flex-col items-center'>
                <div><Image src="/services/furnitured.jpg" alt='not found' width={700} height={500}/></div>
                <h1 className='text-3xl text-real-green font-medium'>Ready to move in</h1>
                <h1 className='text-2xl'>2000 properties</h1>
                <p className='text-gray-500'>comfortable homes available for immediate use</p>
            </div>

            <div className='flex flex-col items-center'>
                <div><Image src="/services/apartment.jpg" alt='not found' width={700} height={500}/></div>
                <h1 className='text-3xl text-real-green font-medium'>Townships</h1>
                <h1 className='text-2xl'>3000 properties</h1>
                <p className='text-gray-500'>Redefining community living</p>
            </div>

            <div className='flex flex-col items-center'>
                <div><Image src="/services/independent_home.jpg" alt='not found' width={700} height={500}/></div>
                <h1 className='text-3xl text-real-green font-medium'>Independent house</h1>
                <h1 className='text-2xl'>1000 properties</h1>
                <p className='text-gray-500'>Enjoy higher degree of freedom & privacy</p>
            </div>
        </div>
        
    )
}