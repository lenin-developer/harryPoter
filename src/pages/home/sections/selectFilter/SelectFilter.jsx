import styles from './selectFilter.module.scss'
import { Buttom } from '../../../../components'
import PropTypes from 'prop-types'

export const SelectFilter = () => {
    return (
        <section className={styles?.sectionFilter}>
            <h1 className={styles?.sectionFilter__title}>Harrypotter</h1>
            <p className={styles?.sectionFilter__p}>Selecciona tu filtro</p>
            <div className={styles?.containerBtns} >
                <Buttom text='ESTUDIANTES' />
                {/* <span className={styles?.space} ></span> */}
                <Buttom text='STAFF' />
            </div>
        </section>
    );


}

SelectFilter.propTypes = {}

SelectFilter.defaultProps = {}