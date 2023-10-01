import React from 'react';
import styles from '../../Styles/ShopStyling.module.css'

export function ItemdisplayComponent(props) {
    return (
        <div>
            <img src={props.img} alt={props.name} className={styles.imgStyling}/>
            <div>Nom: {props.name}</div>
            <div>Prix: {props.price}</div>
            <div>Max: {props.max}</div>
        </div>
    )
}