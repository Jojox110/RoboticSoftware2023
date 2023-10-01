// Component, logic goes to ShopSlice for state and ShopContainer otherwise

import React, {createRef, useRef, useEffect} from "react";
import {Header} from "../Header/Header";
import mm from '../../SchoolLogos/MM.png'
import {useDispatch, useSelector} from "react-redux";
import {store} from '../../store'
import {ItemdisplayComponent} from "./ItemDisplayComponent";

import encoder from '../../encodershop.png'
import dc from '../../dcshop.png'
import servo from '../../servoshop.png'
import manual from '../../manuelshop.png'
import cardboard from '../../cardboardshop.png'
import print from '../../printshop.png'
import track from '../../trackshop.png'
import claw from '../../pinceshop.png'

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

    const fetchTeamIDByPassword = async (pwd) => {
        console.log("pwd pwd", pwd)
        console.log("sfjasdklfasdfsadf", store.getState())
        await fetch(`http://test2.placeauxrobots.ca/teamsByPwd/${pwd}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                loggedInTeamID = res[0].ID
                isLoggedIn = true
                console.log("done id")
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
        console.log("id", loggedInTeamID)

        await fetch(`http://test2.placeauxrobots.ca/teamsMoney/${loggedInTeamID}`)
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
            <p>Entrer votre code d'équipe (disponible au magasin) pour voir comment d'argent qui vous reste:</p>
            <textarea placeholder={"Entrer votre code ici"} ref={ref}></textarea>
            <button onClick={loginButtonClick}>Soumettre</button>
        </div>
    )

    let loggedinDashboard = (
        <div className={styles.loggedInDashboardStyling}>
            <p>Montant d'argent restant: {amountOfMoney}</p>
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
                    <ItemdisplayComponent img={dc} max="2" price="200$" name="Moteur DC"/>
                    <ItemdisplayComponent img={encoder} max="1" price="500$" name="Moteur Encoder"/>
                    <ItemdisplayComponent img={track} max="1" price="300$" name="Chenilles"/>
                    <ItemdisplayComponent img={cardboard} max="aucun max" price="100$" name="Carton" />
                    <ItemdisplayComponent img={print} max="aucun max" price="5$/gram" name="Imprimage 3D"/>
                    <ItemdisplayComponent img={servo} max="2" price="300$" name="Moteur Servo"/>
                    <ItemdisplayComponent img={claw} max="1" price="600" name="Pince" />
                </section>
            </article>
        </div>
    );
}
