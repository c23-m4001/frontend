import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

const initialModalContext = {
  showModal: () => {},
  hideModal: () => {},
  toggleModal: () => {},
  unsetModal: () => {},
  setModal: () => {},
}

const ModalContext = createContext(initialModalContext)

const rootModalId = 'root-modals'

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(undefined)

  const showModal = () => {
    document.getElementById(rootModalId).classList.remove('d-none')
  }

  const hideModal = () => {
    document.getElementById(rootModalId).classList.add('d-none')
  }

  const toggleModal = () => {
    document.getElementById(rootModalId).classList.toggle('d-none')
  }

  const unsetModal = useCallback(() => {
    setModal(undefined)
  }, [setModal])

  const _setModal = (modalComponent) => setModal(modalComponent)

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
        toggleModal,
        unsetModal,
        setModal: _setModal,
      }}
    >
      {children}
      {modal &&
        createPortal(
          <CustomModal modal={modal} />,
          document.getElementById(rootModalId)
        )}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)

const CustomModal = ({ modal }) => {
  const modalRef = useRef(null)
  const { unsetModal, hideModal } = useModal()

  useEffect(() => {
    document.body.classList.add('modal-open')
    setTimeout(() => modalRef.current.classList.add('modal-show'), 10)

    const bind = (e) => {}

    document.addEventListener('keyup', bind)

    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keyup', bind)
    }
  }, [modal])

  const closeModal = () => {
    unsetModal()
    hideModal()
  }

  return (
    <>
      <div
        ref={modalRef}
        className="modal fade show d-block"
        role="dialog"
        tabIndex={-1}
        aria-modal="true"
        onClick={closeModal}
      >
        {/* begin::Modal Dialog */}
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          {/* begin::Modal Header */}
          <div className="modal-header">
            <h3 className="modal-title">Title</h3>
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeModal}
            >
              X Close
            </button>
          </div>
          {/* end::Modal Header */}
          <div className="modal-seperator"></div>
          {/* begin::Modal Content */}
          <div className="modal-content">{modal}</div>
          {/* end::Modal Content */}
        </div>
        {/* end::Modal Dialog */}
      </div>
    </>
  )
}
