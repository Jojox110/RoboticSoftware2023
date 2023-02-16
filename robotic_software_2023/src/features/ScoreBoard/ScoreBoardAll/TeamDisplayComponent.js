import React from 'react';
import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function TeamDisplayComponent(props) {
    return (
        <article className={styles.teamDisplayStylingAll}>
            <section><p>{props.placeNumber}</p></section>
            <section>TEAM NAME OR LOGO</section>
            <section>AMOUNT OF POINTS</section>
        </article>
    )
}