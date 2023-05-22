import { useIntl } from 'react-intl'
import { useAuth } from '../../core/Auth/AuthProvider'

export const Header = () => {
  const intl = useIntl()
  const { logout } = useAuth()

  return (
    <div className="px-20px bg-white w-full h-70px flex items-center justify-between">
      <button
        type="button"
        onClick={() => logout()}
        className="ml-auto btn btn-primary"
      >
        Temporary Logoutt Button
      </button>
      <button
        type="button"
        onClick={() => {}}
        className="ml-auto btn btn-primary"
      >
        {intl.formatMessage({ id: 'TRANSACTION.ADD' })}
      </button>
      <div className="ml-20px">Avatar Image</div>
    </div>
  )
}
