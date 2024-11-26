import { Button } from '@chakra-ui/react';
import { NavLink, Link, Outlet } from "react-router-dom"
import pic1 from './pics/IMG-20241118-WA0012.jpg'
import pic2 from './pics/IMG-20241118-WA0013.jpg'
import pic3 from './pics/IMG-20241118-WA0014.jpg'
import pic4 from './pics/IMG-20241118-WA0015.jpg'
import pic5 from './pics/IMG-20241118-WA0016.jpg'
import Carousel from './Carousel';
import { AiFillYoutube } from "react-icons/ai";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { BsLockFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa6';


const links = ["home", "Companies", "Forums", "Find resumes", "News"];

const NavBar = () => {

    const downs = links.map(link => (<NavLink to={link} className={({isActive})=>(isActive && " underline underline-offset-4 decoration-gray-100 ") }><div className="py-2 block font-sans text-gray-100">
        <p className="px-4 w-full  hover:font-normal  font-light">{link}</p><div className='
        hidden' >|</div>
    </div></NavLink>))
    const [menu,setMenu] = useState(false);
    return (

        <div className="bg-slate-800 w-full justify-start ">
            <div onClick={()=> setMenu(!menu)} className=" bg-slate-900 p-2 justify-self-start text-gray-100 sm:hidden">
                {menu ? <MdClose/> : <GiHamburgerMenu/>}
                </div>
                <div className="bg-slate-800 w-full flex-col sm:flex-row  px-2 py-1 flex justify-self-start ">
            {menu && downs }</div>
            <div className="sm:bg-slate-800 hidden justify-self-start sm:w-full sm:flex sm:flex-row px-2 py-1">
                { downs }
            </div>
       </div>
    );
}

const info1 = [
    {
        id: 0,
        heading: "",
        detail:""
    },
    {
        id: 1,
        heading: "",
        detail:""
    },
    {
        id: 2,
        heading: "",
        detail:""
    }
]
const Layout = () => {
    return (
        <div className='overflow-y-auto h-dvh relative'>
            <div className="flex justify-between items-center my-6 mx-8">
                <div className="flex flex-row items-center"><img src={pic1} className='h-8 w-8 rounded-lg'/>
                <div className='flex pl-2 flex-col space-y-0'>
                <h1 className="font-sans text-slate-800 font-bold text-sm text-center">Jobs junction</h1>
                <p className="text-xs text-gray-400">place for better jobs</p>
                </div>
                </div>
                <Link to="/jobs-junction/login"><div className="font-sans rounded-lg py-1 px-2 border bg-slate-100 border-slate-800 hover:bg-slate-800 hover:border-none flex items-center hover:text-gray-100 hover:font-normal">Log In<FaLock className='ml-2'/></div></Link>
            </div>
            <center><NavBar /></center>
                  <Outlet/>





                <div className="w-full bg-slate-900 h-60 pt-12 text-gray-100">
                <div className='flex justify-between sm:justify-around'>
                  <div className='flex flex-row space-x-12 ml-8'>
                 
                    <div className='flex flex-col'>
                       <h1 className='text-xl'>CORE PROJECTS</h1>
                     <div className='text-xs font-semilight'>                   
                    <p>Teachers' Junction</p>
                    <p>Education for Future</p>
                    <p>Inter School Exams</p>
                    <p>Teachers Training Program</p>
                    <p>Education Directory</p>
                    </div>
                    </div>
                    </div>
                    <div className='flex flex-col space-y-8'>
                          <div className='flex space-x-6'>
                            <div className='bg-green-500 h-12 w-12 rounded-lg'>
                                <img src={pic1} className='w-fit h-full rounded-lg'/>
                            </div>
                            <div>
                             <h>jobs junction</h>
                             <p> welcome again</p>
                            </div>
                          </div>
                         <div className='text-xs'>
                          �2012 - 2024 Jobs Junction. All rights reserved<br/>

                           TERMS OF USEPRIVACY POLICY#Teachers
                           </div>


                    </div>

 

                     </div>
                </div>
            
        </div>
    )
}
export default Layout
