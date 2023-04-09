import React, {useRef} from 'react';
import { useDispatch } from 'react-redux'
import {Header} from "../../Header/Header";
import { store } from '../../../store'
import {AdminLogin} from "../AdminLogin";
import {useSelector} from "react-redux";

const isLoggedIn = false

export function AdminShop() {
    const amountRef = useRef()
    const teamnameSelectRef = useRef()
    const itemnameSelectRef = useRef()

    const loginStatus = useSelector(state => state.adminLogin)

    const fetchItemPrice = async (itemID) => {
        console.log("itemID", itemID)
        let price = 0
        await fetch(`http://localhost:5000/items/${itemID}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log("res", res)
                price = res[0].price
            })
        console.log("before return price", price)
        return price
    }

    const buyItem = async () => {
        // .value works
        const teamname = teamnameSelectRef.current.value
        const itemname = itemnameSelectRef.current.selectedIndex
        const amount = amountRef.current.value
        const price = await fetchItemPrice(itemname)

        console.log("buyItem price", price)

        const data = {teamname: teamname, itemname: itemname, amount: amount, price: price}
        console.log("buyItem data", data)
        fetch(`http://localhost:5000/purchase/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }) // POST PURCHASE REQ
            .then (_ => {
                console.log("a")
            })
    }

    const refundItem = async () => {
        // .value works
        const teamname = teamnameSelectRef.current.value
        const itemname = itemnameSelectRef.current.selectedIndex
        const amount = amountRef.current.value
        const price = await fetchItemPrice(itemname)

        const data = {teamname: teamname, itemname: itemname, amount: amount, price: price}
        fetch(`http://localhost:5000/refund/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }) // POST REFUND REQ
            .then(res => {
                console.log("res refund", res)
            })
    }

    const loggedInScreen = (
        <div>
            <Header/>
            <section>
                <p>Teamname</p>
                <select ref={teamnameSelectRef}>
                    <option>team1</option>
                    <option>team2</option>
                    <option>team3</option>
                </select>
                {/*<textarea ref={teamnameRef}></textarea>*/}
            </section>
            <section>
                <p>Itemname</p>
                <select ref={itemnameSelectRef}>
                    <option>item1</option>
                    <option>item2</option>
                    <option>item3</option>
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