'use client';

import UserCard from "./assets/UserCard";
import ActivityCard from "./assets/ActivityCard";
import classes from "./page.module.css";
import {useEffect, useState} from "react";



const initialState = {
    photo: "/image-jeremy.png",
    period: 'Weekly',
    data: [],
}

async function handler(setState) {
    let response = await fetch('/data.json')
        .then(response => response.json())
        .then(json => {
                setState(json)
            }
        );

}

export default function Page() {
    const [period, setPeriod] = useState(initialState.period);
    const [data, setState] = useState(initialState.data);

    useEffect(() => {
        handler(setState);
    }, [period])

    return (
        <main className={classes.main}>
            <div className={classes.card}>
                <UserCard name='Jeremy Robson' photo={initialState.photo} handle={setPeriod}/>
            </div>
            {data.map((el) => (
                <ActivityCard
                    headerName={el.title.replace(" ", "")}
                    currentData={el.timeframes[period.toLowerCase()].current}
                    previousData={el.timeframes[period.toLowerCase()].previous}
                />
            ))}
        </main>
    )
}
