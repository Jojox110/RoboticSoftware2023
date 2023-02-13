import React, { useState } from "react";
import {
  headerStyles,
  headerStylesLinks,
  headerStylesLogo,
  menuDropdownStyling,
} from "./HeaderStyling";

// Import this component into every other component, do NOT render Header directly into App

export function Header() {
  const handleChange = (type) => {
    console.log('here')
    if (type === "none") {
      menuDropdownStyling.display = "none";
    } else if (type === "block") {
      menuDropdownStyling.display = "block";
    }
  };

  return (
    <header style={headerStyles}>
      <section style={headerStylesLogo}>COMPETITION LOGO</section>
      <section style={headerStylesLinks}>
        <p>Home</p>
        <p>Shop</p>
        <div>
          <p>Docs</p>
          <div
            style={menuDropdownStyling}
            onMouseOver={handleChange("block")}
            onMouseOut={handleChange("none")}
          >
            <a href="#">Docs</a>
            <a href="#">Examples</a>
          </div>
        </div>
        <div>
          <p>Scores</p>
          <div style={menuDropdownStyling}>
            <a href="#">Current</a>
            <a href="#">All</a>
          </div>
        </div>
        <p>Schedule</p>
      </section>
    </header>
  );
}
