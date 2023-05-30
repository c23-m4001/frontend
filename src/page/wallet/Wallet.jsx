import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import { WalletApi } from '../../api/wallets/walletApi'
import { useSearchParams } from 'react-router-dom'
import useFirstTimeEffect from '../../util/useFirstTimeEffect'

export const WalletPage = ({ amount }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get('page')) || 1
  const limit = 10
  const phrase = undefined

  const { data, isLoading, refetch } = useQuery(
    ReactQueryKeys.WALLET_FILTER,
    () =>
      WalletApi.fetchWallets({
        page,
        limit,
        phrase,
        sorts: [{ field: 'name', direction: 'asc' }],
      }).then((r) => r.data),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  useFirstTimeEffect(
    (firstTime) => {
      if (!firstTime) {
        refetch()
      }
    },
    [page]
  )

  return (
    <div className="min-h-screen bg-background">
    <h1 className="font-poppins">
      {page > 1 && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setSearchParams({ page: page - 1 })}
        >
          Previous Page
        </button>
      )}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setSearchParams({ page: page + 1 })}
      >
        Next Page
      </button>

      {isLoading ? (
        <p> Loading </p>
      ) : (
        <>
          <p>{JSON.stringify(data)}</p>
          <p>
            {' '}
            Total Page (Math.ceil(total / limit)):{' '}
            {Math.ceil(parseFloat(data.total) / limit)}
          </p>
        </>
      )}
    </h1>
    <div className="flex justify-center">
      <h1 className="font-poppins font-bold text-3xl text-headline">Wallet</h1>
      <button
      type="button"
        className="btn btn-primary rounded-xl ml-96 font-poppins font-normal font-bold text-sm leading-18"
      >
        Tambah Wallet
      </button>
      <div className="w-full sm:w-4/5 md:max-w-800px sm:gap-8 absolute flex flex-col sm:flex-row items-center mt-24">
  <div className="w-4/5 flex flex-col items-left bg-white text-paragraph p-8 rounded-md mb-4">
    <div className="font-semibold text-xl pb-1"></div>
    <div className="flex items-center">
      <img
        alt="cash icon"
        src="/svgs/cash.svg"
        className={`duration-500 w-12 h-12 mr-4`}
      />
      <div>
        <div className="flex flex-col">
        <p className="font-bold text-headline">Cash</p>
          <p className="font-bold font-normal">Rp.{amount}200,000</p>
        </div>
      </div>
      <button 
        type="button"
        className="flex items-center bg-transparent border-none focus:outline-none">
      <img
        alt="add icon"
        src="/svgs/addicon.svg"
        className={`duration-500 w-9 h-9 ml-16 mr-5`}
      />
      </button>
      <button 
        type="button"
        className="flex items-center bg-transparent border-none focus:outline-none">
      <img
        alt="add icon"
        src="/svgs/deleteicon.svg"
        className={`duration-500 w-9 h-9`}
      />
      </button>
    </div>
          </div>
        <div className="w-4/5 flex flex-col items-center bg-white text-paragraph p-8 rounded-md mb-4">
          <div className="font-semibold text-xl pb-1"></div>
          <div className="flex items-center">
      <img
        alt="cash icon"
        src="/svgs/pigicon.svg"
        className={`duration-500 w-12 h-12 mr-4`}
      />
      <div>
        <div className="flex flex-col">
        <p className="font-bold text-headline">BNI</p>
          <p className="font-bold font-normal">Rp.{amount}200,000</p>
        </div>
      </div>
      <button 
        type="button"
        className="flex items-center bg-transparent border-none focus:outline-none">
      <img
        alt="add icon"
        src="/svgs/addicon.svg"
        className={`duration-500 w-9 h-9 ml-16 mr-5`}
      />
      </button>
      <button 
        type="button"
        className="flex items-center bg-transparent border-none focus:outline-none">
      <img
        alt="add icon"
        src="/svgs/deleteicon.svg"
        className={`duration-500 w-9 h-9`}
      />
      </button>
    </div>
        </div>
      </div>
      <div className="w-full sm:w-4/5 md:max-w-800px sm:gap-8 absolute flex flex-col sm:flex-row items-center mt-60">
  <div className="w-4/5 flex flex-col items-left bg-white text-paragraph p-8 rounded-md mb-4">
    <div className="font-semibold text-xl pb-1"></div>
    <div className="flex items-center">
      <img
        alt="cash icon"
        src="/svgs/pigicon.svg"
        className={`duration-500 w-12 h-12 mr-4`}
      />
      <div>
        <div className="flex flex-col">
        <p className="font-bold text-headline">BCA</p>
          <p className="font-bold font-normal">Rp.{amount}200,000</p>
        </div>
      </div>
      <button 
        type="button"
        className="flex items-center bg-transparent border-none focus:outline-none">
      <img
        alt="add icon"
        src="/svgs/addicon.svg"
        className={`duration-500 w-9 h-9 ml-16 mr-5`}
      />
      </button>
      <button 
        type="button"
        className="flex items-center bg-transparent border-none focus:outline-none">
      <img
        alt="add icon"
        src="/svgs/deleteicon.svg"
        className={`duration-500 w-9 h-9`}
      />
      </button>
    </div>
          </div>
        <div className="w-4/5 flex flex-col items-center bg-white text-paragraph p-8 rounded-md mb-4">
          <div className="font-semibold text-xl pb-1"></div>
          <div className="flex items-center">
      <img
        alt="cash icon"
        src="/svgs/cash.svg"
        className={`duration-500 w-12 h-12 mr-4`}
      />
      <div>
        <div className="flex flex-col">
        <p className="font-bold text-headline">Bonus</p>
          <p className="font-bold font-normal">Rp.{amount}200,000</p>
        </div>
      </div>
      <button 
        type="button"
        className="flex items-center bg-transparent border-none focus:outline-none">
      <img
        alt="add icon"
        src="/svgs/addicon.svg"
        className={`duration-500 w-9 h-9 ml-16 mr-5`}
      />
      </button>
      <button 
        type="button"
        className="flex items-center bg-transparent border-none focus:outline-none">
      <img
        alt="add icon"
        src="/svgs/deleteicon.svg"
        className={`duration-500 w-9 h-9`}
      />
      </button>
    </div>
        </div>
      </div>
      </div>
      </div>

  )
}
