import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#FFFFFF",
  },
  divlogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    height: `calc(100vh - 150px)`,
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(4, 4),
      marginBottom: 0,
    },
    marginBottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "100px",
  },
  rcont: {
    height: `calc(90vh)`,
    width: "100%",
    borderRadius: theme.spacing(2),
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  Shead: {
    fontFamily: "Public Sans, sans-serif",
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: theme.palette.error.main,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    alignSelf: "flex-start",
  },
  Slhead: {
    fontFamily: "Public Sans, sans-serif",
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginLeft: theme.spacing(2),
    color: theme.palette.primary.light,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    alignSelf: "flex-start",
  },
  Sbody: {
    fontFamily: "Public Sans, sans-serif",

    color: theme.palette.primary.main,
    alignSelf: "flex-start",
  },
  rcontainer: {
    display: "none",
    alignItems: "center",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  lcon: {
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 3),
    },
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forg: {
    paddingTop: theme.spacing(10),
  },
  col: {
    color: `${theme.palette.text.primary} !important`,
  },
  small: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  or: {
    paddingRight: "10px",
    paddingLeft: "10px",
    fontFamily: "Public Sans, sans-serif",
    color: theme.palette.primary.main,
  },
  img: {
    width: "100%",
  },
}));

export default useStyles;
