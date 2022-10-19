import styles from './button.module.scss'
export const Buttom = ({ text, disable, ...res }) => {
    return (
        <button className={`${styles?.btn} ${disable ? styles.btn_disable : ''}`}  {...res} >
            {text}
        </button>
    );
}