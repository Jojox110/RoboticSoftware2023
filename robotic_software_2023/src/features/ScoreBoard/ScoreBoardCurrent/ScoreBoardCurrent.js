import React from "react";

import { Header } from "../../Header/Header";
import { TeamDisplayComponent } from "./TeamDisplayComponent";

import {
  body,
  scores,
} from "../../AdminPanel/AdminScore/AdminScoreStyling";

import { timer, center, scoreBoardGrid } from "./ScoreBoardCurrentStyling";

export function ScoreBoardCurrent() {
  return (
    <div style={body}>
      <Header />
      <article>
        <div style={center}>
            <section style={timer}>10:00</section>
        </div>
        <section style={scoreBoardGrid}>
          <div style={scores}>
            <TeamDisplayComponent />
            <TeamDisplayComponent />
            <TeamDisplayComponent />
          </div>
        </section>
      </article>
    </div>
  );
}
