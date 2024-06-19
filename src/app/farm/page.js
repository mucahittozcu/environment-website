 "use client"
import { TfiArrowCircleLeft,TfiArrowCircleRight } from "react-icons/tfi";
import Link from "next/link"
import { useEffect, useState } from "react"
import { AiOutlineHome } from "react-icons/ai";
import { VscFiles } from "react-icons/vsc";
import { PiUsersThreeLight } from "react-icons/pi";
import { FaDroplet } from "react-icons/fa6";
import { BiSolidImageAdd } from "react-icons/bi";
import { IoIosResize } from "react-icons/io";
import { PiFarmFill } from "react-icons/pi";

const page = () => {
  const [farm1, setFarm1] = useState([])
  const [farm2, setFarm2] = useState([])
  const [showModal,setShowModal] = useState(false)
  const [showModal2,setShowModal2] = useState(false)
  const [soil,setSoil] = useState("")
  const [soil2,setSoil2] = useState("")

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

  useEffect(() => {
    setFarm1([
      { name: 'Nitrogen', value: Math.floor(Math.random() * 100) + 1 },
      { name: 'Phosphorus', value: Math.floor(Math.random() * 100) + 1 },
      { name: 'Potassium', value: Math.floor(Math.random() * 100) + 1 },
    ])
    setFarm2([
      { name: 'Humidity', value: Math.floor(Math.random() * 100) + 1 },
      { name: 'Soil Hydration', value: Math.floor(Math.random() * 100) + 1 },
      { name: 'PH Value', value: Math.floor(Math.random() * 10) + 1 }
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
        <div className="flex pt-2 justify-between md:px-5 px-20">
          <h2 className="text-[#4A7A4C] pt-4 text-4xl font-bold">Farm 1</h2>
          <button onClick={openModal} className="bg-[#4A7A4C] px-12 py-1 mt-2 rounded-lg text-white font-bold">+ Add Crop</button>
        </div>
        {showModal && <Modal closeModal={closeModal} showModal={showModal} soil={soil} setSoil={setSoil} />}  
        {showModal2 && <Modal2 closeModal2={closeModal2} showModal2={showModal2} soil2={soil2} setSoil2={setSoil2} />}  
       
        <div className="flex flex-col px-2 md:flex md:flex-row pt-5 gap-y-14 md:gap-y-0 xl:gap-x-10 xl:px-20 lg:gap-x-5 lg:px-14 md:gap-x-2 md:px-7 ">
          {farm1.map((component, index) => (
            <div key={index} className="ml-2 xl:ml-5 lg:ml-3 md:ml-2 mt-7  h-[10px] xl:h-[100px] lg:h-[10px] md:h-[10px] ">
              <div className="flex justify-evenly items-center">
                <div className="mt-5 w-[400px] h-[65px] xl:w-[400px] xl:h-[65px] xl:px-8 xl:mr-3 lg:w-[200px] lg:h-[60px] lg:px-5 lg:mr-0 md:w-[200px] md:h-[55px] md:px-0 md:mr-0 shadow-xl p-1 mr-3 flex justify-between px-8 rounded-md">
                  <div className="flex flex-col">
                    <div className="text-[#4A7A4C] text-xl font-semibold pt-1">{component.name}:</div>
                    {component.value > 40 ? (
                      <div className="text-[#4A7A4C] border-[2px] border-[#4A7A4C] flex justify-center rounded-md items-center w-[40px] h-[20px] mb-2 text-xs font-semibold">Good</div>
                    ) : (
                      <div className="text-red-700 border-[2px] border-red-700 flex justify-center rounded-md items-center w-[40px] h-[20px] mb-2 text-xs font-semibold">High</div>
                    )}
                  </div>
                  <span className="text-black pl-5 text-xl pt-2">{component.value}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between  p-20  px-14">
          <div className="flex flex-col items-center gap-y-5 p-10 ">
            {farm2.map((component, index) => (
              <div key={index} className="mt-5 w-[400px] h-[65px] p-1 xl:w-[400px] xl:h-[65px] xl:px-8 lg:w-[250px] lg:h-[60px] lg:px-5 md:w-[200px] md:h-[55px] md:px-0 md:mr-0 shadow-xl flex justify-between px-8 rounded-md">
                <div className="flex flex-col">
                  <div className="text-[#4A7A4C] text-xl font-semibold pt-1">{component.name}:</div>
                  {component.value > 40 ? (
                    <div className="text-[#4A7A4C] border-[2px] border-[#4A7A4C] flex justify-center rounded-md items-center w-[40px] h-[20px] mb-2 text-xs font-semibold">Good</div>
                  ) : (
                    <div className="text-red-700 border-[2px] border-red-700 flex justify-center rounded-md items-center w-[40px] h-[20px] mb-2 text-xs font-semibold">High</div>
                  )}
                </div>
                <span className="text-black pl-5 text-xl pt-2">{component.value}%</span>
              </div>
            ))}
          </div>
         <div className="md:relative">
            <img className="w-[0px] h-[0px] xl:w-[650px] xl:h-[400px] lg:w-[550px] lg:h-[350px] md:w-[500px] md:h-[300px]   " src={"Rectangle 20.png"} />
            <div className=" xl:absolute xl:bottom-[0%] xl:left-[45%] lg:absolute lg:bottom-[0%] lg:left-[35%] md:absolute md:bottom-[0%] md:left-[30%] ">
              <button className="pr-5"><TfiArrowCircleLeft size={45} color="white" /></button>
              <button className="pl-5"><TfiArrowCircleRight size={45} color="white" /></button>
            </div>
         </div>
        </div>
        <div className="flex justify-center">
          <button className="text-[#4A7A4C] border-[5px] w-[300px] xl:w-[1200px] lg:w-[650px] md:w-[550px] rounded-lg text-3xl font-bold h-[70px]  border-[#4A7A4C]  ">Efficacy Rating</button>
        </div>
      </div>
    </div>
  )
}

export default page

function Modal ({ showModal,closeModal,soil,setSoil }){

  return showModal && (
    <div className="flex justify-center items-center">

      <div className="rounded-3xl mt-2 shadow-2xl bg-white mr-6 w-[1400px]  h-[800px]">
         <button className="border-[3px] text-[#4A7A4C] bg-white w-[150px] h-[45px] rounded-lg mt-5 ml-5 border-[#4A7A4C] " onClick={closeModal}>Back</button>

         <div className="flex justify-center items-center mt-5">
         <div className="flex flex-col gap-y-10">
            <h1 className="text-[#4A7A4C] text-5xl font-semibold">CROP DETAILS</h1>
            <select className="text-[#4A7A4C] w-[500px] h-[40px] pl-5 border rounded-lg border-[#4A7A4C]">
              <option value={"Crop 1"}>Crop 1</option>
              <option value={"Crop 2"}>Crop 2</option>
              <option value={"Crop 3"}>Crop 3</option>
            </select>

          <div className="relative">
            <input 
              type="text"
              placeholder="Soil Type"
              name="soil type"
              className="text-[#4A7A4C] w-[500px] h-[40px]  pl-5 border rounded-lg border-[#4A7A4C] "
              value={soil}
              onChange={(event) => setSoil(event.target.value)}
              />
             <FaDroplet size={30} color="4A7A4C" className="absolute bottom-[7%] left-[-7%] " />
          </div>

          <div className="relative">
            <input type="image" id="myfile" name="myfile" placeholder="Add Image" className="w-[200px] border h-[40px] pl-2"/>
            <BiSolidImageAdd size={30} color="4A7A4C" className="absolute bottom-[20%] right-[60%] " />  
          </div>         
            <button className="text-white bg-[#4A7A4C] w-[250px] h-[45px] rounded-lg font-bold hover:text-[#4A7A4C] hover:bg-white border border-[#4A7A4C] ">SUBMIT</button>
         </div>
         </div>

      </div>

    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////////////

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

