import React from 'react';
import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function TeamDisplayComponent(props) {
    return (
        <article className={styles.teamDisplayStylingAll}>
            <section><p>{props.placeNumber}</p></section>
            <section className={styles.teamImageDummyAll}>TEAM LOGO</section>
            <p>AMOUNT OF POINTS</p>
        </article>
    )
}