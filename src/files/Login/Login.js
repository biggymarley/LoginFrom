import { React } from "react";
import Grid from "@material-ui/core/Grid";
import "../../App.css";
import LeftSide from "./LeftSide";
import useStyles from "../styles"
import RightSide from "./RightSide";


function Login(props) {

  const classes = useStyles();

  return (
    <div className={classes.divlogin}>
      <Grid container>
        <Grid item sm={false} md={4}>
          <LeftSide/>
        </Grid>
        <Grid item xs={12} md={8}>
         <RightSide/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
