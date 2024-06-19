"use client"
import Link from "next/link"
import { AiOutlineHome } from "react-icons/ai";
import { VscFiles } from "react-icons/vsc";
import { PiUsersThreeLight } from "react-icons/pi";
import { useState } from "react"
import { BiSolidImageAdd } from "react-icons/bi";
import { PiCow } from "react-icons/pi";
import { LuTally5 } from "react-icons/lu";
import { IoIosResize } from "react-icons/io";
import { PiFarmFill } from "react-icons/pi";
import { FiRadio } from "react-icons/fi";

const livestock = () => {
  const [showModal,setShowModal] = useState(false)
  const [cattle,setCattle] = useState("")
  const [breed,setBreed] = useState("")
  const [count,setCount] = useState("")
  const [showModal2,setShowModal2] = useState(false)
  const [soil2,setSoil2] = useState("")
  const [bool,setBool] = useState(false)
  const [lists, setLists] = useState([]) 
  // yeni bir öğe ekler.
const handleAddItem = () => {
  const newItem = {
    id: crypto.randomUUID(),
    cattle: cattle.charAt(0).toUpperCase() + cattle.slice(1),
    breed,
    count,
  }

  setLists([...lists, newItem])
  setCattle('')
  setBreed('')
  setCount('')
}

    const openModal = () => {
     setShowModal(true)
    }
    const closeModal = () => {
     setShowModal(false)
    }
    const openModal2 = () => {
      setShowModal2(true)
    }
     const closeModal2 = () => {
      setShowModal2(false)
    }
    const handleAddCattle = () => {
      setBool(true)
    }
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
          <div className=" flex mt-5">
          <div className="relative mr-5">
            <button className="bg-[#4A7A4C] px-10 pl-12 py-2 mt-2 rounded-lg text-white font-bold"> View Live</button>
            <FiRadio size={30} color="white" className="absolute bottom-[10%] left-[3%] " />
          </div>
            <button onClick={openModal} className="bg-[#4A7A4C] px-12  rounded-lg text-white font-bold">+ Add Cattle</button>
          </div>
        </div>
{showModal && <Modal closeModal={closeModal} showModal={showModal} cattle={cattle} setCattle={setCattle} breed={breed} setBreed={setBreed} count={count} setCount={setCount}  handleAddItem={handleAddItem} handleAddCattle={handleAddCattle}  />}  
{showModal2 && <Modal2 closeModal2={closeModal2} showModal2={showModal2} soil2={soil2} setSoil2={setSoil2} />}  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full pt-5 pl-5 ">  
     {bool && 
      lists.map((listItem) => (
        <div key={listItem.id} className="bg-white p-4 mb-4 rounded-lg shadow w-[300px]">
          <ul className="font-semibold text-xl text-[#4A7A4C] pl-5 pt-5">
            <h3 className="text-[#4A7A4C] font-bold text-2xl pb-10">{listItem.cattle}:</h3>
            <li>Count: {listItem.count}</li>
            <li>Breed: {listItem.breed}</li>
            <li>Males: </li>
            <li>Females: </li>
          </ul>
        </div>
      ))
     }
  </div>

      </div>

    </div>
      
    )
}
export default livestock

  
function Modal ({ showModal,closeModal,cattle,setCattle,breed,setBreed,count,setCount,handleAddItem,handleAddCattle }){

  const handleModalSubmit = (e) => {
    e.preventDefault()
    handleAddCattle()
    handleAddItem()
  }

  return showModal && (
    <div className="flex justify-center items-center">

      <div className="rounded-3xl mt-2 shadow-2xl bg-white mr-6 w-[1400px]  h-[800px]">
         <button className="border-[3px] text-[#4A7A4C] bg-white w-[150px] h-[45px] rounded-lg mt-5 ml-5 border-[#4A7A4C] " onClick={closeModal}>Back</button>

         <div className="flex justify-center items-center mt-5">
         <div className="flex flex-col gap-y-10">
            <h1 className="text-[#4A7A4C] text-5xl font-semibold">CATTLE DETAILS</h1>
          <form className="flex flex-col gap-y-10" onSubmit={handleModalSubmit}>
          <div className="relative">
            <input 
              required
              type="text"
              placeholder="Enter the Cattle Type"
              name="cattle"
              className="text-[#4A7A4C] w-[500px] h-[40px]  pl-5 border rounded-lg border-[#4A7A4C] "
              value={cattle}
              onChange={(event) => setCattle(event.target.value)}
            />
            <PiCow size={30} color="4A7A4C" className="absolute bottom-[7%] left-[-7%] " />
          </div>
            <input 
              required
              type="text"
              placeholder="Enter the Breed"
              name="breed"
              className="text-[#4A7A4C] w-[500px] h-[40px]  pl-5 border rounded-lg border-[#4A7A4C] "
              value={breed}
              onChange={(event) => setBreed(event.target.value)}
            />
          <div className="relative">
            <input
              required 
              type="number"
              placeholder="Count"
              name="count"
              className="text-[#4A7A4C] w-[500px] h-[40px]  pl-5 border rounded-lg border-[#4A7A4C] "
              value={count}
              onChange={(event) => setCount(event.target.value)}
            />
            <LuTally5 size={30} color="4A7A4C" className="absolute bottom-[7%] left-[-7%] " />
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
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
            <button  className="text-white bg-[#4A7A4C] w-[250px] h-[45px] rounded-lg font-bold hover:text-[#4A7A4C] hover:bg-white border border-[#4A7A4C] ">SUBMIT</button>
            </form>
         </div>
         </div>

      </div>

    </div>
  )
}



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