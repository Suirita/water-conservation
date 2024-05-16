
const Statisitc = ({title, Count, Value}) => {
  return (
    <div class=" bg-blue-400 p-5 rounded-xl flex flex-col gap-8">
        <p class="text-white font-semibold">{title}</p>
        <div class="flex justify-between items-center">
            <p className="text-3xl font-bold text-white">{Count}</p>
            <span className="text-white font-bold text-sm">{Value}</span>
        </div>
    </div>
)
}

export default Statisitc
