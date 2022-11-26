import { styled } from "../../styles";

export const Container = styled("nav", {
  display: "flex",
  justifyContent: "space-between",

  width: "100%",
  padding: "25px 50px",
  margin: "0 auto",

  ul: {
    display: "flex",
  },

  li: {
    listStyle: "none",
    display: "flex",
    margin: "0 10px",

    p: {
      margin: "0 5px",
    },
  },

  backgroundColor: "$white",
});
