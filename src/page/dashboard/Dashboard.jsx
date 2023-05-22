import { useIntl } from 'react-intl'

import { useAuth } from '../../core/Auth/AuthProvider'

export const DashboardPage = () => {
  const intl = useIntl()
  const { currentUser, logout } = useAuth()

  return (
    <div>
      <h1>{intl.formatMessage({ id: 'TEST.QWE' })}</h1>
      <div>test {JSON.stringify(currentUser)}</div>
      <button
        type="button"
        onClick={() => logout()}
        className="btn btn-primary"
      >
        Logout
      </button>
    </div>
  )
}
