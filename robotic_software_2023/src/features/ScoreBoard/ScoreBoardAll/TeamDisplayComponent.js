import React from 'react';
import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function TeamDisplayComponent(props) {
    return (
        <article className={styles.teamDisplayStylingAll}>
            <p>{props.teamname}</p>
            <section className={styles.teamImageDummyAll}>TEAM LOGO</section>
            <p>{props.score}</p>
        </article>
    )
}