import {createSlice} from '@reduxjs/toolkit'

const initialAllItemsState = []
const initialTeamLoginstate = false
const initialAllTeamAmountOfMoney = []
const initialTeamPurchases = []

const allItems = createSlice({
    name: 'allItems',
    initialState: initialAllItemsState, reducers: {
        showAllItems: (state, action) => {
            return action.payload.items;
        }
    }
})

const allTeamsAmountOfMoney = createSlice({
    name: 'allTeamAmountOfMoney',
    initialState: initialAllTeamAmountOfMoney,
    reducers: {
        showAllTeamsAmountOfMoney: (state, action) => {
            return action.payload.amountOfMoneyByTeam
        }, modifyTeamAmountOfMoney: (state, action) => {
            let newState = [...state]
            newState[action.payload.id] = action.payload.newAmountOfMoney
            return newState
        }
    }
})

const teamLoggedInInformation = createSlice({
    name: 'teamLogin',
    initialState: initialTeamLoginstate,
    reducers: {
        login: (state, action) => {
            return action.payload
        }
    }
})

const teamPurchases = createSlice({
    name: 'teamPurchases',
    initialState: initialTeamPurchases,
    reducers: {
        addPurchase: (state, action) => {
            // copy state ([...state]) and append the new item to the newState and return newState
            const newState = [...state]
            newState.push(action.payload)
            return newState
        }, refundPurchase: (state, action) => {
            // copy state, pop the new state and return newState
            const newState = [...state]
            // TODO removePurchase reducer in ShopSlice

        }
    }
})

const shopReducers = {
    allItems: allItems, teamLoggedInInformation: teamLoggedInInformation, allTeamsAmountOfMoney: allTeamsAmountOfMoney, teamPurchases: teamPurchases
}

export default shopReducers;