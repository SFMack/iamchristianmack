import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contactContainer: {
    height: "30rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  headingTextWrapper: {
    width: "50%",
  },
  headingText: {
    color: "green",
  },
}));
