import {createSlice} from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name: 'state',
    initialState: {
        isNative: false,
        savedCards: []
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