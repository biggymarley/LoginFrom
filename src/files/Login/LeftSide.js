import { Container, Paper, Typography } from "@material-ui/core";
import useStyles from "../styles";
import signinlogo from "../imgs/signin.png";


function LeftSide() {
  const classes = useStyles();
  return (
    <Container className={classes.rcontainer}>
      <Paper className={classes.rcont}>
        <div>
          <Typography
            variant="h4"
            paragraph
            className={classes.Slhead}
            color="primary"
          >
            Hi, Welcome Back !
          </Typography>
          <img src={signinlogo} className={classes.img} alt="img" />
        </div>
      </Paper>
    </Container>
  );
}

export default LeftSide;
