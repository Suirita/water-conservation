import React from 'react'

const Bill = ({title, amount, Value}) => {
  return (
    <div class="bg-gray-200 p-5 rounded-xl flex flex-col gap-8">
        <p class="text-gray-900 font-semibold">{title}</p>
        <div class="flex justify-between items-center">
            <p className="text-3xl font-bold text-gray-900">{amount}</p>
            <span className="text-gray-900 font-bold text-sm">{Value}</span>
        </div>
    </div>
  )
}

export default Bill
