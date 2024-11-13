import {
    NavLink, Link
  } from "react-router-dom";
  import { IoArrowBack } from "react-icons/io5";



function Login () {
return (
<>
<p className="font-bold text-red-800 text-center">please login</p>
<Link to="/"><p className="font-bold text-red-500 underline flex items-center ml-5"><IoArrowBack/> home</p></Link>
</>
)
}
export default Login