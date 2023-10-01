import React from 'react';
import styles from '../../Styles/HomeStyling.module.css'

import {Header} from '../Header/Header';

export function Home() {
    return (
        <div>
            <title>Place Aux Robots</title>
            <header>
                <Header/>
            </header>
            <div className={styles.container}>
                <h1 className={styles.heading}>Bienvenue à la compétition Place Aux Robots 2023!</h1>
                <p className={styles.text}>Sur ce site web, vous pouvez y retrouvez l'horaire des rondes, les articles disponibles au magasin, la documentation pour
                le logiciel et les pièces du kit et le pointage de la compétition. Si vous aimeriez pouvoir voir combien d'argent qui vous reste, venez nous voir au Centre d'Innovation Technologie (Salle D-09) pour obtenir votre code d'équipe.</p>
                <p> <br /></p>
                <p> <br /></p>
                <p className={styles.text}>Au cas que vous avez question, n'hésitez pas de venir nous voir au Centre d'Innovation Technologique ou de nous envoyer un message sur le groupe teams Place Aux Robots 2023.</p>
                <p> <br/></p>
                <p> <br/></p>
                <p className={styles.text}>Bonne chance!</p>

            </div>
        </div>
    )
}