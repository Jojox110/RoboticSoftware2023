import React from 'react';

import {Header} from "../../Header/Header";

import styles from '../../../Styles/AdminPanel.module.css'

export function AdminShop() {
    const onSelect = () => {

    }

    return (
        <div>
            <Header/>
            <section className={styles.shopDisplay}>
                <div className={styles.column}>
                    <label htmlFor="school">Choisir l'école:</label>
                    <select name="school" id="school">
                        <option value="team1">team1</option>
                        <option value="team2">team2</option>
                        <option value="team3">team3</option>
                        <option value="team4">team4</option>
                    </select>
                </div>

                <div className={styles.column}>
                    <label htmlFor="item">Choisir l'item:</label>
                    <select name="item" id="item">
                        <option value="moteur">Moteur</option>
                        <option value="moteur">Moteur</option>
                        <option value="moteur">Moteur</option>
                        <option value="moteur">Moteur</option>
                    </select>
                </div>

                <div className={styles.column}>
                    <label htmlFor="amount">Montant:</label>
                    <select name="amount" id="amount">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <p></p>
            </section>
        </div>
    )
}