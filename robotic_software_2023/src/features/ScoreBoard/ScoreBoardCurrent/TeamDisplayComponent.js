import React from 'react';

import { teamDisplayStyling } from '../../AdminPanel/AdminScore/AdminScoreStyling';
import {teamImageDummy, flexStart, teamDisplayGap, center} from './ScoreBoardCurrentStyling'
import styles from '../../../Styles/ScoreBoardStyling.module.css'

export function TeamDisplayComponent() {
    return (
        <article className={styles.teamDisplayStyling}>
            <div className={styles.teamDisplayGap}>
                <div className={styles.teamImageDummy}>Team Name</div>
                <section className={styles.flexStart}>
                    <div>AMOUNT OF POINTS:</div>
                    <div>POINTS</div>
                </section>
            </div>
        </article>
    )
}
