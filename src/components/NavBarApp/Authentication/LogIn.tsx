import { Button, Card, CardActions, CardContent, CardHeader, FormControl, FormHelperText, Input, InputLabel, List, ListItem, makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { validateEmail, validatePassword } from "../../../utils/utils";
import { IAuthenticationDialog } from "./Authentication";

const useStyles = makeStyles({
    title: {
      textAlign: "center",
    },
    subheader: {
      textAlign: "center",
    },
    root: {
      marginTop: 20,
    },
  });

const LogIn = (props: ILogIn) => {

    const {dialog, setDialog} = props;

  return (
    <Button 
    onClick={() =>
        setDialog({
          open: true,
          content: <LogInForm setDialog={setDialog} dialog={dialog} />,
        })
      }
    color="secondary" variant="contained">
      Log In
    </Button>
  );
};

const LogInForm = (props:ILogIn)=>{

    const classes = useStyles();

    const { setDialog, dialog } = props;
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const [usernameHelperText, setUsernameHelperText] = useState("");
    const [passwordHelperText, setPasswordHelperText] = useState("");
  
    const handleRegister = () => {
      let register = true;
      
      if (!validatePassword(password)) {
        setPasswordHelperText(
          "Password must contain minimum 8 characters, 1 letter and 1 number"
        );
        register = false;
      } else {
        setPasswordHelperText("");
      }

    };
  
    return (
      <Card>
        <CardHeader
          className={classes.title + " " + classes.root}
          title="Log In"
        />
        <CardContent>
          <List>
            <ListItem>
              <FormControl fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  error={!!usernameHelperText}
                  id="username"
                  aria-describedby="usernameHelperText"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <FormHelperText id="usernameHelperText">
                  {usernameHelperText}
                </FormHelperText>
              </FormControl>
            </ListItem>
  
            <ListItem>
              <FormControl fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  fullWidth
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  inputProps={{ type: "password" }}
                  error={!!passwordHelperText}
                  id="password"
                  aria-describedby="passwordHelperText"
                />
                <FormHelperText id="passwordHelperText">
                  {passwordHelperText}
                </FormHelperText>
              </FormControl>
            </ListItem>
  
           
          </List>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <Button
            onClick={() => {
              setDialog({content:<></>, open: false });
            }}
            size="large"
            color="secondary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            size="large"
            onClick={() => {
              handleRegister();
            }}
            color="primary"
            variant="contained"
          >
            Log In
          </Button>
        </CardActions>
      </Card>
    );


}

export default LogIn;

type ILogIn = {
  setDialog: (val: IAuthenticationDialog) => void;
  dialog:IAuthenticationDialog;
};
