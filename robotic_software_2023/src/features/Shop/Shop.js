// Component, logic goes to ShopSlice for state and ShopContainer otherwise

import React, {createRef, useRef, useEffect} from "react";
import {Header} from "../Header/Header";
import mm from '../../SchoolLogos/MM.png'
import {useDispatch, useSelector} from "react-redux";
import {store} from '../../store'
import {ItemdisplayComponent} from "./ItemDisplayComponent";

//import { dashboardStyling, articleStyling, shopStyling, testBox } from "./ShopStyling.jd";
import styles from '../../Styles/ShopStyling.module.css'

// TODO block dashboard if not logged in
const x = []
for (let i = 0; i < 10; i++) {
    // x.push(<div className={styles.testBox} key={i}>a</div>)
   // x.push(<img key={i} className={styles.imgStyling} src={mm} alt="logo Mathieu-Martin"/>)
    x.push(<ItemdisplayComponent imgSrc={mm} />)
}

let isLoggedIn = false
let loggedInTeamID = 0
let amountOfMoney = 0

export function Shop() {
    const dispatch = useDispatch()
    const ref = useRef()

    const loginStatus = useSelector(state => state.teamLoggedInInformation)
    console.log(loginStatus, "shfislhfljsd hfkjsd hlfjshjkfhlsdjkfhljksdhf")

    const fetchTeamIDByPassword = (pwd) => {
        console.log("pwd pwd", pwd)
        console.log("sfjasdklfasdfsadf", store.getState())
        fetch(`http://localhost:5000/teamidByPwd/${pwd}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                loggedInTeamID = res[0].ID
                isLoggedIn = true
            })
            .catch(reason => {
                console.log("reason for crash in fetchTeamIDByPasswword", reason)
            })
    }

    // const fetchData = () => {
    //     fetch(`http://localhost:5000/items`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(res => {
    //             dispatch({
    //                 type: 'allItems/showAllItems',
    //                 payload: {
    //                     items: res,
    //                 },
    //             })
    //         })
    // }    
    //
    // fetchData()

    const loginButtonClick = async () => {
        const pwd = ref.current.value
        console.log('pwd', pwd)
        await fetchTeamIDByPassword(pwd)

        fetch(`http://localhost:5000/usersMoney/${loggedInTeamID}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log("res for money", res)
                amountOfMoney = res[0].amountofmoney
                console.log(isLoggedIn)
                console.log(store.getState())
                dispatch({
                    type: 'teamLogin/login',
                    payload: true
                })
            })
    }

    const validatePassword = (pwd) => {
        // TODO validate password to prevent sql injection
        return true
    }

    let loginDashboard = (
        <div className={styles.dashboardStyling}>
            <p>Please log in to see how much money you have left</p>
            <textarea placeholder={"enter your password here"} ref={ref}></textarea>
            <button onClick={loginButtonClick}>testing testing
            </button>
        </div>
    )

    let loggedinDashboard = (
        <div className={styles.dashboardStyling}>
            <p>Amount of money: {amountOfMoney}</p>
        </div>
    )

    return (
        <div>
            <header>
                <Header/>
            </header>
            <article className={styles.articleStyling}>
                {isLoggedIn ? loggedinDashboard : loginDashboard}
                <section className={styles.shopStyling}>
                    {x}
                </section>
            </article>
        </div>
    );
}
