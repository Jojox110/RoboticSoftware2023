import React, {useRef} from 'react';
import {useDispatch} from "react-redux";

export function AdminLogin() {
    const pwdRef = useRef()
    const dispatch = useDispatch()

    const validatePassword = () => {
        console.log("pwdRef.current", pwdRef.current.value)
        const password = pwdRef.current.value
        if (password[0] !== "A" && password.length !== 8) {
            return;
        }
        fetch(`http://test2.placeauxrobots.ca/teamsByPwd/${password}`)
            .then (res => {
                return res.json()
            })
            .then (res => {
                console.log("res res", res[0].ID)
                if (parseInt(res[0].ID) === 13) {
                    dispatch({
                        type: 'adminLogin/login',
                        payload: true
                    })
                }
            })
    }

    return (
        <div>
            <p>Password:</p>
            <textarea ref={pwdRef}></textarea>
            <button onClick={validatePassword}>Login</button>
        </div>
    )
}