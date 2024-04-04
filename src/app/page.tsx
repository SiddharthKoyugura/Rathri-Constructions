import Image from "next/image";
import styles from './page.module.css';
import Featured from '../components/Featured/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons';


export default function Home() {
  return (
    <div>
      <div className={styles.background}>
        <div className="text-4xl text-white text-center">Welcome to Rathri constructions</div>  
      </div>      
      <div className="flex justify-center -mt-28 outerDiv">
        <div className="w-4/5">
          <div className="flex justify-center">
            <button className="w-24 h-10 border-r-2 border-slate-500 text-black text-xl rounded-t-md hover:text-white transition ease-in-out delay-150 bg-white hover:bg-stone-800 duration-300 ...">Buy</button>
            <button className="w-24 h-10 rounded-t-sm hover:text-white text-black text-xl rounded-t-md transition ease-in-out delay-150 bg-white hover:bg-stone-800 duration-300 ...">Rent</button>
          </div>

          <div className=" flex gap-10 text-lg justify-between p-4 bg-white rounded-lg shadow-2xl sm:flex-col sm:gap-3">
            <div className="w-1/4 h-20 flex flex-col sm:w-full">
              <p>search property</p>
              <div className="flex gap-3 px-2 items-center border-2 border-gray-300 rounded-md">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{width:"20px", height:"20px", color:"gray"}} />
                <input type="search" placeholder="search" className="h-10 flex shrink"/>
              </div>  
            </div>
            <div className="w-1/4 h-20 flex flex-col sm:w-full">
              <p>location</p>
              <div className="flex gap-3 px-2 items-center border-2 border-gray-300 shrink rounded-md">
                <FontAwesomeIcon icon={faCompass} style={{width:20, height:20, color:"gray"}} />
                <select className="h-10 w-full flex shrink sm:w-full">
                  <option>input location</option>
                  <option>Ghatkesar</option>
                  <option>Medipally</option>
                  <option>Narepally</option>
                  <option>Yamnampet</option>
                </select>
              </div> 
            </div>
            <div className="w-1/4 h-20 flex flex-col sm:w-full">
              <p>property type</p>
              <select name="" id="" className="h-10 border-2 border-gray-300 flex shrink rounded-md">
                <option>All types</option>
                <option value="">Luxary</option>
                <option value="">Classic</option>
                <option value="">Retro</option>
                <option value="">Modern</option>
              </select>
            </div>

            <div className="w-1/4 h-20 flex items-center gap-10 sm:w-full">
              <button className="border border-gray-300 h-10 w-1/3 mt-4 rounded-md">Search</button>
              <div>Advanced Search</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-20 w-full sm:p-4">
        <div className="titles" >
          <h1 className="text-xl">Features</h1>
          <h2 className="text-4xl text-real-green">Featured Property</h2>
        </div>
        <Featured />  
      </div>
      <div className="text-white">
          <section className={styles.loanBg}>
            <div className="text-4xl text-white shrink text-center">
              Looking to Buy a New Property or  Sell an Existing One?
            </div>
          </section>
      </div>  
      
      <div className="bg-vlight-blue p-20 sm:p-4">
        <h3 className="text-2xl">Why Choose Us?</h3>
        <h1 className="text-3xl">Reasons To Choose Us</h1>
        <hr className="bg-black w-full h-0.5 my-10 opacity-5"></hr>
        <div className="flex justify-around mt-16 sm:flex-col sm:mt-4 sm:gap-4">
          <div className="sm:flex flex-col items-center">
            <Image src="/homeLogo2.png" alt="not found" width={100} height={80}/>
            <h2 className="my-4 text-xl">Excellent Reputation</h2>
            <p className="text-light-gray sm:text-center">Lorem ipsum dolor sit consectetur sed<br/> eiusm tempor.</p>
          </div>
          <hr className="bg-black h-32 w-px opacity-5 sm:hidden"></hr>
          <div className="sm:flex flex-col items-center">
            <Image src="/agentLogo.png" alt="not found" width={100} height={80}/>
            <h2 className="my-4 text-xl">Best Local Agents</h2>
            <p className="text-light-gray sm:text-center">Lorem ipsum dolor sit consectetur sed<br/> eiusm tempor.</p>
          </div>
          <hr className="bg-black h-32 w-px opacity-5 sm:hidden"></hr>
          <div className="sm:flex flex-col items-center">
            <Image src="/service.png" alt="not found" width={100} height={80}/>
            <h2 className="my-4 text-xl">Personalized Service</h2>
            <p className="text-light-gray sm:text-center">Lorem ipsum dolor sit consectetur sed<br/> eiusm tempor.</p>
          </div>
        </div>
      </div>

      <div className="font-sans flex flex-col items-center gap-10 my-20 sm:p-2">
        <div className="text-real-green text-xl font-semibold">Our Agents</div>
        <h1 className="text-black text-3xl font-bold sm:text-2xl">Meet Our Excellent Agents</h1>
        <div className="flex gap-8 sm:flex-col sm:p-4">
          <div className="flex flex-col items-center">
            <Image src="https://azim.commonsupport.com/Realshed/assets/images/team/team-6.jpg" width={380} height={280} alt="not"/>
            <div className="flex flex-col items-center bg-white w-5/6 p-7 rounded-lg -mt-20 shadow-2xl">
              <div className="text-2xl font-semibold">Katherine Pierce</div>
              <div className="font-medium text-light-gray my-3">Senior Agent</div>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faFacebookF} style={{width:"15px",height:"25px"}}/></div>
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faTwitter} style={{width:"25px",height:"25px"}}/></div>
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faWhatsapp} style={{width:"25px",height:"25px"}}/></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://azim.commonsupport.com/Realshed/assets/images/team/team-7.jpg" width={380} height={280} alt="not" />
            <div className="flex flex-col items-center bg-white w-5/6 p-7 rounded-lg -mt-20 shadow-2xl">
              <div className="text-2xl font-semibold">Kai Parker</div>
              <div className="font-medium text-light-gray my-3">Senior Agent</div>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faFacebookF} style={{width:"15px",height:"25px"}}/></div>
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faTwitter} style={{width:"25px",height:"25px"}}/></div>
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faWhatsapp} style={{width:"25px",height:"25px"}}/></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="https://azim.commonsupport.com/Realshed/assets/images/team/team-8.jpg" width={380} height={280} alt="not" />
            <div className="flex flex-col items-center bg-white w-5/6 p-7 rounded-lg -mt-20 shadow-2xl">
              <div className="text-2xl font-semibold">Isobel</div>
              <div className="font-medium text-light-gray my-3">Senior Agent</div>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faFacebookF} style={{width:"15px",height:"25px"}}/></div>
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faTwitter} style={{width:"25px",height:"25px"}}/></div>
                <div className="w-12 h-12 flex justify-center items-center border hover:bg-real-green transition-colors duration-300 text-light-gray hover:text-white rounded-lg"><FontAwesomeIcon icon={faWhatsapp} style={{width:"25px",height:"25px"}}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="objective ">
        <section className={styles.goalBg}>
          <div className="text-4xl text-white text-center">
            One stop Home Destinaations!!
          </div>
        </section>
      </div>

      <div className="popular_places flex justify-evenly p-20 sm:flex-col sm:p-4">
        <div className="flex flex-col gap-7">
          <h3 className="text-xl font-medium text-real-green">Top Places</h3>
          <h1 className="text-4xl font-semibold">Most Popular Places</h1>
          <p className="text-light-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <ul className="text-lg text-slate-700 font-medium flex flex-col gap-5">
            <li>Banjara Hills</li>
            <li>Jubliee Hills</li>
            <li>Manikonda</li>
            <li>Kothapet</li>
            <li>Ghatkesar</li>
          </ul>
        </div>
        <div className="flex justify-around sm:flex-col sm:gap-4">
          <Image src="https://azim.commonsupport.com/Realshed/assets/images/resource/place-5.jpg" width={400} height={100} alt="not" />
          <div className="-ml-32 flex items-center rounded-lg transition-transform will-change-transform sm:-ml-0">
            <Image src="https://azim.commonsupport.com/Realshed/assets/images/resource/place-6.jpg" width={300} height={200} alt="not" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}