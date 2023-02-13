// Component, logic goes to ShopSlice for state and ShopContainer otherwise

import React from "react";
import { Header } from "../Header/Header";

//import { dashboardStyling, articleStyling, shopStyling, testBox } from "./ShopStyling.jd";
import styles from '../../Styles/ShopStyling.module.css'

// TODO block dashboard if not logged in
const x = []
for (let i = 0; i < 100; i++) {
    x.push(<div className={styles.testBox} key={i}>a</div>)
}

export function Shop() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <article className={styles.articleStyling}>
        <section className={styles.dashboardStyling}>
          <p>Amount of money remaining: money</p>
          <p>Amount of money spent: money</p>
        </section>
        <section className={styles.shopStyling}>
            {x}
        </section>
      </article>
    </div>
  );
}
