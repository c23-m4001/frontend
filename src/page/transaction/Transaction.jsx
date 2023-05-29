export const TransactionPage = ({ amount }) => {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-background text-white">
      <div className="bg-primary w-full">
        <h1 className="m-8 text-2xl top-0">Transaksi</h1>
        <div className="flex flex-col items-center">
          <h2 className="text-lg pb-4 font-semibold">Cashflow</h2>
          <div className="font-semibold text-4xl pb-28">
            Rp.{amount}4,750,000
          </div>
        </div>
      </div>

      <div className="w-full sm:w-4/5 md:max-w-800px sm:gap-8 absolute flex flex-col sm:flex-row items-center mt-60">
        <div className="w-4/5 flex flex-col items-center bg-white text-green-600 p-8 rounded-md mb-4">
          <div className="font-semibold text-xl pb-1">Rp.{amount}4,750,000</div>
          <p className="font-bold text-headline">Gross Income</p>
        </div>
        <div className="w-4/5 flex flex-col items-center bg-white text-danger p-8 rounded-md mb-4">
          <div className="font-semibold text-xl pb-1">Rp.{amount}200,000</div>
          <p className="font-bold text-headline">Expense</p>
        </div>
      </div>
      <div className="w-full sm:w-4/5 md:max-w-800px flex flex-col items-center mt-60 sm:mt-24">
        <div className="w-4/5 sm:w-full flex flex-col items-center bg-white text-headline p-2 rounded-md mb-4">
          <div className="w-full sm:px-12 md:px-16 flex text-center text-xs lg:text-lg py-3 border-b-2">
            <div className="flex-1">Last month</div>
            <div className="flex-1">This month</div>
            <div className="flex-1">Future</div>
          </div>
          <div className="w-full sm:px-12 md:px-16 flex-col text-xs lg:text-base p-3">
            <div className="flex justify-between">
              <p>Starting balance</p>
              <p>Rp. 4,750,000</p>
            </div>
            <div className="flex justify-between">
              <p>Inflow</p>
              <p className="text-green-600">+Rp. 680,000</p>
            </div>
            <div className="flex justify-between">
              <p>Outflow</p>
              <p className="text-danger">-Rp. 2,000,000</p>
            </div>
          </div>
          <div className="w-full sm:px-12 md:px-16 text-xs lg:text-base pb-3">
            <div className="flex justify-between pt-3 border-t-2">
              <p>Total</p>
              <p>Rp. 3,430,000</p>
            </div>
          </div>
        </div>

        <div className="w-4/5 sm:w-full flex flex-col items-center bg-white text-headline p-2 rounded-md mb-4">
          <div className="w-full flex text-center text-xs lg:text-lg py-3 border-b-2">
            <div className="flex-1">This month</div>
          </div>
          <div className="w-full sm:px-12 md:px-16 flex text-xs lg:text-base p-3 justify-between items-center">
            {/* TODO: For each this month transaction with element below */}
            <div className="flex gap-4 flex-1 items-center">
              <img src="/svgs/avatar.svg" className="w-6" />
              <p className="">Salary</p>
            </div>
            <p className="flex-1 text-right text-green-600">+Rp. 680,000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
