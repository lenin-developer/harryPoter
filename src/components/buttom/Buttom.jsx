import styles from './button.module.scss'
export const Buttom = ({ text }) => {
    return (
        <button className={styles?.btn}>
            <p className={styles?.btn__text}>
                {text}
            </p>
        </button>
    );
}