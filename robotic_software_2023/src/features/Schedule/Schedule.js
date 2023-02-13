import React from "react";

import { Header } from "../Header/Header";
import { tableRowStyling, centerTable } from "./ScheduleStyling";
import styles from '../../Styles/ScheduleStyling.module.css'

export function Schedule() {
  const scheduleDisplays = [];
  const scheduleDisplay = (
    <tr className={styles.tableRowStyling}>
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
      <div className={styles.centerTable}>
        <table>
          <tbody>
            {scheduleDisplays}
          </tbody>
        </table>
      </div>
    </div>
  );
}
