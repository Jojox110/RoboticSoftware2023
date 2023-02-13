export const teamDisplayStyling = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  height: "30vh",
  width: "14vw",
  border: "1px solid black",
};

export const teamDisplayGrid = {
  //   display: "flex",
  //   height: "calc(88vh - 2px)",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   flexWrap: "wrap",
  //   alignContent: "center",
  //   gap: "2rem",

  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  height: "calc(60vh + 2.5rem)",
  gap: '2rem',
};

export const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(88vh - 2px)",
};
