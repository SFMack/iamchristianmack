import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    width: "100%",
  },
  navLinks: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
