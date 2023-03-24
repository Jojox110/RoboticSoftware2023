import { configureStore } from "@reduxjs/toolkit";
import reducers from "./features/ScoreBoard/ScoreBoardCurrent/ScoreBoardCurrentSlice";
import allItems from './features/Shop/ShopSlice'

const { currentRoundScores, currentRoundTeams, allScores, allTeams } = reducers;

export const store = configureStore({
  reducer: {
    currentRoundScores: currentRoundScores.reducer,
    currentRoundTeams: currentRoundTeams.reducer,
    allScores: allScores.reducer,
    allTeams: allTeams.reducer,
    allItems: allItems.reducer
  },
});
