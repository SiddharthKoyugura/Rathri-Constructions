export default function addHome()
{
    return(
        <div className="">
            <div className="flex justify-center p-4 shadow-2xl">
                <form action="" className="flex gap-4 flex-col my-6 w-2/6 text-lg sm:w-full sm:p-2">
                    <div className="flex gap-1 items-start flex-col sm:items-start">
                        <label htmlFor="houseName">Name</label>
                        <input type="text" name="houseName" id="" placeholder="Name of house" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0"/>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="" placeholder="Enter Location" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0"/>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="facing">Facing</label>
                        <input type="text" name="facing" id="" placeholder="Enter house facing" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0"/>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="type">Type</label>
                        <select name="type" id="" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0">
                            <option value="">1bhk</option>
                            <option value="">2bhk</option>
                            <option value="">3bhk</option>
                            <option value="">4bhk</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="sqft">Sqft</label>
                        <input type="number" name="sqft" placeholder="Enter sqft" id="" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0"/>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="desc">Description</label>
                        <textarea name="desc" id="" placeholder="Enter description" className="border border-black h-20 w-full flex-shrink px-4 rounded-md outline-0"></textarea>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" name="rating" id="" placeholder="Enter rating" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0"/>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="likes">Likes</label>
                        <input type="number" name="likes" id="" placeholder="Enter no.of likes" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0"/>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="review">Review</label>
                        <input type="text" name="review" id="" placeholder="Enter review" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0"/>
                    </div>
                    <div className="flex flex-col gap-1 items-start">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="" placeholder="Enter price" className="border border-black h-12 w-full flex-shrink px-4 rounded-md outline-0"/>
                    </div>
                    <div className="flex flex-col gap-1 items-start w-36  m-auto">
                        <button type="submit" className="shadow-3xl h-12 w-full flex-shrink px-4 rounded-md outline-0">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}