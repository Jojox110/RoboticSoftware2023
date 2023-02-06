import React, { useState } from "react";
import {
  headerStyles,
  headerStylesLinks,
  headerStylesLogo,
} from "./HeaderStyling";

// Import this component into every other component, do NOT render Header directly into App

export function Header() {
  return (
    <header style={headerStyles}>
      <section style={headerStylesLogo}>COMPETITION LOGO</section>
      <section style={headerStylesLinks}>
        <p>Home</p>
        <p>Shop</p>
        <p>Docs</p>
        <p>Points</p>
        <p>Schedule</p>
      </section>
    </header>
  );
}
