import { createSlice } from "@reduxjs/toolkit";

const initialTeamState = ['team1', 'team2', 'team3']
const initialScoreState = [0, 0, 0]
const initialAllTeamsState = []
const initialAllScoresState = []

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
    },
    updateTeamPoint (state, action) {
      const newState = [...state]
      console.log("newScore asafasdfasd", action.payload.newScore)
      newState[action.payload.id] = action.payload.newScore
      return newState
    }
  },
});

const currentRoundTeams = createSlice({
  name: "currentRoundTeams",
  initialState: initialTeamState,
  reducers : {
    swapTeam (state, action) {
      console.log("here here here ")
      const newState = [...state]
      newState[action.payload.id] = [action.payload.newTeam, 0, action.payload.id]
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

const allTeams = createSlice({
  name: 'allTeams',
  initialState: initialAllTeamsState,
  reducers: {
    showAllTeams (state, action) {
      console.log("all teams")
      return [
          action.payload.teams
      ]
    }
  }
})

const allScores = createSlice({
  name: 'allScores',
  initialState: initialAllScoresState,
  reducers: {
    showAllScores (state, action) {
      console.log("all scores")
      return [
          action.payload.scores
      ]
    }
  }
})

const reducers = {
  currentRoundScores: currentRoundScores,
  currentRoundTeams: currentRoundTeams,
  allTeams: allTeams,
  allScores: allScores,
};

export default reducers;
