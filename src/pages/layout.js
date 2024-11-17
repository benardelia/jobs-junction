import { Button } from '@chakra-ui/react';
import { NavLink, Link, Outlet } from "react-router-dom"
import pic1 from './pics/astronaut-bitcoin-ethereum-cryptocurrency-planet-earth-3840x2160-8247.jpg'
import pic2 from './pics/bright-marbles-5k-3840x2160-18216.png'
import pic3 from './pics/coffee-cup-refill-3840x2160-13666.png'
import pic4 from './pics/gwen-stacy-logo-3840x2160-18202.jpg'
import pic5 from './pics/coding-black-3840x2160-13653.png'
import Carousel from './Carousel';
import { AiFillYoutube } from "react-icons/ai";



const links = ["Jobs", "Salaries", "Companies", "Forums", "Find resumes"];

const NavBar = () => {
    return (
        <div className="bg-slate-800 w-full flex px-2 py-1 flex justify-self-center ">
            {links.map(link => (<NavLink to={link}><div className="py-2 block flex  font-sans text-gray-100">
                <p className="px-4 block hover:text-gray-100  hover:font-normal  font-light">{link}</p><div>|</div>
            </div></NavLink>))
            }</div>
    );
}
const vids = [
    {
        id: 0,
        src: pic1,
        lik: "teachers  junction kushirikiana na serikali kuwasaidia walimu"
    },
    {
        id: 1,
        src: pic2,
        lik: "teachers  junction kushirikiana na serikali kuwasaidia walimu"
    },
    {
        id: 2,
        src: pic3,
        lik: "teachers  junction kushirikiana na serikali kuwasaidia walimu"
    },
    {
        id: 3,
        src: pic4,
        lik: "teachers  junction kushirikiana na serikali kuwasaidia walimu"
    }
];
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
        <div className='overflow-y-auto h-dvh'>
            <div className="flex justify-between items-center mx-8">
                <h1 className="font-sans  py-4 text-slate-800 font-semibold text-xl text-center">Jobs junction</h1>
                <Link to="/login"><div className='font-sans rounded-lg py-1 px-2 border bg-slate-100 border-slate-800 hover:bg-slate-800 hover:border-none hover:text-gray-100 hover:font-normal'>Log In</div></Link>
            </div>
            <center><NavBar /></center>
            <Carousel style={{height: '300px'}} className="w-full relative bg-custom bg-cover  mb-40"/>
                <div className="flex flex-row space-x-0 justify-center z-2 mb-12">
                    <div className="bg-red-800 p-4 text-white flex justify-center place-items-center space-y-6 h-48 w-60">
                        <div className='flex flex-col pl-6 '>
<div>VERIFIED PROFESSIONALS  & EMPLOYERS</div>
<div className='text-xs'>We source jobs directly from employers and active people looking for new jobs.
     No duplicates. No spam. ...</div>
     </div>
                    </div>
                    <div className="bg-yellow-500 p-4 h-48 flex w-60 place-items-center justify-center text-gray-100 flex">
                    <div className='flex flex-col  space-y-6 '>
                     <h>UP TO DATE JOBS</h>   
<p className='text-xs'>Our jobs are updated every single day so you can browse the most current listings available schools or qualified teache
</p>
                </div>
                    </div>
                    <div className="bg-blue-400 p-4 text-gray-100 h-48 w-60 flex">
                    <div className='flex flex-col justify-center space-y-6'>
                     <h>TRUSTED BY THOUSANDS.</h>   
<p className="text-xs font-semilight"> Welcome to the platform trusted by thousands of rmployers and job seekers.</p>
                </div>
                    </div>
                </div>

            <div className="flex flex-row w-100 mx-8 justify-center space-x-2 items-center">
                <div className='bg-red-400 w-1/3'><img src={pic1} className='w-full h-72'/></div>
                <div className=' w-1/2 p-8'>
               <p>EMPLOYEES NETWORKING CENTER</p> 
<h2 className='font-bold text-3xl'>JOBS’ JUNCTION</h2>
<p className='text-xs'>Jobs’ Junction is a software platform provided by jobs junction organisation with the main objective to eliminate unemployment for Teachers and Schools.
 On one side we pave ways for professionals to dig up jobs of their need. On the second side is to help organisations or employers to have employees with their rank who can help them to
  achieve their mission and visions with the competitive knowledge and strategies.

