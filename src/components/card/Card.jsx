import styles from './card.module.scss'
import { FavoriteIcon } from '../../assets/svg'
import PropTypes from 'prop-types'

export const Card = ({ data, typeRequest, handleFavorite }) => {

    let backgroundImg = ''
    if (data?.house === 'Gryffindor') backgroundImg = styles.containerImg_red;
    if (data?.house === 'Slytherin') backgroundImg = styles.containerImg_green;
    if (data?.house === 'Ravenclaw') backgroundImg = styles.containerImg_blue;
    if (data?.house === 'Hufflepuff') backgroundImg = styles.containerImg_yellow;

    let backgroundInfo = ''
    if (data?.alive) backgroundInfo = styles.containerInfo_white;
    else backgroundInfo = styles.containerInfo_gray;


    return (
        <div className={styles?.card}>
            <div className={`${styles.card__containerImg} ${backgroundImg}`}>
                <img src={data?.image} alt={`imagen de ${data?.actor}`} className={styles.card__img} />
            </div>
            <div className={`${styles.card__containerInfo} ${backgroundInfo}`}>
                <div className={styles.header}>
                    <p className={styles.header__alive}>{`${data?.alive ? 'VIVO' : 'FINADO'}`}
                        <span className={styles.header__slash}>/</span>
                        <span className={styles.header__type} >{typeRequest}</span>
                    </p>
                    <button className={styles.header__btn} onClick={()=>handleFavorite(data)}>
                        <FavoriteIcon className={`${data?.favorite ? styles.header__icon_active  : styles.header__icon}`} />
                    </button>
                </div>

                <h3 className={styles.containerInfo__name} >{data?.name}</h3>

                <div className={styles.info}>
                    <h5 className={styles.info__title}>Cumpleaños:
                        <p className={styles.info__data}>{data?.dateOfBirth ? data?.dateOfBirth : 'unknown'}</p>
                    </h5>

                    <h5 className={styles.info__title}>Género:
                        <p className={styles.info__data}>{data?.gender === 'male' ? 'Male' : 'Female'}</p>
                    </h5>

                    <h5 className={styles.info__title}>Color de ojos:
                        <p className={styles.info__data}>{data?.eyeColour ? data?.eyeColour : 'unknown'}</p>
                    </h5>

                    <h5 className={styles.info__title}>Color de pelo:
                        <p className={styles.info__data}>{data?.hairColour}</p>
                    </h5>
                </div>

            </div>
        </div>
    );


}

Card.propTypes = {

}

Card.defaultProps = {

}