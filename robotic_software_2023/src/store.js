import { configureStore } from "@reduxjs/toolkit";
import reducers from "./features/ScoreBoard/ScoreBoardCurrent/ScoreBoardCurrentSlice";

const { currentRoundScores, currentRoundTeams } = reducers;

export const store = configureStore({
  reducer: {
    currentRoundScores: currentRoundScores.reducer,
    currentRoundTeams: currentRoundTeams.reducer,
  },
});
