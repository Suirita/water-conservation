
const Statistics = () => {
    return (
        <>
            <div>
                <div class="flex justify-between">
                    <h4>Water Usage Statisics:</h4>
                    <select name="select-month" id="">
                        <option value="Current-Month">Current Month</option>
                        <option value="Latest-Month">Latest Month</option>
                    </select>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <div class="w-36 bg-blue-300 p-5 rounded-xl">
                        <p class="">Daily Consumption</p>
                        <div class="flex justify-between">
                            <p>7,26</p>
                            <span>Liter</span>
                        </div>
                    </div>
                    <div class="w-36 bg-blue-300 p-5 rounded-xl">
                        <p>Daily Bill</p>
                        <div class="flex justify-between">
                            <p>3,6</p>
                            <span>DH</span>
                        </div>
                    </div>
                    <div class="w-36 bg-blue-300 p-5 rounded-xl">
                        <p>Monthly</p>
                        <div class="flex justify-between">
                            <p>156</p>
                            <span>Liter</span>
                        </div>
                    </div>
                    <div class="w-36 bg-gray-200 p-5 rounded-xl">
                        <p>Monthly Bill</p>
                        <div class="flex justify-between">
                            <p>231</p>
                            <span>DH</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistics