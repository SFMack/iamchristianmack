import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cardGrid: {
    paddingTop: "8rem",
    paddingBottom: "8rem",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
