"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AiOutlineHome } from "react-icons/ai";
import { VscFiles } from "react-icons/vsc";
import { PiUsersThreeLight } from "react-icons/pi";
import { IoIosResize } from "react-icons/io";
import { PiFarmFill } from "react-icons/pi";
import { BiSolidImageAdd } from "react-icons/bi";
import { FiRadio } from "react-icons/fi";

const dashboard = () => {
  const [showModal2,setShowModal2] = useState(false)
  const [soil2,setSoil2] = useState("")
  const [farm, setFarm] = useState([])

  const openModal2 = () => {
    setShowModal2(true)
  }
   const closeModal2 = () => {
    setShowModal2(false)
  }
useEffect(() => {
  setFarm([
    { name: 'Wheat', value: Math.floor(Math.random() * 100) + 1 },
    { name: 'Corn', value: Math.floor(Math.random() * 100) + 1 },
    { name: 'Barley', value: Math.floor(Math.random() * 100) + 1 },
    { name: 'Paddy', value: Math.floor(Math.random() * 100) + 1 },
  ])
},[])

return (
  
  <div className="bg-[#4A7A4C] xl:bg-[#4A7A4C] lg:bg-slate-400 md:bg-yellow-300 sm:bg-green-300 md:flex-row md:justify-start md:items-start h-full md:relative md:overflow-hidden flex justify-center items-center flex-col">
  
        <div className="flex flex-col md:flex-col w-full h-auto justify-center items-center xl:w-[350px] lg:w-[300px] md:w-[200px] md:h-screen md:justify-start md:items-start">
          <div className="md:pb-[80px] ml-5 pt-8 text-white text-xl font-semibold flex flex-col justify-center items-center">
            <div className="rounded-full border-[10px] mb-5 border-white">
              <img className="w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] lg:w-[160px] lg:h-[160px] md:w-[120px] md:h-[120px] " src={"Ellipse 1 (1).png"} />
            </div>
            <h3 className="font-bold text-xl">Namık Korona</h3>
            <p className="text-sm">Farm Owner</p>
          </div>
          <div className="flex md:flex-col items-center md:items-start h-0 w-full pb-7">
  <Link href={"/farm"} className="text-left md:w-full md:h-12 h-0 relative group">
    <button className="text-white text-left md:pl-5 pl-3 group-hover:text-[#4A7A4C] group-hover:bg-white font-semibold flex items-center md:w-full md:h-12 w-[180px] h-8">
     <AiOutlineHome size={25} className="text-white mr-2 group-hover:text-[#4A7A4C]" /> Farm Analytics
    </button>
  </Link>
  
  <Link href={"/livestock"} className="text-left md:w-full md:h-12 h-0 relative group">
    <button className="text-white text-left md:pl-5 pl-3 hover:text-[#4A7A4C] hover:bg-white font-semibold md:w-full md:h-12 w-[150px] h-8 flex items-center">
      <VscFiles size={25} className="mr-2" /> Livestock
    </button>
  </Link>
  
  <Link href={"/dashboard"} className="text-left md:w-full md:h-12 h-0 relative group">
    <button className="text-white text-left md:pl-5 pl-3 hover:text-[#4A7A4C] hover:bg-white font-semibold md:w-full md:h-12 w-[150px] h-8 flex items-center">
      <PiUsersThreeLight size={25} className="mr-2" /> Dashboard
    </button>
  </Link>
  
  
  <div className="flex flex-col mt-0 md:mt-20 ">
      <button onClick={openModal2} className="text-[#4A7A4C] bg-white font-semibold px-5 xl:px-20 lg:px-10 md:px-5 py-2 rounded-lg md:mt-5 mt-8 ml-1 md:ml-5">+ Add Farm</button>
  </div>
  </div>
    
    </div>
    
    <div className="rounded-3xl pt-2 ml-5 bg-white mr-6 w-[600px] h-[950px] xl:w-[1600px] xl:h-[910px] lg:w-[820px] lg:h-[910px] lg:mt-3 md:w-[680px] md:h-[910px] md:mt-3 ">
        <div className="flex pt-2 justify-between md:px-5 px-2">
          <h2 className="text-[#4A7A4C] pt-4 text-4xl font-bold">Manage Livestock</h2>
          <div className="relative">
            <button className="bg-[#4A7A4C] px-10 py-1 mt-2 rounded-lg text-white font-bold"> View Live</button>
            <FiRadio size={30} color="white" className="absolute bottom-[30%] left-[3%] " />
          </div>
        </div>
      <div className="flex justify-center items-center gap-x-72 pt-24 ">
        <div className="text-[#4A7A4C] font-semibold flex flex-col text-xl ">
           <h3>Farms:</h3>
           <h3>Area:</h3>
           <h3>Expected date of Harvest:</h3>
           <img className="w-[450px] h-[550px] rounded-3xl shadow-2xl pt-5" src={"Rectangle 46.png"} />
        </div>

        <div className="flex flex-col gap-y-5 pt-16">
          <h3 className="text-[#4A7A4C] font-semibold text-3xl">Crops Distribution</h3>
          <div className="w-[450px] h-[550px] rounded-3xl shadow-2xl flex flex-col ">
            <div className="text-xl font-semibold w-[450px] h-[280px]  pt-5 flex justify-end pr-5">
               <ul className="flex flex-col gap-y-3 list-disc">
                 <li>Wheat</li>
                 <li>Corn</li>
                 <li>Barley</li>
                 <li>Paddy</li>
               </ul>
            </div>
            <hr/>
            <div className="flex flex-col">
            {farm.map((component,index) => (
             <ul className="flex items-end pl-10 pt-5 list-disc " key={index}>
              <div className="flex">
                 <li className=" text-xl font-semibold pt-1">{component.name}:</li>
                 <span className="text-black pl-5 text-xl pt-2">{component.value}%</span>
                    {component.value >= 20 ? (
                   <div className="text-[#4A7A4C] border-[2px] ml-5 mt-2 border-[#4A7A4C] flex justify-center rounded-md items-center w-[45px] h-[25px] mb-2 text-xs font-semibold">Ready</div>
                    ) : (
                   <div className="text-red-700 border-[2px] ml-5 mt-2 border-red-700 flex justify-center rounded-md items-center w-[80px] h-[25px] mb-2 text-xs font-semibold">Not Ready</div>
                  )}
              </div>
            </ul>
             ))}
             </div>
          </div>
        </div>
      </div>
{showModal2 && <Modal2 closeModal2={closeModal2} showModal2={showModal2} soil2={soil2} setSoil2={setSoil2} />}
        </div>

    </div>
      
    )
}
  
