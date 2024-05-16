

const page = () => {
  return (
    <>
        <header className="px-8 py-5 border-b">
            <h1 className="font-semibold text-blue-300">AmanWater</h1>
        </header>
        <div className="px-10 py-5">
            <div class="flex justify-between py-5">
                <h4 className="font-bold">Water Usage Statisics:</h4>
                <select name="select-month" id="" className="text-xs">
                    <option value="Current-Month">Current Month</option>
                    <option value="Latest-Month">Latest Month</option>
                </select>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div class=" bg-blue-300 p-5 rounded-xl flex flex-col gap-8">
                    <p class="">Daily Consumption</p>
                    <div class="flex justify-between">
                        <p className="text-3xl font-bold">7,26</p>
                        <span>Liter</span>
                    </div>
                </div>
                <div class=" bg-gray-200  p-5 rounded-xl flex flex-col gap-8">
                    <p>Daily Bill</p>
                    <div class="flex justify-between">
                        <p className="text-3xl font-bold">3,6</p>
                        <span>DH</span>
                    </div>
                </div>
                <div class=" bg-blue-300 p-5 rounded-xl flex flex-col gap-8">
                    <p>Monthly</p>
                    <div class="flex justify-between">
                        <p className="text-3xl font-bold">156</p>
                        <span>Liter</span>
                    </div>
                </div>
                <div class=" bg-gray-200 p-5 rounded-xl flex flex-col gap-8">
                    <p>Monthly Bill</p>
                    <div class="flex justify-between">
                        <p className="text-3xl font-bold">231</p>
                        <span>DH</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-10">
            <h1 className="font-bold mt-4">Water Consumption:</h1>
            <div  className="flex  justify-between gap-3 mt-5"> 
                <div className="bg-slate-100 w-2/4  rounded-2xl py-5 px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold ">Water Levels at Tangier</h1>
                        <div className="bg-green-500  w-1/5 rounded-lg	  h-8  mt-3 ml-3 flex justify-center	 items-center	 ">
                            <span className="text-white	">GOOD</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-end  h-28  mb-5">
                        <h1 className=" text-4xl mr-9 font-bold">120.000.000</h1>
                        <span>EST.Litre</span>
                    </div>
                </div>
                <div className="bg-slate-100 w-2/4 rounded-2xl py-5 px-8 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold ">Consumption Barriers</h1>
                    </div>
                    <div className="flex justify-between items-end mb-5">
                        <h1 className=" text-4xl mr-9 font-bold">5000</h1>
                        <span>Monthly/Litre</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page
