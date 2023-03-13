import { createSlice } from "@reduxjs/toolkit";

const initialTeamState = ['team1', 'team2', 'team3']
const initialScoreState = [0, 0, 0]

const currentRoundScores = createSlice({
  name: "currentRoundScores",
  initialState: initialScoreState,
  reducers: {
    increment: (state, action) => {
      const newState = [...state]
      newState[action.payload] += 1
      return newState
    },
    decrement: (state, action) => {
      const newState = [...state]
      newState[action.payload] -= 1
      return newState
    },
    showCurrentPoints (state, action) {
      return [
          action.payload.team1, action.payload.team2, action.payload.team3
      ]
    }
  },
});

const currentRoundTeams = createSlice({
  name: "currentRoundTeams",
  initialState: initialTeamState,
  reducers : {
    swapTeam (state, action) {
      const newState = [...state]
      console.log("a aa a", newState, action.payload)
      newState[action.payload.id] = [action.payload.newTeam, 0, action.payload.id]
      console.log('a', newState)
      return newState
    },
    showCurrentTeams (state, action) {
      console.log("show teams")
      return [
          action.payload.team1, action.payload.team2, action.payload.team3
      ]
    }
  }
});


const reducers = {
  currentRoundScores: currentRoundScores,
  currentRoundTeams: currentRoundTeams,
};

export default reducers;
