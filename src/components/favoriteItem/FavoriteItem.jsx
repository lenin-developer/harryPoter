
import PropTypes from 'prop-types'
import { Trash } from '../../assets/svg'
import styles from './favoriteItem.module.scss'

export const FavoriteItem = ({ favorite, handleFavorite }) => {
    return (
        <div className={`${styles.favoriteItem} ${styles.borderRadio}`}>
            <div className={`${styles.item}  ${styles.borderRadio}`}>
                <img className={styles.item__img} src={favorite?.image} alt={`Image of ${favorite?.actor}`} />
                <p className={styles.item__name} >{favorite?.name}</p>
                <button className={styles.item__btn} onClick={()=>handleFavorite(favorite)} >
                    <Trash />
                </button>
            </div>
            <div className={styles.container}>
                <span className={styles.container__span} ></span>
            </div>
        </div>
    );


}

FavoriteItem.propTypes = {}

FavoriteItem.defaultProps = {}