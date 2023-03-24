import React, {useEffect} from "react";

import { Header } from "../../Header/Header";
import { TeamDisplayComponent } from "./TeamDisplayComponent";
import styles from '../../../Styles/ScoreBoardStyling.module.css'
import io from "socket.io-client";

const socket = io({transports: ['http://localhost:5000']});

export function ScoreBoardCurrent() {
    useEffect(() => {
        socket.on("receiveScoreUpdate", (data) => {
            console.log(data)
        })
    }, [socket])

  return (
    <div className={styles.body}>
      <Header />
      <article>
        <div className={styles.center} >
            <section className={styles.timer}>10:00</section>
        </div>
        <section className={styles.scoreBoardGrid}>
          <div className={styles.scores}>
            <TeamDisplayComponent id={0}/>
            <TeamDisplayComponent id={1}/>
            <TeamDisplayComponent id={2}/>
          </div>
        </section>
      </article>
    </div>
  );
}
