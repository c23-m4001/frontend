import { useIntl } from 'react-intl'
import SVG from 'react-inlinesvg'
import { useAuth } from '../../core/Auth/AuthProvider'
import { Button } from '../../components/button/Button'

export const Header = ({ children }) => {
  const intl = useIntl()
  const { logout } = useAuth()

  return (
    <div className="w-full flex flex-col">
      <div className="px-20px bg-white w-full h-70px flex items-center justify-between">
        <Button
          type={'button'}
          btnName={'Logout'}
          className={'ml-auto btn btn-primary'}
          onClick={() => logout()}
        />
        <button
          type="button"
          onClick={() => {}}
          className="ml-auto btn btn-primary"
        >
          {intl.formatMessage({ id: 'TRANSACTION.ADD' })}
        </button>

        <SVG
          className="ml-20px"
          src="/svgs/avatar.svg"
        />
      </div>
      {children}
    </div>
  )
}
