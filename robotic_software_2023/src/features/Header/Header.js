import React from "react";

import styles from '../../Styles/HeaderStyling.module.css'
import {useNavigate} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery'


// Import this component into every other component, do NOT render Header directly into App

export function Header() {
    const navigate = useNavigate()
    const useDesktopView = useMediaQuery('(min-width:800px)')
    console.log("matches", useDesktopView)

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

    const desktopView = (
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
    )

    const mobileView = (
        <header className={styles.headerStyles}>
            <section className={styles.headerStylesLogo}>COMPETITION LOGO</section>
            <div className={styles.mobileDropdown}>
                <p>sdafasdf</p>
                <div className={styles.mobileMenuDropdownStyling}>
                    <a href='' onClick={redirectToHome}>Home</a>
                    <a href='' onClick={redirectToShop}>Shop</a>
                    <a href='' onClick={redirectToDocs}>Documentation</a>
                    <a href='' onClick={redirectToScoreCurrent}>Current round</a>
                    <a href='' onClick={redirectToScoreAll}>Total points</a>
                    <a href='' onClick={redirectToSchedule}>Schedule</a>
                </div>
            </div>
        </header>
    )

    return (
        <div>
            {/*{useDesktopView ? mobileView : desktopView}*/}
            {useDesktopView ? desktopView : mobileView}
        </div>
    );
}
