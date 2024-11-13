
import { Button } from '@chakra-ui/react';



import { NavLink,Link, Outlet } from "react-router-dom"
const links  = ["Jobs","Salaries","Companies","Forums","Find resumes"]; 

const NavBar = () => {
    return (
        <div className="bg-ice-300 flex w-full py-4 flex justify-self-center ">
        {links.map(link =>(<div className="p-3 font-sans text-lg"><NavLink to={link}>{link}</NavLink></div>))
}</div>

    );
}

const Layout = () => {
    return (
     <>
     <div className="flex justify-around items-center mx-4">
        <h1 className="font-sans  py-4 font-semibold text-xl text-center">welcome home</h1>
        <Link to="/login"><p className='font-sans text-lg underline'>Log In</p></Link>
        </div>
     <center><NavBar/></center>
     <Outlet/>
     </>
    )
}
export default Layout
