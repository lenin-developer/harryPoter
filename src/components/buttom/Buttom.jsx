import styles from './button.module.scss'
export const Buttom = ({ text, ...res }) => {
    return (
        <button className={styles?.btn} {...res} >
            <p className={styles?.btn__text}>
                {text}
            </p>
        </button>
    );
}