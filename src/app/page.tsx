import Image from "next/image";
import bgImg from "../../public/back2.jpg";
import styles from './page.module.css';
import Featured from '../../components/Featured/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div>
      <div className={styles.background}>
        <div className="text-4xl text-white text-center">Welcome to Rathri constructions</div>  
      </div>      
      <div className="flex justify-center -mt-32 outerDiv">
        <div className="w-fill">

          <div className="flex justify-center gap-2">
            <button className="w-20 h-10 rounded-lg hover:text-white transition ease-in-out delay-150 bg-real-green hover:-translate-y-1 hover:scale-110 hover:bg-stone-800 duration-300 ...">Buy</button>
            <button className="w-20 h-10 rounded-lg hover:text-white transition ease-in-out delay-150 bg-real-green hover:-translate-y-1 hover:scale-110 hover:bg-stone-800 duration-300 ...">Rent</button>
          </div>

          <div className=" flex gap-10 justify-between p-4 bg-white rounded-lg shadow-2xl sm:flex-col sm:gap-3">
            <div className=" h-20 flex flex-col">
              <p>search property</p>
              <input type="search" placeholder="search" className="h-10 border-2 border-gray-300 flex shrink"/>
            </div>
            <div className=" h-20 flex flex-col">
              <p>location</p>
              <select className="w-56 h-10 border-2 border-gray-300 flex shrink">
                <option>input location</option>
                <option>Ghatkesar</option>
                <option>Medipally</option>
                <option>Narepally</option>
                <option>Yamnampet</option>
              </select>
            </div>
            <div className="h-20 flex flex-col">
              <p>property type</p>
              <select name="" id="" className="w-56 h-10 border-2 border-gray-300 flex shrink">
                <option>All types</option>
                <option value="">Luxary</option>
                <option value="">Classic</option>
                <option value="">Retro</option>
                <option value="">Modern</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="p-20 w-full sm:p-4">
        <div className="titles" >
          <h1>Features</h1>
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
        <h3>Why Choose Us?</h3>
        <h1>Reasons To Choose Us</h1>
        <hr className="bg-black w-full h-0.5 my-10 opacity-5"></hr>
        <div className="flex justify-around mt-16 sm:flex-col sm:mt-4 sm:gap-4">
          <div className="sm:flex flex-col items-center">
            <Image src="./homeLogo2.png" alt="not found" width={100} height={80}/>
            <h2 className="my-4">Excellent Reputation</h2>
            <p className="text-light-gray">Lorem ipsum dolor sit consectetur sed<br/> eiusm tempor.</p>
          </div>
          <hr className="bg-black h-32 w-px opacity-5 sm:hidden"></hr>
          <div className="sm:flex flex-col items-center">
            <Image src="./agentLogo.png" alt="not found" width={100} height={80}/>
            <h2 className="my-4">Best Local Agents</h2>
            <p className="text-light-gray">Lorem ipsum dolor sit consectetur sed<br/> eiusm tempor.</p>
          </div>
          <hr className="bg-black h-32 w-px opacity-5 sm:hidden"></hr>
          <div className="sm:flex flex-col items-center">
            <Image src="./service.png" alt="not found" width={100} height={80}/>
            <h2 className="my-4">Personalized Service</h2>
            <p className="text-light-gray">Lorem ipsum dolor sit consectetur sed<br/> eiusm tempor.</p>
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