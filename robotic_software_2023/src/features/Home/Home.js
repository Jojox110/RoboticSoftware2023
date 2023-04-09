import React, {useEffect} from 'react';
import {useState} from "react";
import {useFetch} from "../hooks";
import axios from 'axios'

import {Header} from '../Header/Header';

export function Home() {
    const [data, setData] = useState([])

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

    const fetchData = async () => {
        fetch("http://localhost:5000/currentround/1")
            .then(response => {
                return response.json()
            })
            .then (x => {
                setData(x)
            })
    }

        useEffect(() => {
            fetchData()
        }, [])

    return (
        <div>
            <header>
                <Header/>
            </header>
            <div>
                {data.map(user => (
                    <div key={user.id}>{user.teamname}{user.amountofpoints}</div>
                ))}
            </div>
        </div>
    )
}