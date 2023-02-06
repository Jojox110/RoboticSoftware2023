// Component, logic goes to ShopSlice for state and ShopContainer otherwise

import React from "react";
import { Header } from "../Header/Header";

import { dashboardStyling, articleStyling, shopStyling, testBox } from "./ShopStyling";

// TODO block dashboard if not logged in
const x = []
for (let i = 0; i < 100; i++) {
    x.push(<div style={testBox}>a</div>)
}

export function Shop() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <article style={articleStyling}>
        <section style={dashboardStyling}>
          <p>Amount of money remaining: money</p>
          <p>Amount of money spent: money</p>
        </section>
        <section style={shopStyling}>
            {x}
        </section>
      </article>
    </div>
  );
}
