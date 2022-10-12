
import PropTypes from 'prop-types'
import styles from './sectionCards.module.scss'
import { Card } from '../../../../components'
import {useSelector} from 'react-redux'

export const SectionCards = ({ typeRequest, handleFavorite }) => {


    const {students} = useSelector((state) => state.students)
    const {staffs} = useSelector((state => state?.staffs))
    const characters = typeRequest === 'ESTUDIANTE' ? students : staffs;

    return (
        <section className={styles.sectionCards}>
            {characters?.map((character, index) => (
                <Card
                    key={index}
                    data={character}
                    typeRequest={typeRequest}
                    handleFavorite={handleFavorite}
                />
            ))}
        </section>
    );


}

SectionCards.propTypes = {}

SectionCards.defaultProps = {}