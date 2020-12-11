import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroContent: {
    padding: "8rem 0",
  },
  heroGrid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resumeButton: {
    backgroundColor: "black",
    color: "white",
  },
  changeFlexDirectionWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between",
  },
}));
