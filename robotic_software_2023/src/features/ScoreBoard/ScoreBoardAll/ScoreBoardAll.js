import React from "react";
import { Header } from "../../Header/Header";
import { TeamDisplayComponent } from "../ScoreBoardAll/TeamDisplayComponent";
import { teamDisplayGrid, center } from "./ScoreBoardAllStyling";

export function ScoreBoardAll() {
  return (
    <div>
      <Header />
      <div style={center}>
        <article style={teamDisplayGrid}>
            <TeamDisplayComponent placeNumber={"First Place"} />
            <TeamDisplayComponent placeNumber={"Second Place"} />
            <TeamDisplayComponent placeNumber={"Third Place"} />
            <TeamDisplayComponent placeNumber={"Fourth Place"} />
            <TeamDisplayComponent placeNumber={"Fifth Place"} />
            <TeamDisplayComponent placeNumber={"Sixth Place"} />
            <TeamDisplayComponent placeNumber={"Seventh Place"} />
            <TeamDisplayComponent placeNumber={"Eighth Place"} />
            <TeamDisplayComponent placeNumber={"Nineth Place"} />
            <TeamDisplayComponent placeNumber={"Tenth Place"} />
            <TeamDisplayComponent placeNumber={"Eleventh Place"} />
        </article>
      </div>

    </div>
  );
}
