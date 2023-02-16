import React from "react";

import { Header } from "../Header/Header";
import styles from '../../Styles/DocumentationStyling.module.css'
import {DocumentationTemplate} from "./DocumentationTemplate";

export function Documentation() {
  return (
    <div>
        <Header />
        <article className={styles.documentationGrid}>
            <section className={styles.topicsArea}>
                <p>Topic 1</p>
                <p>Topic 2</p>
                <p>Topic 3</p>
                <p>Topic 4</p>
                <p>Topic 5</p>
                <p>Topic 6</p>
                <p>Topic 7</p>
                <p>Topic 8</p>
                <p>Topic 9</p>
            </section>
            <section className={styles.documentationArea}>
                <DocumentationTemplate />
                <DocumentationTemplate />
                <DocumentationTemplate />
                <DocumentationTemplate />
            </section>
        </article>
    </div>
  )
}
