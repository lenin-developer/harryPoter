import { string } from 'prop-types'
import styles from './inputRadio.module.scss'

export const InputRadio = ({ label, id, ...res }) => {
    return (
        <div className={styles.input}>
            <input className={styles.input__radio} type="radio" id={id}  {...res} />
            <label className={styles.input__label} htmlFor={id}>{label}</label>
        </div>
    );


}

InputRadio.propTypes = {
    labe: string,
    id: string,
}

InputRadio.defaultProps = {}