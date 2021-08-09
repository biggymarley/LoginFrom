import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  copyright: {
    marginBottom: theme.spacing(2),
    opacity: 0.5,
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.complex,
    }),
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: ".6rem",
    textAlign: "center",
    "&:hover, &:focus": {
      opacity: 1,
      // fontSize: ".9rem",
    },
  },
}));

function Copyright() {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.copyright}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          {"Ayoub Faragi"}
        </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.copyright}
      >
        {"Powered by "}
        <Link color="inherit" href="https://www.linkedin.com/in/afaragi/">
          {"FARAGI Ayoub "}
        </Link>
      </Typography>
    </>
  );
}
export default Copyright;
