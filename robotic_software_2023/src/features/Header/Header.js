import React from "react";

import styles from '../../Styles/HeaderStyling.module.css'
import {useNavigate} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery'

import logo from '../../logo.png'

// Import this component into every other component, do NOT render Header directly into App

export function Header() {
    const navigate = useNavigate()
    const useDesktopView = useMediaQuery('(min-width:800px)')
    //console.log("matches", useDesktopView)

    const redirectToScoreCurrent = () => {
        return navigate("/pointage/actuel/")
    }
    const redirectToScoreAll = () => {
        return navigate('/pointage/total/')
    }

    const redirectToDocs = () => {
        return navigate('/documentation/')
    }

    const redirectToHome = () => {
        return navigate('/')
    }

    const redirectToShop = () => {
        return navigate('/magasin/')
    }

    const redirectToSchedule = () => {
        return navigate('/horaire/')
    }

    const desktopView = (
        <header className={styles.headerStyles}>
            <img src={logo} />
            <section className={styles.headerStylesLinks}>
                <a href='' onClick={redirectToHome}>Accueil</a>
                <a href='' onClick={redirectToShop}>Magasin</a>
                <a href='' onClick={redirectToDocs}>Documentation</a>
                <div className={styles.dropdown}>
                    <p>Pointage</p>
                    <div className={styles.menuDropdownStyling}>
                        <a href='' onClick={redirectToScoreCurrent}>Actuel</a>
                        <a href='' onClick={redirectToScoreAll}>Total</a>
                    </div>
                </div>
                <a href='' onClick={redirectToSchedule}>Horaire</a>
            </section>
        </header>
    )

    const mobileView = (
        <header className={styles.mobileHeaderStyles}>
            {/*<section className={styles.headerStylesLogo}>COMPETITION LOGO</section>*/}
            <img src={logo} />
            <div className={styles.mobileDropdown}>
                <p className={styles.menu}>Menu</p>
                <div className={styles.mobileMenuDropdownStyling}>
                    <a href='' onClick={redirectToHome}>Accueil</a>
                    <a href='' onClick={redirectToShop}>Magasin</a>
                    <a href='' onClick={redirectToDocs}>Documentation</a>
                    <a href='' onClick={redirectToScoreCurrent}>Ronde Actuel</a>
                    <a href='' onClick={redirectToScoreAll}>Points Total</a>
                    <a href='' onClick={redirectToSchedule}>Horaire</a>
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
