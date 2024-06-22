"use client"
import Link from "next/link";
import { useState } from "react"
import { FaUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { TbEye } from "react-icons/tb";
import { TbEyeOff } from "react-icons/tb";
const signIn = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [showPassword,setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
 <div className="h-screen flex items-center relative overflow-hidden ">

   <div className="flex justify-center items-center ">
     <img className=" xl:w-[950px] lg:w-[550px] md:w-[450px] sm:w-[350px] w-[250px] h-screen rounded-tr-[40px] rounded-br-[40px] " src={"Rectangle 1 (1).png"} />
     <div className="flex items-center justify-center xl:pl-96 lg:pl-48 md:pl-48 sm:pl-40 pl-36 xl-w-[500px] lg:w-[300px] md:w-[200px] sm:w-[150px] w-[100px] ">
    <div className="flex flex-col ">
      <h1 className="text-[#4A7A4C] font-bold text-5xl pb-5 ">Sign In</h1>
           
       <form onSubmit={handleSubmit}>
         <div className="relative">
           <FaUser className="absolute top-[30%] left-[2%] transform -translate-y-1/2 text-gray-500 " size={20} />
         <input 
           className="border border-black rounded-xl xl:w-[450px] xl:h-[60px] lg:w-[400px] lg:h-[55px] md:w-[350px] md:h-[50px] sm:w-[250px] sm:h-[50px] w-[200px] h-[50px] mb-10 pl-9 "
           type="text"
           placeholder={`Username`}
           name="username"
           required
           value={userName}
           onChange={(event) => setUserName(event.target.value)}
         />
         </div>
         <div className="relative">
         <IoMdLock className="absolute top-[30%] left-[2%] transform -translate-y-1/2 text-gray-500 " size={22} />
         <input 
           className="border border-black rounded-xl xl:w-[450px] xl:h-[60px] lg:w-[400px] lg:h-[55px] md:w-[350px] md:h-[50px] sm:w-[250px] sm:h-[50px] w-[200px] h-[50px] mb-10 pl-9 "
           type={showPassword ? "text" : "password"}
           name="password"
           placeholder="Password"
           required
           value={password}
           onChange={(event) => setPassword(event.target.value)}
         />
          
         {showPassword ? <TbEye  className="absolute top-[32%] right-3 transform -translate-y-1/2 cursor-pointer text-gray-500" size={25} onClick={() => setShowPassword((pre) => !pre)} /> :
          <TbEyeOff className="absolute top-[32%] right-3 transform -translate-y-1/2 cursor-pointer text-gray-500" size={25} onClick={() => setShowPassword((pre) => !pre)} />
         }
         </div>
         <input
          className="pb-5"
          type="checkbox"
          id="agree"
          name="agree"
          required
         />
         <label className="pl-2 " htmlFor="agree">I agree <a href="#" className="font-bold">Terms and Conditions & Private Policy </a> by Signing in</label>
         
         <div className="flex flex-col gap-y-5 pt-20 items-center">
         <Link href="/farm" >
           <button className="text-white text-xl font-bold border-[3px] border-[#4A7A4C] bg-[#4A7A4C] xl:w-[400px] xl:h-[60px] lg:w-[350px] lg:h-[55px] md:w-[300px] md:h-[55px] sm:w-[250px] sm:h-[55px] w-[200px] h-[50px] rounded-xl hover:text-[#4A7A4C] hover:bg-white hover:border-[#4A7A4C] xl:hover:w-[405px] xl:hover:h-[65px] lg:hover:w-[355px] lg:hover:h-[60px] md:hover:w-[355px] md:hover:h-[60px] sm:hover:w-[255px] sm:hover:h-[60px] hover:w-[205px] hover:h-[55px] ">Log In</button>
         </Link>
         <div>
         <p className=" pt-10 pb-2 ">If you don't have an account...</p>
         <Link href="/signUp" >
           <button className="text-[#4A7A4C] font-bold text-xl bg-white border-[#4A7A4C] xl:w-[400px] xl:h-[60px] lg:w-[350px] lg:h-[55px] md:w-[300px] md:h-[55px] sm:w-[250px] sm:h-[55px] w-[200px] h-[50px] border-[3px] rounded-xl hover:text-[#ffff] xl:hover:w-[405px] xl:hover:h-[65px] lg:hover:w-[355px] lg:hover:h-[60px] md:hover:w-[355px] md:hover:h-[60px] sm:hover:w-[255px] sm:hover:h-[60px] hover:w-[205px] hover:h-[55px] hover:bg-[#4A7A4C] hover:border-[#4A7A4C]">Sign Up</button>
         </Link>
         </div>
         </div>

       </form>
    </div>
    </div>
    </div>
   
  </div>
  )
}
export default signIn
