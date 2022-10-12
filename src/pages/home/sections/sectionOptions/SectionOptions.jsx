import styles from './sectionOptions.module.scss'
import { Tag, FavoriteItem } from '../../../../components'
import { FavoriteIcon, UserFillAddIcon } from '../../../../assets/svg'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const SectionOptions = () => {

    const { students } = useSelector((state) => state?.students)
    const { staffs } = useSelector((state) => state?.staffs)
    const [listFavorite, setListFavorite] = useState([])


    useEffect(() => {
        const listFavoritesStudent = students.filter((student) => student?.favorite === true)
        const listFavoritesStaff = staffs.filter((staff) => staff?.favorite === true)
        setListFavorite([...listFavoritesStudent, ...listFavoritesStaff])
    }, [students,staffs])


    return (
        <section className={styles.sectionOption}>
            <div className={styles.wrappre__tag}>
                <Tag text='FAVORITOS' >
                    <FavoriteIcon className={styles.tag__icon} />
                </Tag>

                <Tag text='AGREGAR' border='rigth'>
                    <UserFillAddIcon className={styles.tag__icon} />
                </Tag>
                <div className={styles.favorite}>
                    {listFavorite?.map((favorite) => (
                        <FavoriteItem key={favorite?.id} favorite={favorite} />
                    ))}
                </div>

            </div>
        </section>
    );
}



