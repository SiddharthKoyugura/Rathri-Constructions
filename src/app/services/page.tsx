import Image from "next/image"
export default function page()
{
    return(
        <div className="flex flex-col justify-center items-center my-4">
            <h1 className="text-3xl font-semibold my-10">Our Services</h1>
            <div className="flex flex-col gap-6">
                <div className="flex flex-wrap justify-center gap-10 p-4 sm:flex-col">

                    <div>
                        <div className='relative w-[28rem] h-80 sm:w-full'><Image src="/services/furniture2.jpg" layout="fill" alt="not found" className="rounded-lg" /></div>
                        <div className="p-2">
                            <h2 className="text-2xl font-medium text-real-green">Ready to move in</h2>
                            <p className="">Comfortable homes available for immediate use</p>
                        </div>    
                    </div>
                    <div>
                        <div className='relative w-[28rem] h-80 sm:w-full'><Image src="/services/township.jpg" layout="fill" alt="not found" className="rounded-lg" /></div>                   
                        <div className="p-2">
                            <h2 className="text-2xl font-medium text-real-green">Townships</h2>
                            <p>Redefining communitity living</p>
                        </div>    
                    </div>
                    <div>
                        <div className='relative w-[28rem] h-80 sm:w-full'><Image src="/services/independent_home.jpg" layout="fill" alt="not found" className="rounded-lg" /></div>
                        <div className="p-2">
                            <h2 className="text-2xl font-medium text-real-green">Independent homes</h2>
                            <p>Enjoy higher degree of Freedom and Privacy</p>
                        </div>
                        
                    </div>
                    <div>
                        <div className='relative w-[28rem] h-80 sm:w-full'><Image src="/services/roads.jpg" layout="fill" alt="not found" className="rounded-lg" /></div>
                        <div className="p-2">
                            <h2 className="text-2xl font-medium text-real-green">Roads</h2>
                            <p>Easily travel from one community to another</p>
                        </div>   
                    </div>
                    <div>
                        <div className='relative w-[28rem] h-80 sm:w-full'><Image src="/services/home_loan.jpg" layout="fill" alt="not found" className="rounded-lg" /></div>
                        <div className="p-2">
                            <h2 className="text-2xl font-medium text-real-green">Home loan</h2>
                            <p>Provides financial assistance from banks</p>
                        </div>
                    </div>
                    <div>
                        <div className='relative w-[28rem] h-80 sm:w-full'><Image src="/services/realest_dev.jpg" layout="fill" alt="not found" className="rounded-lg" /></div>
                        <div className="p-2">
                            <h2 className="text-2xl font-medium text-real-green">Real Estate development</h2>
                            <p>Luxury homes for less money</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
