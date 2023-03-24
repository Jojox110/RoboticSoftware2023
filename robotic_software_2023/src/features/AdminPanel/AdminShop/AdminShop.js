import React, {useState} from 'react';

import {Header} from "../../Header/Header";

import styles from '../../../Styles/AdminPanel.module.css'

export function AdminShop() {

    return (
        <div>
            <Header />
            <form action="http://localhost:5000/purchase/" method="post" id="form">
                <label form="school">Choose a school:</label>
                <input id="school" name="school" type="text" />
                <label form="item">Choose an item:</label>
                <input id="item" name="item" type="text" />
                <label form="amount">Enter an amount:</label>
                <input id="amount" name="amount" type="text" />
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}