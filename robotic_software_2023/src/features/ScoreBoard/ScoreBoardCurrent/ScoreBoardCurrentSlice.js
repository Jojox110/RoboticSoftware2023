import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

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
  reducers: {
    addTeam: {
      reducer: (state, action) => {
        return [...state, action.payload];
      },
    },
    removeTeam: {
      redicer: (state, action) => {
        return [
          ...state,
          state.filter((prev) => prev.id !== action.payload.id),
        ];
      },
    },
  },
});

const reducers = {
  currentRoundScores: currentRoundScores,
  //currentRoundTeams: currentRoundTeams,
};

export default reducers;
