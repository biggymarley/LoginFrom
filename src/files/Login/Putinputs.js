import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, OutlinedInput, InputLabel , FormControl, Box, IconButton,InputAdornment} from "@material-ui/core";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import {  useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  griding_last_child_nth_child_3n___2: { gridColumn: "span 3" },
  griding: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    columnGap: theme.spacing(2),
    rowGap: theme.spacing(3),
    flexWrap: "wrap",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    gridColumn: "span 3",
  },
  textField:{
      width:"100%"
  }
}));

const Butns = (props) => {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      style={{ width: "100%" }}
    >
      <Button
        variant="outlined"
        color="primary"
        style={{ width: "100%", borderRadius: "8px" }}
        onClick={() => {}}
      >
        {props.bname}
      </Button>
    </Box>
  );
};

const GetIputs = ({input, size}) => {
  const classes = useStyles();
  const [showPassword, handleClickShowPassword] = useState(false);
  if (input.type === "password") {
    return (
      <FormControl
        className={classes.textField}
        variant="outlined"
      >
        {size ? (
          <InputLabel>{input.name}</InputLabel>
        ) : (
          <InputLabel margin="dense">{input.name}</InputLabel>
        )}

        <OutlinedInput
          type={showPassword ? "text" : "password"}
          name={input.value}
          size={size ? "medium" : "small"}
          onChange={() => {}}
          margin={size ? "none" : "dense"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => {
                  handleClickShowPassword(!showPassword);
                }}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
  } else {
    return (
      <TextField
        size={size ? "medium" : "small"}
        key={input.id}
        label={input.name}
        type={input.type}
        name={input.value}
        onChange={() => {}}
        variant="outlined"
        required={true}
      />
    );
  }
};

function PutInputs(props) {
  const classes = useStyles();
  const { inputs } = props;
  return (
    <div className={props.form !== "none" ? classes.form : classes.griding}>
      {inputs.map((input) => {
        return <GetIputs key={input.id} input={input} {...props} />;
      })}
      <Butns {...props} />
    </div>
  );
}
export default PutInputs;
