import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import { AuthApi } from '../../api/auth/authApi'

export const LoginHistoryPage = () => {
  const { data: loginHistories, isLoading } = useQuery(
    ReactQueryKeys.LOGIN_HISTORIES,
    () => AuthApi.loginHistories().then((r) => r.data?.login_histories),
    {
      cacheTime: 0,
      retry: false,
    }
  )

  return (
    <h1 className="h-200px bg-gray-500">
      {isLoading ? (
        <h1>Loading </h1>
      ) : (
        <h4>{JSON.stringify(loginHistories)}</h4>
      )}
    </h1>
  )
}
