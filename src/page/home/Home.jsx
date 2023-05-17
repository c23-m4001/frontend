import { useIntl } from 'react-intl'

import { useModal } from '../../core/Modal/ModalProvider'

export const Home = () => {
  const { setModal, toggleModal } = useModal()
  const intl = useIntl()

  return (
    <div>
      <h1>{intl.formatMessage({ id: 'TEST.QWE' })}</h1>
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
