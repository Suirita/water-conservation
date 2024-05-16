const Consumption_barriers = () => {
  return (
    <div className="bg-slate-100 mx-24 p-5 rounded-lg">
      <div className="flex justify-between">
        <div className="text-lg font-bold ml-8">Consumption_barriers</div>
        <div className="font-bold mr-10">Monthly</div>
      </div>
      <div className="flex justify-between mt-8 font-semibold">
        <div className="mr-52 ml-8">0 liters</div>
        <div className="translate-x-12">5000 liters</div>
        <div className="translate-x-10">7000 liters</div>
        <div className="mr-10">9000 liters</div>
      </div>
      <div className="flex justify-between mt-4 mr-10">
        <div className="bg-blue-400 w-2/4 rounded-xl translate-x-8 z-10"></div>
        <div className="bg-orange-300 w-1/4 rounded-xl translate-x-4"></div>
        <div className="bg-red-500 w-1/4 rounded-xl">r</div>
      </div>
      <div className="flex justify-between mt-2 mb-10 font-semibold">
        <div className="mr-52 ml-8"></div>
        <div className="translate-x-16">+10%</div>
        <div className="translate-x-10">+20%</div>
        <div className="mr-10">+30%</div>
      </div>
    </div>
  );
};

export default Consumption_barriers;
