import React from "react";

import styles from '../../Styles/HeaderStyling.module.css'
import {useNavigate} from "react-router-dom";

// Import this component into every other component, do NOT render Header directly into App

export function Header() {
    // const handleChange = (type) => {
    //   console.log('here')
    //   if (type === "none") {
    //     menuDropdownStyling.display = "none";
    //   } else if (type === "block") {
    //     menuDropdownStyling.display = "block";
    //   }
    // };


    let navigate = useNavigate()

    const redirectToScoreCurrent = () => {
        console.log('current')
        return navigate('/score/current')
    }
    const redirectToScoreAll = () => {
        return navigate('/score/all/')
    }

    return (<header className={styles.headerStyles}>
        <section className={styles.headerStylesLogo}>COMPETITION LOGO</section>
        <section className={styles.headerStylesLinks}>
            <p>Home</p>
            <p>Shop</p>
            <div className={styles.dropdown}>
                <p>Docs</p>
                <div
                    className={styles.menuDropdownStyling}
                >
                    <a href="#">Docs</a>
                    <a href="#">Examples</a>
                </div>
            </div>
            <div className={styles.dropdown}>
                <p>Scores</p>
                <div className={styles.menuDropdownStyling}>
                    <button onClick={redirectToScoreCurrent}>Current</button>
                    <button onClick={redirectToScoreAll}>All</button>
                </div>
            </div>
            <p>Schedule</p>
        </section>
    </header>);
}
