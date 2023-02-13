import React from 'react';

import { teamDisplayStyling } from '../../AdminPanel/AdminScore/AdminScoreStyling';
import {teamImageDummy, flexStart, teamDisplayGap, center} from './ScoreBoardCurrentStyling'

export function TeamDisplayComponent() {
    return (
        <article style={teamDisplayStyling}>
            <div style={teamDisplayGap}>
                <div style={teamImageDummy}>Team Name</div>
                <section style={flexStart}>
                    <div>AMOUNT OF POINTS:</div>
                    <div>POINTS</div>
                </section>
            </div>
        </article>
    )
}
