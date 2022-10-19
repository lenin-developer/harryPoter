import * as yup from 'yup';

export let characterSchema = yup.object().shape({
    name: yup.string().required(),
    dateOfBirth: yup.string().required(),
    eyeColour: yup.string().required(),
    hairColour: yup.string().required(),
    gender: yup.string().required(),
    type: yup.string().required(),
    image: yup.mixed().required(),
});

export const characterInit = {
    name: '',
    dateOfBirth: '',
    eyeColour: '',
    hairColour: '',
    gender: '',
    type: '',
    image: null,
}