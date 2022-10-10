import styles from './sectionOptions.module.scss'
import { Tag } from '../../../../components'
import { FavoriteIcon, UserFillAddIcon } from '../../../../assets/svg'

export const SectionOptions = () => {
    return (
        <section className={styles.sectionOption}>
            <Tag text='FAVORITOS'>
                <FavoriteIcon className={styles.tag__icon} />
            </Tag>
            <Tag text='AGREGAR' border='rigth'>
                <UserFillAddIcon className={styles.tag__icon} />
            </Tag>
        </section>
    );
}



