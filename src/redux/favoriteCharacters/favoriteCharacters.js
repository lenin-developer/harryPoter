import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites:[],
    length: 0,
}

export const favoriteCharacters = createSlice({
    name: 'favoriteCharacters',
    initialState,
    reducers: {
        addFavorite: (state, {payload})=> {
            state.favorites = [...state.favorites, payload.favorite]
        },
        removeFavorite: ()=> {

        }
    }
})

export const { addFavorite, removeFavorite } = favoriteCharacters.actions;