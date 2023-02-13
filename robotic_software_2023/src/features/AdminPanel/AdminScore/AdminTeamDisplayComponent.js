import React from  'react';
import { store } from '../../../store';
import { teamDisplayStyling, teamDisplayGap, teamDisplayButtons, teamDisplayButtonsContainer } from './AdminScoreStyling';

export function AdminTeamDisplayComponent(props) {
    return (
        <div style={teamDisplayStyling}>
            <div style={teamDisplayGap}>
                <div>{props.teamName}</div>
                <div>Amount of points</div>
                <div style={teamDisplayButtonsContainer}>
                    <button style={teamDisplayButtons}>+</button>
                    <button style={teamDisplayButtons}>-</button>
                </div>
            </div>
        </div>
    )
}