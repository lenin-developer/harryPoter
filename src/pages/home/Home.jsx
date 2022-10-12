import { useEffect, useState } from 'react';
import styles from './home.module.scss'
import { SectionOptions, SelectFilter, SectionCards } from './sections'
import { get } from '../../utils/fetchs'
import { patch } from '../../patch'
import { useDispatch, useSelector } from 'react-redux';
import { initStudents, addStudentFavorite, removeStudentFavorite } from '../../redux/students/students'
import { initStaffs, addStaffFavorite, removeStaffFavorite } from '../../redux/staff/staff'

export const Home = () => {

    const dispatch = useDispatch()
    const { students } = useSelector(state => state?.students)
    const { staffs } = useSelector(state => state?.staffs)

    const [type, setType] = useState('ESTUDIANTE')

    const getStudents = async () => {
        const students = await get(patch?.harryPoter?.STUDENTS)
        dispatch(initStudents({ students: students?.data }))
    }

    const getStaff = async () => {
        const staffs = await get(patch?.harryPoter?.STAFF)
        dispatch(initStaffs({ staffs: staffs?.data }))
    }

    const showStudents = () => {
        setType('ESTUDIANTE')
    }

    const showStaffs = () => {
        setType('PERSONAL')
    }

    useEffect(() => {
        getStudents()
        getStaff()
    }, [])

    // ---------------  Favorito
    const MaxFavorites = (size) => {
        const listFavoritesStudent = students.filter((student) => student?.favorite === true)
        const listFavoritesStaff = staffs.filter((staff) => staff?.favorite === true)
        const listFavorite = [...listFavoritesStudent, ...listFavoritesStaff]
        const isMax = listFavorite.length >= size;
        return isMax;
    }

    const addFavorite = (data) => {
        if (type === 'ESTUDIANTE') {
            !MaxFavorites(5) && dispatch(addStudentFavorite({ id: data?.id }))
        } else {
            !MaxFavorites(5) && dispatch(addStaffFavorite({ id: data?.id }))
        }
    }

    const removeFavorite = (data) => {
        if (type === 'ESTUDIANTE') {
            dispatch(removeStudentFavorite({ id: data?.id }))
        } else {
            dispatch(removeStaffFavorite({ id: data?.id }))
        }
    }

    const handleFavorite = (data) => {
        if (data?.favorite) {
            removeFavorite(data)
        } else {
            addFavorite(data)
        }
    }

    return (
        <div className={styles.home}>
            <SectionOptions />
            <main className={styles?.home__main}>
                <SelectFilter showStudents={showStudents} showStaffs={showStaffs} />
                <SectionCards typeRequest={type} handleFavorite={handleFavorite} />
            </main>
        </div>
    );
}