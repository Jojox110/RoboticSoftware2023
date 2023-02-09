export const body = {
  padding: 0,
  margin: 0,
  height: "100%",
};

export const scoreBoardGrid = {
  display: "grid",
  gridTemplateColumns: "1fr", // in this order: teams scores
  height: "calc(88vh - 2px)",
};

export const teams = {
  // far left
  display: "flex",
  height: "100%",
  backgroundColor: "lightblue",
  overflow: "hidden",
};

export const teamsTable = {
  display: "flex",
  flexWrap: "wrap",
  padding: ".5rem",
  gap: ".5rem",
};

export const teamsButton = {
  height: "9rem",
  width: "9rem",
  margin: "1rem 0",
};

export const scores = {
  // far right
  display: "flex",
  height: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
};

export const teamDisplayStyling = {
  display: "flex",
  padding: "1rem",
  border: "2px solid black",
  height: "60vh",
  width: "25vw",
  justifyContent: "center",
};

export const teamDisplayGap = {
  display: "flex",
  flexDirection: "column",
  gap: 100,
};

export const teamDisplayButtons = {
  height: "10vh",
  width: "10vw",
};

export const teamDisplayButtonsContainer = {
  display: "flex",
  flexDirection: "column",
};