Jobs Junction is now here with Jobs’ Networking Centre to solve these problems between employers demands and 
employees needs so that Organisations to get qualified employee(s) in accordance</p>


                </div>
            </div>
            <div className="pt-16 flex justify-center">
                <div className="flex flex-col place-items-center">
                    <p className='font-sans font-bold'>JOIN JOBS’ NETWORKING CENTER</p>
                    <p className="font-sans text-light">Organisations Get the right personnel. Professionals Get Hired</p>
                </div>

            </div>

            <div className="flex flex-col space-y-8 mx-16">
                <div className="flex items-center">
                    <div className='h-8  w-8 bg-purple-400 rounded-full p-2 justify-center place-items-center text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-sans font-bold">ABOUT US</h>
                        <p className='font-sans text-xs font-semilight'>Our the main objective to eliminate unemployment scarcity and barriers for Employees and Organisations. On one side we pave ways for Employees to dig up Jobs of their need</p>
                    </div>
                </div>
                <div className="flex items-center ">
                    <div className='h-8 w-8 p-2 bg-purple-400 rounded-full justify-center place-items-center text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-sans font-bold">OUR MISSION</h>
               <p className='font-sans font-semilight text-xs'>Our the main objective to eliminate unemployment for Employees and Organisations. On one side we pave ways for Employees to dig up Job Vacancies of their Need</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className='h-8 w-8 p-2 bg-purple-400 rounded-full text-white mx-4'></div>
                    <div className="flex flex-col">
                        <h className="font-sans font-bold">OUR VISION</h>
                        <p className='font-sans font-semilight text-xs'>Our the main objective to eliminate unemployment for Employees and Employers
                            s. On one side we pave ways for Professionals looking for employment to dig up Jobs of their Need</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-4 justify-center  py-10  ">
                    <div className=" border-r border-rose-800 h-48 space-y-4 w-72 flex flex-col justify-center place-items-center">
                       <div className="h-12 w-12 rounded-lg bg-red-700"></div>
                       <h className="font-sans">JOB ASSISTANCE PORTAL</h>
                       <p  className='text-xs'>We help Organisatins demands and employees needs so that organisations to get qualified employee(s) in accordance</p>

                    </div>
                    <div className="border-r border-blue-800 flex space-y-4 flex-col justify-center place-items-center h-48 w-72">
                    <div className="h-12 w-12 rounded-lg bg-red-700"></div>
                       <h className="font-sans">WE HELP EMPLOYMENT SEEKERS</h>
                       <p  className='text-xs'> We help employees to find a job Vacancies of his/her desire on time in preferred location under open agreement between.</p>
                    </div>
                    <div className=" flex flex-col justify-center space-y-4 place-items-center h-48 w-72">
                    <div className="h-12 w-12 rounded-lg bg-red-700"></div>
                       <h className="font-sans">WE HELP ORGANISATIONS</h>
                      <p className='text-xs'>In Second site we help Organisatins to get employee(s) of their rank/type/choices who can help organisations to 
                        meet their vision and mission in competitive ways and strategie</p>
                    </div>
                </div>         


                <div className="py-6 flex justify-center">
                <div className="flex flex-col place-items-center">
                    <h className='font-sans font-bold'>FOR EMPLOYERS AND PRIVATE ORGANISATONS</h>
                    <p className="font-sans text-light">WE PROVIDE JOB LINK BETWEEN PROFESSIONALS AND PRIVATE ORGANISATIONS WITHIN THE UNITED REPUBLIC OF TANZANIA IN ACCORDANCE</p>
                </div>
            </div>
            <div className="flex flex-row space-x-4 justify-center py-6  ">
                    <div className="bg-red-500 h-60 w-72"><img src={pic2} className='w-full h-60'/></div>
                    <div className="bg-yellow-500 h-60 w-72"><img src={pic3} className='w-full h-60'/></div>
                    <div className="bg-blue-400 h-60 w-72"><img src={pic4} className='w-full h-60'/></div>
                </div>
               
                 <div className="flex flex-col my-16 w-full">
                    <div className="flex justify-around py-4">
                        <h className="font-sans flex items-center"><AiFillYoutube className="text-red-700 mx-4 text-xl"/>Our youtube videos</h>
                        <p className="font-sans underline">View all videos</p>
                    </div>
                    <div className='flex flex-row justify-center'>
                        {vids.map(vid=>
                    <div key={vid.id} className="flex flex-col space-y-6 relative w-48 h-auto py-4 border-2 mx-2 place-items-center">
                        <div className="w-36 h-36 bg-blue-700 rounded-xl"><img src={vid.src}className='h-36 w-full rounded-lg'/><AiFillYoutube className='text-red-600 absolute text-sm bottom-16 left-6'/></div>
                        <h className="font-sans underline break-normal text-xs w-36">{vid.lik}</h>
                    </div>
                     )}
                    </div>
                 </div>


                 <div className="flex flex-row space-x-4 justify-center  py-10  ">
                    <div className=" border-r border-rose-800 h-48 space-y-4 w-72 flex flex-col justify-center place-items-center">
                       <div className="h-12 w-12 rounded-lg bg-red-700"></div>
                       <h className="font-sans">JOB ASSISTANCE PORTAL</h>
                       <p  className='text-xs'>We help OrganisatiOns demands and Employees IN need so that Organisations to get qualified employee(s) in accordance</p>

                    </div>
                    <div className="border-r border-blue-800 flex space-y-4 flex-col justify-center place-items-center h-48 w-72">
                    <div className="h-12 w-12 rounded-lg bg-red-700"></div>
                       <h className="font-sans">WE HELP EMPLOYEES</h>
                       <p  className='text-xs'> We help Employees to find a JOBS of his/her desire on time in preferred location under open agreement between.</p>
                    </div>
                    <div className=" flex flex-col justify-center space-y-4 place-items-center h-48 w-72">
                    <div className="h-12 w-12 rounded-lg bg-red-700"></div>
                       <h className="font-sans">WE HELP PRIVATE ORGANISATIONS</h>
                      <p className='text-xs'>In Second site we help organisations to employee(s) of their rank/type/choices who can help school to 
                        meet their vision and mission in competitive ways and strategie</p>
                    </div>
                </div>         

                <div className="w-full bg-slate-900 h-60 pt-12  bottom-0 text-gray-100">
                <div className='flex justify-around'>
                  <div className='flex flex-row space-x-12 ml-8'>
                  <div className='flex flex-col'>
                    <h1 className='text-'>CORE PROJECTS</h1>
                     <div className='text-xs'>                   
                     <p>Jobs' Junction</p>
                    <p>employment for Future</p>
                    <p>Inter School Exams</p>
                    <p>Teachers Training Program</p>
                    <p>Education Directory</p>
                    </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl'>CORE PROJECTS</h1>
                     <div className='text-xs'>                   
                    <p>Teachers' Junction</p>
                    <p>Education for Future</p>
                    <p>Inter School Exams</p>
                    <p>Teachers Training Program</p>
                    <p>Education Directory</p>
                    </div>
                    </div>
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
                            <div className='bg-green-500 h-12 w-12 rounded-lg'></div>
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
