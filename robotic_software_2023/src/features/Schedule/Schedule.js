import React from "react";

import { Header } from "../Header/Header";
import { tableRowStyling, centerTable } from "./ScheduleStyling";

export function Schedule() {
  const scheduleDisplays = [];
  const scheduleDisplay = (
    <tr style={tableRowStyling}>
      <td>Round #</td>
      <td>School Name</td>
      <td>School Name</td>
      <td>School Name</td>
      <td>School Name</td>
    </tr>
  );
  for (let i = 0; i < 10; i++) {
    scheduleDisplays.push(scheduleDisplay)
  }

  return (
    <div>
      <Header />
      <div style={centerTable}>
        <table>
          <tbody>
            {scheduleDisplays}
          </tbody>
        </table>
      </div>
    </div>
  );
}
