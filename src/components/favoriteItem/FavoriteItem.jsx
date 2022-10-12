
import PropTypes from 'prop-types'
import { Trash } from '../../assets/svg'
import styles from './favoriteItem.module.scss'

export const FavoriteItem = ({ favorite }) => {
    return (
        <div className={styles.favoriteItem}>
            <div className={styles.item}>
                <img className={styles.item__img} src={favorite?.image} alt={`Image of ${favorite?.actor}`} />
                <p className={styles.item__name} >{favorite?.name}</p>
                <Trash />
            </div>
            <div className={styles.container}>
                <span className={styles.container__span} ></span>
            </div>
        </div>
    );


}

FavoriteItem.propTypes = {}

FavoriteItem.defaultProps = {}