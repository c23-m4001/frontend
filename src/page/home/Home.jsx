import { useIntl } from 'react-intl'

import { useModal } from '../../core/Modal/ModalProvider'
import { useAuth } from '../../core/Auth/AuthProvider'

export const Home = () => {
  const { setModal, toggleModal } = useModal()
  const intl = useIntl()
  const { currentUser } = useAuth()

  return (
    <div>
      <h1>{intl.formatMessage({ id: 'TEST.QWE' })}</h1>
      <div>test {JSON.stringify(currentUser)}</div>
      <button
        type="button"
        onClick={() => {
          setModal(<div>Hello World Hello WorldHello WorldHello World</div>)
          toggleModal()
        }}
        className="btn btn-primary"
      >
        Primary
      </button>
    </div>
  )
}
