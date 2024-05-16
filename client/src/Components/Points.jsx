
const Points = () => {
  return (
    <div className="font-mono">
    <div  className="flex  justify-evenly	 "> 

    <div className="  bg-slate-100 w-2/5 h-38 rounded-2xl mt-5 ml-5">
        <div className="flex justify-between">
            <h1 className=" mt-5 ml-8">Points Total</h1>
            <div className="  w-1/5 rounded-lg	  h-8  mt-3 ml-3 flex justify-center	 items-center	 ">
                <span className="mt-2 mr-4">6 Months</span>
            </div>
        </div>

        <div className="flex justify-around items-end  h-28  mb-5">
            <h1 className=" text-4xl mr-9 text-cyan-400 ">30 <span className="text-black">Points</span></h1>
            <span>Learn More</span>
           
        </div>

    </div>

    <div className="  bg-slate-100 w-2/5 h-38 rounded-2xl mt-5 ml-5">

            <h1 className="ml-5 mt-5">Winner -  May 2024</h1>


        <div className="flex justify-around items-end  h-28 mb-5 ">
            <h1 className=" text-4xl mr-12">Brihi <span className="text-cyan-400">Houssame</span> </h1>
            <span>320 Points</span>
        </div>

    </div>


    </div>

</div>
  )
}

export default Points