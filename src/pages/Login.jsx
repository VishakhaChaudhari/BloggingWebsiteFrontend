import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"


const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
      
      setUser(res.data)
      navigate("/")

    }
    catch(err){
      setError(true)
      console.log(err)

    }

  }
  return (
    <>
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
    <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
    <h3><Link to="/register">Register</Link></h3>
    </div>
{/* <div className="w-full flex justify-center items-center h-[80vh] ">
       <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
         <h1 className="text-xl font-bold text-left">Log in to your account</h1>
         <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
         <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
         <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Log in</button>
         {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
         <div className="flex justify-center items-center space-x-3">
          <p>New here?</p>
          <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
         </div>
       </div>


       
    </div> */}

<div class="flex justify-center items-center bg-gray-300 h-[93vh] w-screen">
<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setEmail(e.target.value)}  id="username" type="email" placeholder="Enter Your Email"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your Password"/>
     
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogin} type="button">
        Log In
      </button>
      </div>

      {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
         <div className="flex justify-center items-center space-x-3 mt-4">
          <p>New here?</p>
          <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
         </div>

     
    
  </form>
  
</div>
</div>

    <Footer/>
    </>
    
  )
}

export default Login