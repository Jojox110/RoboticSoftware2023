import React, {useRef} from 'react';
import { useDispatch } from 'react-redux'
import {Header} from "../../Header/Header";
import { store } from '../../../store'
import {AdminLogin} from "../AdminLogin";
import {useSelector} from "react-redux";

const isLoggedIn = false

// TODO: change fetch to test2.placeauxrobots.ca and make sure the routing works with the web.php file

export function AdminShop() {
    const amountRef = useRef()
    const teamnameSelectRef = useRef()
    const itemnameSelectRef = useRef()

    const loginStatus = useSelector(state => state.adminLogin)

    const fetchItemPrice = async (itemID) => {
        console.log("itemID", itemID)
        let price = 0
        await fetch(`http://test2.placeauxrobots.ca/items/${itemID}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                //console.log("res", res)
                price = res[0].price
            })
        console.log("before return price", price)
        return price
    }

    const fetchAmountOfMoney = async (teamname) => {
        console.log("please work", teamname)
        let amountOfMoney = 0
        await fetch(`http://test2.placeauxrobots.ca/teamsMoneyByName/${teamname}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                amountOfMoney = res[0].amountofmoney
            })
        console.log("before return amountofmoney", amountOfMoney)
        return amountOfMoney
    }

    const buyItem = async () => {
        // .value works
        let teamname = teamnameSelectRef.current.value
        const itemname = itemnameSelectRef.current.selectedIndex
        const amount = amountRef.current.value
        const price = await fetchItemPrice(parseInt(itemname) + 1)
        const x = await fetchAmountOfMoney(teamname)

        console.log("aaagagagagaga", x)

        console.log("buyItem price", price)

        if (x < price * amount) {
            alert(`Prix: ${price*amount} $ restant: ${x}`)
            return;
        }

        const data = {teamname: teamname, itemname: itemname, amount: amount, price: price}
        console.log("buyItem data", data)
        await fetch(`http://test2.placeauxrobots.ca/purchase/${teamname}/${itemname}/${amount}/${price}`)
    }

    const refundItem = async () => {
        // .value works
        const teamname = teamnameSelectRef.current.value
        const itemname = itemnameSelectRef.current.selectedIndex
        const amount = amountRef.current.value
        const price = await fetchItemPrice(parseInt(itemname) + 1)

        const data = {teamname: teamname, itemname: itemname, amount: amount, price: price}
        await fetch(`http://test2.placeauxrobots.ca/refund/${teamname}/${itemname}/${amount}/${price}`)
    }

    const loggedInScreen = (
        <div>
            <Header/>
            <section>
                <p>Teamname</p>
                <select ref={teamnameSelectRef}>
                    <option value="Louis-J. Robichaud">Louis-J. Robichaud</option>
                    <option value="W.-A. Losier">W.-A. Losier</option>
                    <option value="Roland-Pépin">Roland-Pépin</option>
                    <option value="Clément-Cormier">Clément-Cormier</option>
                    <option value="Aux Quatres-Vents">Aux Quatres-Vents</option>
                    <option value="Antonine-Maillet">Antonine-Maillet</option>
                    <option value="Samuel de Champlain">Samuel de Champlain</option>
                    <option value="Marie-Esther">Marie-Esther</option>
                    <option value="Odysée">Odysée</option>
                    <option value="Nepisiguit">Nepisiguit</option>
                    <option value="Cité des jeunes">Cité des jeunes</option>
                    <option value={'Carrefour de l\'Acadie'}>Carrefour de l'Acadie</option>
                </select>
                {/*<textarea ref={teamnameRef}></textarea>*/}
            </section>
            <section>
                <p>Itemname</p>
                <select ref={itemnameSelectRef}>
                    <option value="DC">Moteur DC</option>
                    <option value="Encoder">Moteur Encoder</option>
                    <option value="Manuel">Manuel</option>
                    <option value="Chenilles">Chenilles (Tracks)</option>
                    <option value="Servo">Moteur Servo</option>
                    <option value="Pince">Prince</option>
                    <option value="Carton">Carton</option>
                    <option value="3d">Imprimage 3D</option>
                </select>
                {/*<textarea ref={itemnameRef}></textarea>*/}
            </section>
            <section>
                <p>Amount</p>
                <textarea ref={amountRef}></textarea>
            </section>
            <button onClick={buyItem}>Buy</button>
            <button onClick={refundItem}>Refund</button>
        </div>
    )

    const loginScreen = (
        <div>
            <AdminLogin />
        </div>
    )

    return (
        <div>
            {loginStatus ? loggedInScreen : loginScreen}
        </div>
    )
}