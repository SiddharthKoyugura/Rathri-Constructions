import Image from "next/image"
export default function contact()
{
    return(
        <div>
            <div className=" flex justify-center items-center gap-6 p-4 sm:flex-col">
                <form action="" className="flex flex-col gap-10  w-2/5 p-4 sm:w-screen">
                    <h1 className="text-3xl font-semibold">Contact us</h1>
                    <input type="text" placeholder="Enter your name" className="border-b border-black h-12 flex-shrink"/>
                    <input type="email" placeholder="Enter your email address" className="border-b border-black h-12 "/>
                    <input type="text" placeholder="Enter your message" className="border-b border-black h-20"/>
                    <button className="border border-black w-24">Submit</button>
                </form>

                <div>
                    <Image src="/contactus.jpg" alt="not found" width={550} height={350}/>
                </div>
            </div>
            <div>another</div>
        </div>
        
    )
}









