import { createSlice } from "@reduxjs/toolkit";

const initialState = ['team1', 'team2', 'team3']

const currentRoundScores = createSlice({
  name: "currentRoundScores",
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const currentRoundTeams = createSlice({
  name: "currentRoundTeams",
  initialState,
  reducers : {
    removeTeam (state, action) {
      //console.log('remove')
      //console.log(state[action.payload.oldTeamId])
      const newState = [...state, state.filter(prev => prev !== state[action.payload.oldTeamId])]
      console.log(newState)
      return newState;
    },
    // addTeam (state, action) {
    //   //console.log('add')
    //   //console.log(initialState)
    //   return [...state, action.payload.newTeam]
    // }
  }
});

const reducers = {
  currentRoundScores: currentRoundScores,
  currentRoundTeams: currentRoundTeams,
};

export default reducers;
