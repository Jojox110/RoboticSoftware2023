import React from 'react';
import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function TeamDisplayComponent(props) {
    return (
        <article className={styles.teamDisplayStylingAll}>
            <p className={styles.teamname2}>{props.teamname}</p>
            {/*<section className={styles.teamImageDummyAll}>TEAM LOGO</section>*/}
            <div className={styles.centerImg}>
                <img src={props.img} alt="todo" />
            </div>
            <p className={styles.teamname2}>{props.score}</p>
        </article>
    )
}