

const Consumption = () => {
    return (
        <div className="font-mono">
            <h1 className="font-bold ml-4 mt-4">Water Consumption:</h1>
            <div  className="flex  justify-evenly	 "> 

            <div className="  bg-slate-100 w-2/5 h-38 rounded-2xl mt-5 ml-5">
                <div className="flex justify-around	">
                    <h1 className=" mt-5">Water Levels at Tangier</h1>
                    <div className="bg-green-400  w-1/5 rounded-lg	  h-8  mt-3 ml-3 flex justify-center	 items-center	 ">
                        <span className="text-white	">GOOD</span>
                    </div>
                </div>

                <div className="flex justify-around items-end  h-28  mb-5">
                    <h1 className=" text-4xl mr-9">120.000.000</h1>
                    <span>EST.Litre</span>
                </div>

            </div>
  
            <div className="  bg-slate-100 w-2/5 h-38 rounded-2xl mt-5 ml-5">
                <div className="flex 	">
                    <h1 className=" mt-5 ml-6">Water Levels at Tangier</h1>
                </div>

                <div className="flex justify-around items-end  h-28 mb-5 ">
                    <h1 className=" text-4xl mr-12">5000</h1>
                    <span>Monthly/Litre</span>
                </div>

            </div>


            </div>

        </div>
    )
}

export default Consumption