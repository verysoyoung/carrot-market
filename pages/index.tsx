export default function Home() {
  return (
    <div className="bg-slate-300 py-20 px-20 grid gap-5">
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
        <div className="mt-5 bg-blue-500 p-2 text-center text-white rounded-xl w-2/4 mx-auto">
          Check Out
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-6 text-2xl pb-14">
          <span className="text-white">Profile</span>
        </div>
        <div className="bg-white rounded-3xl p-6 relative -top-5">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-slate-500" />
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
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
    </div>
  )
}
