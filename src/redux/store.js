import { configureStore } from '@reduxjs/toolkit'
import {favoriteCharacters} from './favoriteCharacters/favoriteCharacters'
import {students} from './students/students'
import {staffs} from './staff/staff'

export default configureStore({
  reducer: {
    favoriteCharacters: favoriteCharacters.reducer,
    students: students.reducer,
    staffs: staffs.reducer,
  }
})