import { Button } from '@chakra-ui/react';
import { NavLink, Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import pic1 from './pics/IMG-20241118-WA0012.jpg'
import pic2 from './pics/IMG-20241118-WA0013.jpg'
import pic3 from './pics/IMG-20241118-WA0014.jpg'
import pic4 from './pics/IMG-20241118-WA0015.jpg'
import pic5 from './pics/IMG-20241118-WA0016.jpg'
import Carousel from './Carousel';
import { AiFillYoutube } from "react-icons/ai";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose, MdHome, MdHomeFilled } from 'react-icons/md';
import { BsLockFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa6';

const vids = [
    {
        id: 0,
        src: pic1,
        lik: "jobs junction kushirikiana na serikali kuwasaidia wafanyakazi"
    },
    {
        id: 1,
        src: pic2,
        lik: "Jobs junction kinara huduma kwa wateja na wwatumiaji"
    },
    {
        id: 2,
        src: pic3,
        lik: "jobs junction kuongea wafanyakazi kutanua wigo wa huduma zao"
    },
    {
        id: 3,
        src: pic5,
        lik: "jobs junction kushiriki katika kusaidia wanafunzi wanaosoma katika mazingira magumu"
    }
];
export const Home = () => {
    return (
        <>
            <Carousel style={{ height: '300px' }} className="w-full relative bg-custom bg-cover  mb-40" />
            <div className="flex flex-col sm:flex-row space-x-0 justify-center z-2 mb-12">
                <div className="bg-red-800 p-4 text-gray-100 flex justify-center place-items-center h-48 w-full sm:w-60">
                    <div className='flex flex-col'>
                        <div className='text-xl font-semibold pb-8'>VERIFIED PROFESSIONALS  & EMPLOYERS</div>
                        <div className='sm:text-xs'>We source jobs directly from employers and active people looking for new jobs.
                            No duplicates. No spam. ...</div>
                    </div>
                </div>
                <div className="bg-yellow-500 p-4 h-48 flex w-full sm:w-60 place-items-center justify-center text-gray-100 ">
                    <div className='flex flex-col'>
                        <h className="text-xl font-semibold pb-8" >UP TO DATE JOBS</h>
                        <p className='sm:text-xs'>Our jobs are updated every single day so you can browse the most current listings available schools or qualified teache
                        </p>
                    </div>
                </div>
                <div className="bg-blue-700 p-4 text-gray-100 h-48 w-full sm:w-60 flex">
                    <div className='flex flex-col justify-center'>
                        <h className="text-xl font-semibold pb-8" >TRUSTED BY THOUSANDS.</h>
                        <p className="sm:text-xs"> Welcome to the platform trusted by thousands of rmployers and job seekers.</p>
                    </div>
                </div>
            </div>

            <div className="flex m-auto flex-col sm:flex-row w-100 px-1 justify-center sm:space-x-2 items-center">
                <div className='bg-red-400 m-auto w-full sm:w-1/3 rounded-lg'><img src={pic2} className='w-full h-72' /></div>
                <div className=' w-full sm:w-1/2 p-8'>
                    <p>EMPLOYEES NETWORKING CENTER</p>
                    <h2 className='font-bold text-3xl'>JOBS’ JUNCTION</h2>
                    <p className='text-md text-justify sm:text-xs'>Jobs’ Junction is a software platform provided by jobs junction organisation with the main objective to eliminate unemployment for Teachers and Schools.
                        On one side we pave ways for professionals to dig up jobs of their need. On the second side is to help organisations or employers to have employees with their rank who can help them to
                        achieve their mission and visions with the competitive knowledge and strategies.

                        Jobs Junction is now here with Jobs’ Networking Centre to solve these problems between employers demands and
                        employees needs so that Organisations to get qualified employee(s) in accordance</p>


                </div>
            </div>
            <div className="pt-16 flex justify-center">
                <div className=" px-1flex flex-col place-items-center">
                    <p className='font-sans font-bold'>JOIN JOBS’ NETWORKING CENTER</p>
                    <p className="font-sans text-sm text-justify sm:text-md break-words mx-2 text-light">Organisations Get the right personnel. Professionals Get Hired</p>
                </div>

            </div>

            <div className="flex flex-col space-y-8 mx-4 sm:mx-16">
                <div className="flex items-center">
                    <div className='sm:h-8 h-4 w-4  sm:w-8 bg-purple-400 rounded-full p-2 justify-center place-items-center text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-sans font-bold">ABOUT US</h>
                        <p className='font-sans sm:text-xs break-words font-semilight'>Our the main objective to eliminate unemployment scarcity and barriers for Employees and Organisations. On one side we pave ways for Employees to dig up Jobs of their need</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className='sm:h-8 h-4 w-4  sm:w-8 p-2 bg-purple-400 rounded-full justify-center place-items-center text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-sans font-bold">OUR MISSION</h>
                        <p className='font-sans font-semilight sm:text-xs'>Our the main objective to eliminate unemployment for Employees and Organisations. On one side we pave ways for Employees to dig up Job Vacancies of their Need</p>
                    </div>
                </div>
                <div className="flex items-center">
                 <div className='sm:h-8 h-4 w-4  sm:w-8 p-2 bg-purple-400 rounded-full text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-sans font-bold">OUR VISION</h>
                        <p className='font-sans font-semilight break-words sm:text-xs'>Our the main objective to eliminate unemployment for Employees and Employers
                            s. On one side we pave ways for Professionals looking for employment to dig up Jobs of their Need</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-8 text-md sm:text-sm sm:flex-row sm:space-x-4 justify-center  py-10  ">
                <div className=" sm:border-r border-rose-800 h-48 space-y-4 w-full sm:w-72 flex flex-col justify-center place-items-center">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={pic1} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-sans">JOB ASSISTANCE PORTAL</h>
                    <p className='text-justify'>We help Organisatins demands and employees needs so that organisations to get qualified employee(s) in accordance</p>

                </div>
                <div className=" sm:border-r mb-5 border-blue-800 flex space-y-4 flex-col justify-center place-items-center h-48 w-full sm:w-72">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={pic1} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-sans">WE HELP EMPLOYMENT SEEKERS</h>
                    <p className='text-justify'> We help employees to find a job Vacancies of his/her desire on time in preferred location under open agreement between.</p>
                </div>
                <div className=" flex flex-col w-full justify-center space-y-4 place-items-center h-48 sm:w-72">
                    <div className="h-12 w-12 rounded-lg bg-red-700"><img src={pic1} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-sans">WE HELP ORGANISATIONS</h>
                    <p className='text-justify '>In Second site we help Organisatins to get employee(s) of their rank/type/choices who can help organisations to
                        meet their vision and mission in competitive ways and strategies</p>
                </div>
            </div>


            <div className="py-6 flex justify-center">
                <div className="flex px-4 flex-col place-items-center">
                    <h className='font-sans font-bold'>FOR EMPLOYERS AND PRIVATE ORGANISATONS</h>
                    <p className="font-sans text-justify text-light">WE PROVIDE JOB LINK BETWEEN PROFESSIONALS AND PRIVATE ORGANISATIONS WITHIN THE UNITED REPUBLIC OF TANZANIA IN ACCORDANCE</p>
                </div>
            </div>
            <div className="flex m-auto flex-col sm:flex-row space-y-4 sm:space-x-4 justify-center py-6  ">
                <div className="bg-red-500 h-60 w-full sm:w-72"><img src={pic2} className='w-full h-60' /></div>
                <div className="bg-yellow-500 h-60 w-full sm:w-72"><img src={pic4} className='w-full h-60' /></div>
                <div className="bg-blue-400 h-60 w-full sm:w-72"><img src={pic5} className='w-full h-60' /></div>
            </div>

            <div className="flex flex-col my-16 w-full">
                <div className="flex justify-around py-4">
                    <h className="font-sans text-lg flex items-center"><AiFillYoutube className="text-red-700 mx-4 text-xl" />Our youtube videos</h>
                    <p className="font-sans text-lg  hover:underline">View all videos</p>
                </div>
                <div className='flex flex-col m-auto sm:flex-row justify-center'>
                    {vids.map(vid =>
                        <div key={vid.id} className="flex flex-col space-y-6 relative sm:w-48 w-full h-auto py-4 border-y sm:border-x border-slate-900 mx-2 place-items-center">
                            <div className="w-80 sm:w-36 h-60 sm:h-36 bg-blue-700 rounded-xl"><img src={vid.src} className='h-full w-full rounded-lg' />
                                <AiFillYoutube className='text-red-600 absolute text-xl sm:text-sm sm:bottom-17 sm:left-6' /></div>
                            <h className="font-sans underline break-normal text-lg sm:text-xs w-80 sm:w-36">{vid.lik}</h>
                        </div>
                    )}
                </div>
            </div>


            <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 justify-center  py-10  ">
                <div className=" sm:border-r px-8 border-rose-800 h-48 space-y-4 w-full sm:w-72 flex flex-col justify-center place-items-center">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={pic1} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-sans text-lg">JOB ASSISTANCE PORTAL</h>
                    <p className='text-justify sm:text-xs text-md px-4'>We help OrganisatiOns demands and Employees IN need so that Organisations to get qualified employee(s) in accordance</p>

                </div>
                <div className="sm:border-r px-8 border-blue-800 flex space-y-4 flex-col justify-center place-items-center h-48 w-full sm:w-72">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={pic1} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-sans text-lg">WE HELP EMPLOYEES</h>
                    <p className='text-justify text-md sm:text-xs'> We help Employees to find a JOBS of his/her desire on time in preferred location under open agreement between.</p>
                </div>
                <div className=" flex flex-col px-8 justify-center space-y-4 place-items-center h-48 w-full sm:w-72">
                    <div className="h-12 w-12 rounded-lg bg-red-700"> <img src={pic1} className='w-fit h-full rounded-lg' /></div>
                    <h className="font-sans text-lg">WE HELP PRIVATE ORGANISATIONS</h>
                    <p className='text-md sm:text-xs text-justify'>In Second site we help organisations to employee(s) of their rank/type/choices who can help school to
                        meet their vision and mission in competitive ways and strategie</p>
                </div>
            </div>
        </>
    )
}

const links = ["Companies", "Forums", "Find resumes", "News"];

const NavBar = () => {
    const location = useLocation();
     const shouldDisplay = location.pathname === "/"
    const navigate = useNavigate();

    const downs = links.map(link => (<NavLink to={link || link.path} className={({isActive})=>(isActive && " underline underline-offset-4 decoration-gray-100 ") }><div className="py-2 block font-sans text-gray-100">
        <p className="px-4 w-full justify-self-end hover:font-normal  font-light">{link}</p><div className='
        hidden' >|</div>
    </div></NavLink>))
    const [menu,setMenu] = useState(false);
    return (

        <div className="bg-slate-800 w-full between ">
            <div onClick={()=> setMenu(!menu)} className=" bg-slate-800 flex p-2 justify-between text-gray-100 sm:hidden">
                {menu ? <MdClose/> : <GiHamburgerMenu/>}
               <div>{!shouldDisplay && <MdHomeFilled className="text-white text-xl right-1" onClick={()=> navigate("/")}/>}</div>
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
    const location = useLocation();
    const shouldDisplay = location.pathname === "/"
    return (
        <div className='overflow-y-auto h-dvh relative'>
            <div className="flex justify-between items-center my-6 mx-8">
                <div className="flex flex-row items-center"><img src={pic1} className='h-8 w-8 rounded-lg'/>
                <div className='flex pl-2 flex-col space-y-0'>
                <h1 className="font-sans text-slate-800 font-bold text-sm text-center">Jobs junction</h1>
                <p className="text-xs text-gray-400">place for better jobs</p>
                </div>
                </div>
                <Link to="/login"><div className="font-sans rounded-lg py-1 px-2 border bg-slate-100 border-slate-800 hover:bg-slate-800 hover:border-none flex items-center hover:text-gray-100 hover:font-normal">Log In<FaLock className='ml-2'/></div></Link>
            </div>
            <center><NavBar /></center>
            { shouldDisplay && <Home/>}
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
