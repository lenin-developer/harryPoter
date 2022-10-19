
import {string} from 'prop-types'
import styles from './btnSubmit.module.scss'

export const BtnSutmit = ({text, disable, ...res}) => {
    return ( 
        <button type='submit' className={`${styles.btn} ${disable ? styles.btn_disable : ''}`} disabled={disable} {...res} >
            {text}
        </button>
     );


}

BtnSutmit.propTypes = {
    text: string,
}

BtnSutmit.defaultProps = {}