// Component, logic goes to ShopSlice for state and ShopContainer otherwise

import React from "react";
import { Header } from "../Header/Header";
import mm from '../../SchoolLogos/Logo_Mathieu-Martin.png'
import { useDispatch } from "react-redux";
import {store} from "../../store";

//import { dashboardStyling, articleStyling, shopStyling, testBox } from "./ShopStyling.jd";
import styles from '../../Styles/ShopStyling.module.css'

// TODO block dashboard if not logged in
const x = []
for (let i = 0; i < 10; i++) {
    // x.push(<div className={styles.testBox} key={i}>a</div>)
    x.push(<img key={i} src={mm} alt="logo Mathieu-Martin"/>)
}

export function Shop() {
    const dispatch = useDispatch()

    const fetchData = () => {
        fetch(`http://localhost:5000/items`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                dispatch({
                    type: 'allItems/showAllItems',
                    payload: {
                        items: res,
                    },
                })
            })
    }

    fetchData()

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
