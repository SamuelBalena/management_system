import { styled } from "../../styles";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontWeight: "bold",
  borderRadius: 10,

  color: "$white",
  border: "none",
  cursor: "pointer",

  variants: {
    colors: {
      green: {
        backgroundColor: "$green",
      },
    },
    size: {
      ex: {
        width: "100%",
        padding: 10,
      },
      lg: {
        padding: 15,
        width: 250,
      },
      md: {
        padding: 15,
        width: 200,
      },
      sm: {
        padding: 15,
        width: 150,
      },
    },
  },
});
