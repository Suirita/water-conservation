

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
    </>
  )
}

export default page
