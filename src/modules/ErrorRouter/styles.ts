import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "100vh",
  width: "100%",

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 650,
  },

  h1: {
    fontSize: 125,
  },

  p: {
    paddingLeft: 50,
  },
});
