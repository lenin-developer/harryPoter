import { createSlice } from '@reduxjs/toolkit';

 const initialState = {
    staffs: []
 }

export const staffs = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        initStaffs: (state, {payload})=>{
            state.staffs = payload?.staffs
        },
        addStaffs: (state, {payload})=>{
            state.staffs = [
                ... state.staffs,
                payload?.staff,
            ]
        },
        addStaffFavorite:(state,{payload})=> {
            state.staffs = state.staffs?.map((staff)=>{
                if(staff?.id === payload?.id) return {...staff, favorite: true }
                return staff;
            })
        },
        removeStaffFavorite: (state,{payload})=> {
            state.staffs = state.staffs?.map((staff)=>{
                if(staff?.id === payload?.id) return {...staff, favorite:false}
                return staff;
            })
        }
    }
})

export const { initStaffs, addStaffs, addStaffFavorite, removeStaffFavorite } = staffs.actions;
export default staffs.reducer;