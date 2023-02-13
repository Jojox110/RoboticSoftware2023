import React from 'react';
import {teamDisplayStyling} from './ScoreBoardAllStyling'

export function TeamDisplayComponent(props) {
    return (
        <article style={teamDisplayStyling}>
            <section><p>{props.placeNumber}</p></section>
            <section>TEAM NAME OR LOGO</section>
            <section>AMOUNT OF POINTS</section>
        </article>
    )
}