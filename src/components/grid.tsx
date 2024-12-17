export const Grid = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-3 grid-rows-3 gap-2 h-96 bg-gray-500 p-3 md:grid-rows-2 md:grid-cols-6">
        <div className="bg-blue-500 h-auto w-auto col-span-3 md:col-span-4 md:row-span-2"></div>
        <div className="bg-blue-500 col-span-3 md:col-span-2"></div>
        <div className="bg-blue-500 col-span-3 md:col-start-5 md:col-span-2"></div>
      </div>
      <div className="p-3 flex items-center flex-col text-center  bg-white md:items-start ">
        <h1 className="text-black font-bold">Casa da Praia</h1>
        <div>
          <span className="block w-48 mb-2 px-2 py-1 bg-green-700  text-white text-center font-bold rounded-full ml-1 md:inline-block md:w-auto">
            Praia
          </span>
          <span className="block w-48 mb-2 px-2 py-1 bg-green-700 text-white text-center font-bold rounded-full ml-1 md:inline-block  md:w-auto">
            Moderno
          </span>
          <span className="block w-48 mb-2 px-2 py-1 bg-green-700 text-white text-center font-bold rounded-full ml-1 md:inline-block  md:w-auto">
            Piscina
          </span>
        </div>
      </div>
    </div>
  );
};
