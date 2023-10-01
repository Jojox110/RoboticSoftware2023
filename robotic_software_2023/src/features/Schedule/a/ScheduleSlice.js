import { createSlice } from '@reduxjs/toolkit'

const initialAllRoundsState = [[], [], [], [], [], [], [], [], [], [], [], []]
const initialCurrentRoundState = ['', '', '']

const allRounds = createSlice({
    name: 'allRounds',
    initialState: initialAllRoundsState,
    reducers: {
        showAllRounds: (state, action) => {
            // put each round into their nested list in the state
            // idk if this is needed, todo if so
        }
    }
})

const currentRound = createSlice({
    name: 'currentRound',
    initialState: initialCurrentRoundState,
    reducers: {
        setCurrentRound: (state, action) => {
            console.log("action", action.payload)
            return action.payload
        },
        showCurrentRound: (state, action) => {
            // idk if this is needed
        }
    }
})

const currentRoundReducers = {
    currentRound: currentRound
}

export default currentRoundReducers