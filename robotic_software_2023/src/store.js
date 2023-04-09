import { configureStore } from "@reduxjs/toolkit";
import reducers from "./features/ScoreBoard/ScoreBoardCurrent/ScoreBoardCurrentSlice";
import shopReducers from './features/Shop/ShopSlice'
import adminReducers from "./features/AdminPanel/AdminSlice";

const { currentRoundScores, currentRoundTeams, allScores, allTeams } = reducers;
const { allItems, teamLoggedInInformation, allTeamsAmountOfMoney, teamPurchases } = shopReducers;
const { adminLogin } = adminReducers;

export const store = configureStore({
  reducer: {
    currentRoundScores: currentRoundScores.reducer,
    currentRoundTeams: currentRoundTeams.reducer,
    allScores: allScores.reducer,
    allTeams: allTeams.reducer,
    allItems: allItems.reducer,
    teamLoggedInInformation: teamLoggedInInformation.reducer,
    allTeamsAmountOfMoney: allTeamsAmountOfMoney.reducer,
    teamPurchases: teamPurchases.reducer,
    adminLogin: adminLogin.reducer
  },
});
