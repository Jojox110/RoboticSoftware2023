import React from "react";

import { Header } from "../../Header/Header";
import { tableRowStyling, centerTable } from "../ScheduleStyling";
import styles from '../../../Styles/ScheduleStyling.module.css'

export function Schedule() {
  const scheduleDisplays = [];
  const scheduleDisplay = (
    <tr className={styles.tableRowStyling}>
      <td>Round #</td>
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
          <tr className={styles.tableRowStyling}>
              <td>Ronde 1:</td>
              <td>Louis-J. Robichaud</td>
              <td>Aux Quatres-Vents</td>
              <td>Odysée</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 2:</td>
              <td>Roland-Pépin</td>
              <td>Cité des jeunes</td>
              <td>Antonine-Maillet</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 3:</td>
              <td>Carrefour de l'Acadie</td>
              <td>Samuel de Champlain</td>
              <td>W.-A. Losier</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 4:</td>
              <td>Clément-Cormier</td>
              <td>Nepisiguit</td>
              <td>Marie-Esther</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 5:</td>
              <td>Louis-J. Robichaud</td>
              <td>Cité des jeunes</td>
              <td>W.-A. Losier</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 6:</td>
              <td>Aux Quatres-Vents</td>
              <td>Clément-Cormier</td>
              <td>Samuel de Champlain</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 7:</td>
              <td>Antonine-Maillet</td>
              <td>Nepisiguit</td>
              <td>Carrefour de l'Acadie</td>

          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 8:</td>
              <td>Odysée</td>
              <td>Roland-Pépin</td>
              <td>Marie-Esther</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 9:</td>
              <td>Carrefour de l'Acadie</td>
              <td>Cité des jeunes</td>
              <td>Clément-Cormier</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 10:</td>
              <td>Odysée</td>
              <td>Nepisiguit</td>
              <td>W.-A. Losier</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 11:</td>
              <td>Antonine-Maillet</td>
              <td>Aux Quatres-Vents</td>
              <td>Marie-Esther</td>
          </tr>
          <tr className={styles.tableRowStyling}>
              <td>Ronde 12:</td>
              <td>Louis-J. Robichaud</td>
              <td>Roland-Pépin</td>
              <td>Samuel de Champlain</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
