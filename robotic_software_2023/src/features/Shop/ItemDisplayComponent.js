import React from 'react';
import styles from '../../Styles/ShopStyling.module.css'

export function ItemdisplayComponent(props) {
    return (
        <div>
            <img src={props.imgSrc} alt="aaa" className={styles.imgStyling}/>
            <div>ITEM PRICE</div>
            <div>ITEM DESC</div>
        </div>
    )
}