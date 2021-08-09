import linput from "./logininputs";
import PutInputs from "./Putinputs";
import Copyright from "./Copyright";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { Button, Container, Divider, Typography } from "@material-ui/core";
import google from "../imgs/Google.svg";
import facebook from "../imgs/facebook.svg";
import tweet from "../imgs/twitter.svg";
import useStyles from "../styles";

const SocialLog = () => {
  const classes = useStyles();

  const buttArray = [
    {
      avatar: (
        <Avatar alt="Remy Sharp" src={google} className={classes.small} />
      ),
      style: { height: "48px", borderRadius: "8px" },
    },
    {
      avatar: (
        <Avatar alt="Remy Sharp" src={facebook} className={classes.small} />
      ),
      style: {
        marginRight: "10px",
        marginLeft: "10px",
        height: "48px",
        borderRadius: "8px",
      },
    },
    {
      avatar: <Avatar alt="Remy Sharp" src={tweet} className={classes.small} />,
      style: { height: "48px", borderRadius: "8px" },
    },
  ];
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      paddingBottom="1rem"
    >
      {buttArray.map((elem, index) => (
        <Button variant="outlined" fullWidth key={index} style={elem.style}>
          {elem.avatar}
        </Button>
      ))}
    </Box>
  );
};

const HeadLog = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" paragraph className={classes.Shead}>
        Sign in to Website
      </Typography>
      <Typography variant="body1" paragraph className={classes.Sbody}>
        Enter your details below.
      </Typography>
    </>
  );
};

const DevidOr = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      paddingBottom="1rem"
    >
      <Divider style={{ width: "47%" }} />
      <span className={classes.or}> Or </span>
      <Divider style={{ width: "47%" }} />
    </Box>
  );
};

const ForgotCreate = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.forg}>
      <Grid item xs>
        <Link href="#" variant="body2" color="primary">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link
          variant="body2"
          color="error"
          onClick={() => {}}
          style={{ cursor: "pointer" }}
        >
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  );
};

const RightSide = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Container maxWidth="xs" disableGutters className={classes.lcon}>
        <div className={classes.wrapper}>
          <HeadLog />
          <SocialLog />
          <DevidOr />
          <PutInputs inputs={linput} size="large" bname="login" />
          <ForgotCreate />
        </div>
      </Container>
      <Box>
        <Copyright />
      </Box>
    </div>
  );
};
export default RightSide;
