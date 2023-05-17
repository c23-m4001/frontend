import { useModal } from '../../core/Modal/ModalProvider';

export const Home = () => {

    const {setModal,toggleModal} = useModal();

    return (
        <div>
        <button onClick={() => {
            setModal(<div>Hello World Hello WorldHello WorldHello World</div>)
            toggleModal();
        }} class='btn btn-primary'>Primary</button>
        </div>
    )
};  
