import { styled } from "../../styles";

export const Container = styled("aside", {
  height: "100vh",
  width: 250,
  padding: 15,

  backgroundColor: "$blue",
  boxShadow: "0px 10px 50px 5px rgba(0,0,0,0.2)",

  li: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
  },

  img: {
    height: 25,
    width: 25,
    margin: "7px 5px 0px 0px",
    fill: "$white",
  },
});
