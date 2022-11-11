export default function Home() {
  return (
    <div className="bg-slate-300 py-20 px-10 grid gap-5">
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
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
    </div>
  )
}
