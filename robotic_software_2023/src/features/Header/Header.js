import React from "react";

import styles from '../../Styles/HeaderStyling.module.css'
import {useNavigate} from "react-router-dom";

// Import this component into every other component, do NOT render Header directly into App

export function Header() {
    const navigate = useNavigate()

    const redirectToScoreCurrent = () => {
        return navigate("/score/current/")
    }
    const redirectToScoreAll = () => {
        return navigate('/score/all/')
    }

    const redirectToDocs = () => {
        return navigate('/documentation/')
    }

    const redirectToHome = () => {
        return navigate('/')
    }

    const redirectToShop = () => {
        return navigate('/Shop/')
    }

    const redirectToSchedule = () => {
        return navigate('/Schedule/')
    }
    return (
        <header className={styles.headerStyles}>
            <section className={styles.headerStylesLogo}>COMPETITION LOGO</section>
            <section className={styles.headerStylesLinks}>
                <a href='' onClick={redirectToHome}>Home</a>
                <a href='' onClick={redirectToShop}>Shop</a>
                <a href='' onClick={redirectToDocs}>Documentation</a>
                <div className={styles.dropdown}>
                    <p>Scores</p>
                    <div className={styles.menuDropdownStyling}>
                        <a href='' onClick={redirectToScoreCurrent}>Current</a>
                        <a href='' onClick={redirectToScoreAll}>All</a>
                    </div>
                </div>
                <a href='' onClick={redirectToSchedule}>Schedule</a>
            </section>
        </header>
    );
}
