import React from "react";

import { Header } from "../Header/Header";
import { documentationGrid, topicsArea, documentationArea } from "./DocumentationStyling";

export function Documentation() {
  return (
    <div>
        <Header />
        <article style={documentationGrid}>
            <section style={topicsArea}>test</section>
            <section style={documentationArea}>test</section>
        </article>
    </div>
  )
}
