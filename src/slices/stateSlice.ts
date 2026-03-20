import {createSlice} from "@reduxjs/toolkit";

export const stateSlice = createSlice({
    name: 'state',
    initialState: {
        isNative: false,
        savedCards: [] as string[]
    },
    reducers: {
        toggleIsNative: (state) => {
            state.isNative = !state.isNative;
        },


        addCard: (state,action)=>{
            state.savedCards = [...state.savedCards,...action.payload];
        }
    }
})


export const { toggleIsNative, addCard} = stateSlice.actions