import styles from './tag.module.scss';
import {node, string} from 'prop-types'

export const Tag = ({children, text, border }) => {
    return ( 
        <div className={`${styles.tag} ${border === 'left' ? styles?.tag_borderLetf : styles?.tag_borderRight }`} >
            <p className={styles.tag__text}>{text}</p>
            {children}
        </div>
     );
}
 
Tag.propTypes = {
    children: node,
    text: string,
    border: string
}

Tag.defaultProps = {
    border: 'left'
}

