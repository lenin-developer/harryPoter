
import {string} from 'prop-types'
import styles from './InputText.module.scss'

export const InputText = ({label, name, ...res}) => {
    return ( 
        <div className={styles.input}>
            <label className={styles.input__label} htmlFor={name}>{label}</label>
            <input className={styles.input__text} type="text" id={name} name={name} autoComplete="off" {...res} />
        </div>
     );


}

InputText.propTypes = {
    label: string,
    id: string
}

InputText.defaultProps = {

}