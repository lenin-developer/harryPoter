
import PropTypes from 'prop-types'
import styles from './inputFile.module.scss'

export const InputFile = ({text, name, ...res}) => {
    return ( 
        <div className={styles.containerInput}>
            <label className={styles.containerInput__label} htmlFor={name}>{text}</label>
            <input type="file" name={name} id={name} className={styles.containerInput__file} {...res} />
        </div>
     );


}

InputFile.propTypes = {}

InputFile.defaultProps = {}