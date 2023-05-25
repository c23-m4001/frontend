import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import { WalletApi } from '../../api/wallets/walletApi'
import { useSearchParams } from 'react-router-dom'
import useFirstTimeEffect from '../../util/useFirstTimeEffect'

export const WalletPage = () => {
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
    <h1 className="h-200px bg-gray-500">
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
  )
}
