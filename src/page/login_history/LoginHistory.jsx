import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import { AuthApi } from '../../api/auth/authApi'
import LoginHistoryItem from './LoginHistoryItem'

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
    <h1 className="min-h-screen bg-background">
      {isLoading ? (
        <h1>Loading </h1>
      ) : (
        //<h4>{JSON.stringify(loginHistories)}</h4>
        <div className="flex flex-col py-40px px-20px sm:px-100px lg:px-200px">
          <h4 className="font-bold text-headline text-2xl">Login History</h4>
          <div className="mt-8">
            {loginHistories.map((loginHistory) => (
              <LoginHistoryItem
                key={loginHistory.id}
                {...loginHistory}
              />
            ))}
          </div>
        </div>
      )}
    </h1>
  )
}
