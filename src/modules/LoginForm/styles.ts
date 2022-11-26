import { styled } from "../../styles";

export const Container = styled("main", {
  width: "100%",
  height: "100vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    height: 50,
    width: 50,
  },

  h1: {
    marginBottom: 15,
  },

  fieldset: {
    border: "none",
    display: "flex",
    flexDirection: "column",
    marginBottom: 12,
  },

  input: {
    border: "none",
    backgroundColor: "$gray",
    padding: 10,
    borderRadius: 5,
  },

  button: {
    marginTop: 25,
  },

  backgroundColor: "rgb(207,12,186)",
  background:
    "linear-gradient(90deg, rgba(207,12,186,1) 0%, rgba(0,236,255,1) 100%)",
});

export const Form = styled("form", {
  width: 600,
  height: 350,
  padding: 50,
  backgroundColor: "$white",
  borderRadius: 5,
  boxShadow: "0px 10px 20px -3px rgba(0,0,0,0.2)",
});
