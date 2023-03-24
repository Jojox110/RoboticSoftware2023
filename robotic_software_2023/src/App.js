import React, {useEffect} from "react";
import {useState} from "react";

import { Provider } from "react-redux";
import { store } from "./store";
import { Header } from "./features/Header/Header";
import { CommingSoon } from "./features/commingsoon/CommingSoon";
import { Home } from "./features/Home/Home";
import { Shop } from "./features/Shop/Shop";
import { AdminScore } from "./features/AdminPanel/AdminScore/AdminScore";
import { AdminShop } from './features/AdminPanel/AdminShop/AdminShop';
import { Schedule } from "./features/Schedule/Schedule";
import { Documentation } from "./features/Documentation/Documentation";
import { ScoreBoardCurrent } from "./features/ScoreBoard/ScoreBoardCurrent/ScoreBoardCurrent";
import { ScoreBoardAll } from "./features/ScoreBoard/ScoreBoardAll/ScoreBoardAll";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/score/current" element={<ScoreBoardCurrent />} />
            <Route path="/score/all" element={<ScoreBoardAll />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/admin/score" element={<AdminScore />} />
            <Route path="/admin/shop" element={<AdminShop />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
    //<CommingSoon />
  );
}
export default App;
