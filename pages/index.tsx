export default function Home() {
  return (
    <div className="bg-slate-300 py-20 px-20 grid gap-5 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between">
          <span className="text-gray-400">Grey Chair</span>
          <span className="font-semibold">$14</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Tooly Table</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$59</span>
        </div>
        <button className="mt-5 bg-blue-500 p-2 text-center text-white rounded-xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-400 focus:bg-red-400">
          Check Out
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl ">
        <div className="bg-blue-500 p-6 text-2xl pb-14">
          <span className="text-white">Profile</span>
        </div>
        <div className="bg-white rounded-3xl p-6 relative -top-5 group">
          <div className="relative -top-16 flex items-end justify-between ">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-slate-500 group-hover:bg-lime-500 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molly</span>
            <span className="text-sm text-gray-400">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl ">
        <div className="flex justify-between mb-5">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 " />
        <div className="flex flex-col">
          <span className="font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-400">Chair</span>
          <div className="flex justify-between items-center mt-3 mb-5">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex justify-center items-center bg-blue-200 w-8 aspect-square rounded-xl text-gray-500 text-lg">
                -
              </button>
              <span>1</span>
              <button className="flex justify-center items-center bg-blue-200 w-8 aspect-square rounded-xl text-gray-500 text-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">$450</span>
            <span className="bg-blue-500 py-2 px-10 text-center text-sm text-gray-100 rounded-lg ">
              Add to cart
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
    </div>
  )
}
