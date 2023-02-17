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
                <a href="#ten">Topic 1</a>
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
                <div id="one"><DocumentationTemplate x="one"/></div>
                <div id="two"><DocumentationTemplate x="two"/></div>
                <div id="three"><DocumentationTemplate x="three"/></div>
                <div id="four"><DocumentationTemplate x="four"/></div>
                <div id="five"><DocumentationTemplate x="five"/></div>
                <div id="six"><DocumentationTemplate x="six"/></div>
                <div id="seven"><DocumentationTemplate x="seven"/></div>
                <div id="eight"><DocumentationTemplate x="eight"/></div>
                <div id="nine"><DocumentationTemplate x="nine"/></div>
                <div id="ten"><DocumentationTemplate x="ten"/></div>
                <div id="eleven"><DocumentationTemplate x="eleven"/></div>
                <div id="twelve"><DocumentationTemplate x="twelve"/></div>
                <div id="thirtteen"><DocumentationTemplate x="thirtteen"/></div>
            </section>
        </article>
    </div>
  )
}
