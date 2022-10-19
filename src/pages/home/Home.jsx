import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patch } from '../../patch';
import { addStaffFavorite, initStaffs, removeStaffFavorite } from '../../redux/staff/staff';
import { addStudentFavorite, initStudents, removeStudentFavorite } from '../../redux/students/students';
import { get, postFetch } from '../../utils/fetchs';
import styles from './home.module.scss';
import { SectionCards, SectionOptions, SelectFilter } from './sections';
import { ModalAddCharacter } from '../../components'
import { uploadFile } from '../../configs/firebase'
import {v4} from 'uuid'
import { characterAdapter } from '../../adapters/characterAdapter';

export const Home = () => {

    const dispatch = useDispatch()
    const { students } = useSelector(state => state?.students)
    const { staffs } = useSelector(state => state?.staffs)

    const [type, setType] = useState('ESTUDIANTE')
    const [showModal, setShowModal] = useState(false)

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
        if (data?.type === 'students') {
            if(!MaxFavorites(5)){
                dispatch(addStudentFavorite({ id: data?.id }))
            }
        } else {
            !MaxFavorites(5) && dispatch(addStaffFavorite({ id: data?.id }))
        }
    }

    const removeFavorite = (data) => {
        if (data?.type === 'students') {
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


    // ------------------- modal

    const showModalAddCharacter = () => {
        setShowModal(!showModal)
    }

    const submit = async (data) => {
        try {
            const url = await uploadFile(data?.image)

            const body = {
                id: v4(),
                ...data,
                image: url 
            }

            const bodyFormat  = characterAdapter(body)

            if(data?.type === 'students'){
                await postFetch(patch?.harryPoter.STUDENTS, bodyFormat)
                await getStudents()
            }else{
                await postFetch(patch?.harryPoter.STAFF, bodyFormat)
                await getStaff()
            }


        } catch (error) {
            console.log('error')
        }



    }



    return (
        <div className={styles.home}>
            <SectionOptions handleFavorite={handleFavorite} showModalAddCharacter={showModalAddCharacter} />
            <main className={styles?.home__main}>
                <SelectFilter showStudents={showStudents} showStaffs={showStaffs} />
                <SectionCards typeRequest={type} handleFavorite={handleFavorite} />
            </main>

            <ModalAddCharacter title={'Agregar un personaje'} show={showModal} setShow={showModalAddCharacter} submit={submit}  >
                <p>hola</p>
            </ModalAddCharacter>

        </div>
    );
}