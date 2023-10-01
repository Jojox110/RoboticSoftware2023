import {createSlice} from "@reduxjs/toolkit";

const initialTeamState = ['team1', 'team2', 'team3']
const initialScoreState = [0, 0, 0]
const initialAllTeamsState = ['team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7', ' team8', 'team9', 'team10', 'team11']
const initialAllScoresState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const initialAllImgpathState = ['', '', '', '', '', '', '', '', '', '', '', '']
const initialTimerState = ''
const initialTimerStatusState = true

const currentRoundScores = createSlice({
    name: "currentRoundScores",
    initialState: initialScoreState,
    reducers: {
        increment: (state, action) => {
            const newState = [...state]
            console.log("asdkfasfasdf eeeeeeeeeee", typeof newState[action.payload], newState[action.payload])
            newState[action.payload] = parseInt(newState[action.payload]) + 1
            return newState
        },
        decrement: (state, action) => {
            const newState = [...state]
            newState[action.payload] -= 1
            return newState
        },
        showCurrentPoints(state, action) {
            return [
                action.payload.team1, action.payload.team2, action.payload.team3
            ]
        },
        updateTeamPoint(state, action) {
            const newState = [...state]
            console.log("newScore asafasdfasd", action.payload.newScore, newState[action.payload.id])
            newState[action.payload.id] = action.payload.newScore
            console.log("new state", newState)
            return newState
        },
        resetTeamScore(state, action) {
            const newState = [...state]
            newState[action.payload.id] = 0
            return newState
        }
    },
});

const currentRoundTeams = createSlice({
    name: "currentRoundTeams",
    initialState: initialTeamState,
    reducers: {
        swapTeam(state, action) {
            console.log("here here here ")
            const newState = [...state]
            newState[action.payload.id] = [action.payload.newTeam, 0, action.payload.id]
            return newState
        },
        showCurrentTeams(state, action) {
            console.log("show teams")
            return [
                action.payload.team1, action.payload.team2, action.payload.team3
            ]
        }
    }
});

const allTeams = createSlice({
    name: 'allTeams',
    initialState: initialAllTeamsState,
    reducers: {
        showAllTeams(state, action) {
            console.log("all teams")
            return [
                action.payload.teams
            ]
        }
    }
})

function deepCopy(obj) {
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                newObj[key] = deepCopy(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}

const allScores = createSlice({
    name: 'allScores',
    initialState: initialAllScoresState,
    reducers: {
        showAllScores(state, action) {
            console.log("all scores")
            return [
                action.payload.scores
            ]
        },
        changeAllScores(state, action) {
            console.log("changeAllScores")
            let newState = deepCopy(state)
            console.log("newState reducer", newState, newState[0][action.payload.id], action.payload.id, "newScore", action.payload.newScore)
            newState[0][action.payload.id] += action.payload.newScore
            console.log("newState reducer v2", newState)
            return newState
        }
    }
})

// const allImgpath = createSlice({
//     name: 'allImgpath',
//     initialState: initialAllImgpathState,
//     reducers: {
//         showAllImgpaths (state, action) {
//             return [
//                 action.payload
//             ]
//         }
//     }
// })

const timerTime = createSlice({
    name: 'timerTime',
    initialState: initialTimerState,
    reducers: {
        setTimerEnd: (state, action) => {
            return action.payload
        }
    }
})

const timerStatus = createSlice({
    name: 'timerStatus',
    initialState: initialTimerStatusState,
    reducers: {
        changeTimerStatus: (state, action) => {
            return action.payload
        }
    }
})

const reducers = {
    currentRoundScores: currentRoundScores,
    currentRoundTeams: currentRoundTeams,
    allTeams: allTeams,
    allScores: allScores,
    timerTime: timerTime,
    timerStatus: timerStatus
};

export default reducers;
