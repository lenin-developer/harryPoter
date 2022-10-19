import styles from './sectionOptions.module.scss'
import { Tag, FavoriteItem } from '../../../../components'
import { FavoriteIcon, UserFillAddIcon } from '../../../../assets/svg'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const SectionOptions = ({ handleFavorite,showModalAddCharacter }) => {

    const { students } = useSelector((state) => state?.students)
    const { staffs } = useSelector((state) => state?.staffs)
    const [listFavorite, setListFavorite] = useState([])
    const [showListFavorites, setShowListFavorites] = useState(false)


    useEffect(() => {
        const listFavoritesStudent = students?.filter((student) => student?.favorite === true)
        const listFavoritesStaff = staffs?.filter((staff) => staff?.favorite === true)
        setListFavorite([...listFavoritesStudent, ...listFavoritesStaff])
    }, [students, staffs])


    return (
        <section className={`${styles.sectionOption} ${styles.borderRadio}`}>
            <div className={`${styles.wrappre__tag} ${styles.borderRadio}`}>
                <Tag text='FAVORITOS' onClick={()=>setShowListFavorites(!showListFavorites)} >
                    <FavoriteIcon className={styles.tag__icon} />
                </Tag>

                <Tag text='AGREGAR' border='rigth' onClick={()=>showModalAddCharacter()} >
                    <UserFillAddIcon className={styles.tag__icon} />
                </Tag>
                {showListFavorites && 
                    <div className={ `${styles.favorite} ${styles.borderRadio}` }>

                        { listFavorite?.length > 0 ? 
                        listFavorite?.map((favorite) => (
                            <FavoriteItem key={`${favorite?.id}-${favorite?.type}`} favorite={favorite} handleFavorite={handleFavorite} />
                        ))

                        :   <p>no hay favotitos</p>
                        
                        }
                    </div>
                    
                }

            </div>
        </section>
    );
}



