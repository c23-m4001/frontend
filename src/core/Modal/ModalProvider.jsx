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
  setModal: (content, title) => {},
}

const ModalContext = createContext(initialModalContext)

const rootModalId = 'root-modals'

export const ModalProvider = ({ children }) => {
  const [title, setTitle] = useState(undefined)
  const [modal, setModal] = useState(undefined)

  const showModal = () => {
    document.getElementById(rootModalId).classList.add('modal-open')
  }

  const hideModal = () => {
    document.getElementById(rootModalId).classList.remove('modal-open')
  }

  const toggleModal = () => {
    document.getElementById(rootModalId).classList.toggle('modal-open')
  }

  const unsetModal = useCallback(() => {
    setModal(undefined)
  }, [setModal])

  const _setModal = (modalComponent, title) => {
    setModal(modalComponent)
    setTitle(title)
  }

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
          <CustomModal title={title} modal={modal} />,
          document.getElementById(rootModalId)
        )}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)

const CustomModal = ({ title,modal }) => {
  const modalRef = useRef(null)
  const { hideModal } = useModal()

  useEffect(() => {
    document.body.classList.add('modal-open')
    setTimeout(() => modalRef.current.classList.add('modal-show'), 10)

    const bind = (e) => {}

    document.addEventListener('keyup', bind)

    return () => {
      document.removeEventListener('keyup', bind)
    }
  }, [modal])

  const closeModal = () => {
    document.body.classList.remove('modal-open')
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
            <h3 className="modal-title">{title}</h3>
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeModal}
            >
              <img 
              height={20}
              width={20}
                src="/svgs/x.svg"
              />
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
