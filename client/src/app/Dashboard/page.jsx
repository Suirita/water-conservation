import Consumption_barriers from "@/Components/Layout/Consumption_barriers"
import Bill from "@/Components/Layout/Bill"
import Statisitc from "@/Components/Layout/Statisitc"
import Link from "next/link"
import Header from "@/Components/Layout/Header"
// Components

const page = () => {
  return (
    <>
        <Header/>
        <main className="mb-28">
            <div className="px-10 py-5">
                <div class="flex justify-between py-5">
                    <h4 className="font-bold">Water Usage Statisics:</h4>
                    <select name="select-month" id="" className="text-xs">
                        <option value="Current-Month">Current Month</option>
                        <option value="Latest-Month">Latest Month</option>
                    </select>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <Statisitc title={"Daily Consumption"} Count={"7,26"} Value={"Litre"}/>
                    <Bill title={"Daily Consumption"} amount={"7,26"} Value={"DH"}/>
                    <Statisitc title={"Monthly Consumption"} Count={"156.00"} Value={"Litre"}/>
                    <Bill title={"Monthly Consumption"} amount={"7,26"} Value={"DH"}/>
                </div>
            </div>
            <div className="px-10">
                <h1 className="font-bold mt-4 text-lg">Water Consumption:</h1>
                <div  className="flex  justify-between gap-5 mt-5"> 
                    <div className="bg-slate-100 w-2/4  rounded-2xl py-5 px-8">
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold ">Water Levels at Tangier</h1>
                            <div className="bg-green-500  w-1/5 rounded-lg h-8  mt-3 ml-3 flex justify-center items-center">
                                <span className="text-white text-sm font-bold">GOOD LEVELS</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-end  h-28  mb-5">
                            <h1 className=" text-4xl mr-9 font-bold">120.000.000</h1>
                            <span className="text-sm font-semibold text-blue-500">EST.Litre</span>
                        </div>
                    </div>
                    <div className="bg-slate-100 w-2/4 rounded-2xl py-5 px-8 flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold ">Consumption Barriers</h1>
                        </div>
                        <div className="flex justify-between items-end mb-5">
                            <h1 className="text-4xl mr-9 font-bold">5000</h1>
                            <span className="text-sm font-semibold text-blue-500">Monthly/Litre</span>
                        </div>
                    </div>
                </div>
            </div>
            <Consumption_barriers/>
            <div className="flex justify-between gap-5 px-10 mt-10"> 
                <div className="bg-slate-100 w-2/4 rounded-2xl py-5 px-8 flex flex-col gap-20">
                    <div className="flex justify-between">
                    <h1 className="font-semibold">Total Points :</h1>
                    <div className="rounded-lg flex justify-center items-center">
                        <span className="text-sm font-semibold">6 Months</span>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <h1 className=" text-4xl text-blue-400 font-bold">30 <span className="text-black">Points</span></h1>
                    <Link href={"/"} className="text-sm font-semibold text-blue-500">Learn More ...</Link>
                </div>
                </div>
                <div className="bg-slate-100 w-2/4 rounded-2xl  py-5 px-8 flex flex-col gap-20">
                    <h1 className="font-semibold">Winner -  May 2024</h1>
                    <div className="flex justify-between items-end mb-5">
                        <h1 className="text-4xl font-bold">Brihi <span className="text-blue-400">Houssame</span> </h1>
                        <h1 className="text-4xl font-bold"><span className="text-blue-400">320</span> Points</h1>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default page
