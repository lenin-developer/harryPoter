import PropTypes from 'prop-types'
import { Modal, InputText, InputRadio, InputFile, BtnSutmit, Buttom } from '../../components'
import styles from './modalAddCharacter.module.scss'
import { useEffect, useState } from 'react';
import { uploadFile } from '../../configs/firebase'
import { characterSchema,characterInit } from '../../schemas/character'

export const ModalAddCharacter = ({ title, show, setShow, submit }) => {


    const [values, setValues] = useState({
        ...characterInit
    })

    const changeValue = ({ target }) => {
        const { name } = target;
        setValues({
            ...values,
            [name]: target.value
        })
    }

    const upload = ({target}) => {
        const { name } = target;
        const file = target.files[0]
        setValues({
            ...values,
            [name]: file
        })
    }

    const AddCharacter = async(e) => {
        e.preventDefault()
        const isValid = await characterSchema.isValid(values)
        if (isValid) {
            await submit(values)
            setValues({
               ...characterInit
            })
        }
    }



    return (
        <>
            <Modal title={title} show={show} setShow={() => setShow()}>
                <form className={styles.addCharacter} onSubmit={AddCharacter} >

                    <div className={styles.addCharacter__sectionInputs}>
                        <InputText label={'NOMBRE'} name={'name'} value={values?.name} onChange={changeValue} />
                        <InputText label={'COLOR DE OJOS'} name={'eyeColour'} value={values?.eyeColour} onChange={changeValue} />
                    </div>
                    <div className={styles.addCharacter__sectionInputs}>
                        <InputText label={'CUMPLEAÑOS'} name={'dateOfBirth'} value={values?.dateOfBirth} onChange={changeValue} />
                        <InputText label={'COLOR DE PELO'} name={'hairColour'} value={values?.hairColour} onChange={changeValue}/>
                    </div>

                    <div className={styles.addCharacter__sectionRadio}>
                        <p className={styles.sectionRadio__title}>GÉNERO</p>
                        <div className={styles.sectionRadio__options}>
                            <InputRadio label={'Mujer'} id={'female'} name={'gender'}  value={'female'} checked={values.gender === 'female'}  onChange={changeValue} />
                            <InputRadio label={'Hombre'} id={'male'} name={'gender'} value={'male'} checked={values.gender === 'male'} onChange={changeValue} />
                        </div>
                    </div>

                    <div className={styles.addCharacter__sectionRadios} >
                        <p className={styles.sectionRadio__title}>POSICIÓN</p>
                        <div className={styles.sectionRadio__options}>
                            <InputRadio label={'Estudiante'} id={'students'} name={'type'} value={'students'} checked={values.type === 'students'} onChange={changeValue} />
                            <InputRadio label={'Staff'} id={'staff'} name={'type'} value={'staff'} checked={values.type === 'staff'} onChange={changeValue} />
                        </div>
                    </div>

                    <div>
                        <InputFile text={'FOTOGRAFIA'} name={'image'} onChange={upload} />
                    </div>

                    <div className={styles.footer} >
                        <Buttom text={'GUARDAR'}/>
                    </div>


                </form>
            </Modal>
        </>
    );


}

ModalAddCharacter.propTypes = {}

ModalAddCharacter.defaultProps = {}