export default dashboard

function Modal2 ({ showModal2,closeModal2,soil2,setSoil2 }){

  return showModal2 && (
    <div className="flex justify-center items-center">

      <div className="rounded-3xl mt-2 shadow-2xl bg-white mr-6 w-[1400px]  h-[800px]">
         <button className="border-[3px] text-[#4A7A4C] bg-white w-[150px] h-[45px] rounded-lg mt-5 ml-5 border-[#4A7A4C] " onClick={closeModal2}>Back</button>

         <div className="flex justify-center items-center mt-5">
         <div className="flex flex-col gap-y-10">
            <h1 className="text-[#4A7A4C] text-5xl font-semibold">FARM DETAILS</h1>
          <div className="relative">       
            <input 
              type="text"
              placeholder="Farm Name"
              name="farm"
              className="text-[#4A7A4C] w-[500px] h-[40px]  pl-5 border rounded-lg border-[#4A7A4C] "
              value={soil2}
              onChange={(event) => setSoil2(event.target.value)}
            />
          <PiFarmFill size={30} color="4A7A4C" className="absolute bottom-[10%] left-[-7%] " />  
        </div>
          <div className="relative">
            <input
              type="number"
              id="quantity"
              name="farm size"
              placeholder="Farm Size (in acres)"
              min="0"
              max="10"
              step="1"
              className="text-[#4A7A4C] w-[500px] h-[40px]  pl-5 border rounded-lg border-[#4A7A4C]"
            />
          <IoIosResize size={30} color="4A7A4C" className="absolute bottom-[10%] left-[-7%] " />  
        </div>
          <div className="relative">
            <input
              type="image"
              id="myfile"
              name="myfile"
              placeholder="Add Image"
              className="w-[200px] h-[40px] pl-2"
            />
            <BiSolidImageAdd size={30} color="4A7A4C" className="absolute bottom-[20%] right-[60%] " />  
          </div>
            <select className="text-[#4A7A4C] w-[500px] h-[40px] pl-5 border rounded-lg border-[#4A7A4C]">
              <option>Crop Type 1</option>
              <option>Crop Type 2</option>
              <option>Crop Type 3</option>
            </select>
            <button className="text-white bg-[#4A7A4C] w-[250px] h-[45px] rounded-lg font-bold hover:text-[#4A7A4C] hover:bg-white border border-[#4A7A4C] ">SUBMIT</button>
         </div>
         </div>

      </div>

    </div>
  )
}