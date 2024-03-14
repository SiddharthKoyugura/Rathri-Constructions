import Image from "next/image"
export default function page()
{
    return(
        <div className="flex flex-col justify-center">
            <h1>Our Services..</h1>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between mx-28">
                    <div>
                        <Image src="/services/furniture2.jpg" width={550} height={350} alt="not found" />
                        <h2>Ready to move in</h2>
                    </div>
                    <div>
                        <Image src="/services/township.jpg" width={550} height={350} alt="not found" />
                        <h2>Townships</h2>
                    </div>
                </div>
                <div className="flex justify-between mx-28">
                    <div>
                        <Image src="/services/independent_home.jpg" width={550} height={350} alt="not found" />
                        <h2>Independent homes</h2>
                    </div>
                    <div>
                        <Image src="/services/roads.jpg" width={570} height={350} alt="not found" />
                        <h2>Roads</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}