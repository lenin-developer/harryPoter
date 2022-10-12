import styles from './selectFilter.module.scss'
import { Buttom } from '../../../../components'
import {func} from 'prop-types'
import {TextHarry} from '../../../../assets/svg'

export const SelectFilter = ({showStudents,showStaffs}) => {
    return (
        <section className={styles.sectionFilter}>

            <TextHarry className={styles.sectionFilter__title} />
            <p className={styles?.sectionFilter__p}>Selecciona tu filtro</p>
            <div className={styles.containerBtns} >
                <Buttom text='ESTUDIANTES' onClick={()=>showStudents()} />
                <Buttom text='STAFF' onClick={()=>showStaffs()} />
            </div>
        </section>
    );


}

SelectFilter.propTypes = {
    showStudents: func.isRequired,
    showStaffs: func.isRequired,
}
