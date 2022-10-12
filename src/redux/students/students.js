import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    students: []
}

export const students = createSlice({
    name: 'students',
    initialState,
    reducers: {
        initStudents: (state, { payload }) => {
            state.students = payload?.students
        },
        addStudents: (state, { payload }) => {
            state.students = [
                ...state?.students,
                payload?.student
            ]
        },
        addStudentFavorite: (state, { payload }) => {
            state.students = state?.students?.map((student) => {
                if (student?.id === payload?.id) return { ...student, favorite: true }
                return student;
            })
        },
        removeStudentFavorite: (state, { payload }) => {
            state.students = state?.students?.map((student) => {
                if (student?.id === payload?.id) return { ...student, favorite: false }
                return student;
            })
        }

    }
})

export const { initStudents, addStudents, addStudentFavorite, removeStudentFavorite } = students.actions;