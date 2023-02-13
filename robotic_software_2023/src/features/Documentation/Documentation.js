import React from "react";

import { Header } from "../Header/Header";
import { documentationGrid, topicsArea, documentationArea } from "./DocumentationStyling";
import styles from '../../Styles/DocumentationStyling.module.css'

export function Documentation() {
  return (
    <div>
        <Header />
        <article className={styles.documentationGrid}>
            <section className={styles.topicsArea}>test</section>
            <section className={styles.documentationGrid}>test</section>
        </article>
    </div>
  )
}
