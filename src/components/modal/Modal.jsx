import styles from './modal.module.scss'
import { bool, func, node, string } from 'prop-types'
import {CloseIcon} from '../../assets/svg'

export const Modal = ({ children, title, show, setShow }) => {
    return (
        <>
            {show &&
                <section className={styles.modal} >
                    <div className={styles.modal__container}>
                        <header className={styles.modal__header}>
                            <h2 className={styles.modal__title} >{title}</h2>
                            <button className={styles.modal__closeBtn} onClick={() => setShow(!show)}>
                                <CloseIcon />
                            </button>
                        </header>
                        <main className={styles.modal__main}>
                            {children}
                        </main>
                    </div>
                </section>
            }
        </>
    );
}

Modal.propTypes = {
    children: node,
    title: string,
    show: bool.isRequired,
    setShow: func.isRequired,
}