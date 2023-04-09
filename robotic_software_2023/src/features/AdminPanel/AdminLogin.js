import React, {useRef} from 'react';
import {useDispatch} from "react-redux";

export function AdminLogin() {
    const pwdRef = useRef()
    const dispatch = useDispatch()

    const validatePassword = () => {
        console.log("pwdRef.current", pwdRef.current.value)
        const password = pwdRef.current.value
        fetch(`http://localhost:5000/teamidByPwd/${password}`)
            .then (res => {
                return res.json()
            })
            .then (res => {
                console.log("res res", res)
                dispatch({
                    type: 'adminLogin/login',
                    payload: true
                })
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