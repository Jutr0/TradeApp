import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import API from "../../../utils/API";
import { UserContext } from "../../../utils/UserContext";
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
  const { dialog, setDialog } = props;

  return (
    <Button
      onClick={() =>
        setDialog({
          open: true,
          content: <LogInForm setDialog={setDialog} dialog={dialog} />,
        })
      }
      color="secondary"
      variant="contained"
    >
      Log In
    </Button>
  );
};

const LogInForm = (props: ILogIn) => {
  const classes = useStyles();

  const { setDialog, dialog } = props;

  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameHelperText, setUsernameHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const handleLogIn = () => {
    let logIn = true;

    if (logIn) {
      API.isUser(username, undefined, password).then((res) => {
        if (res) {
          API.findUser(username).then((res) => {
            console.log(res);
            setUsernameHelperText("");
            setUser(res);
            setDialog({...dialog,open:false})
          });
        } else if (res !== undefined) {
          setUsernameHelperText("Wrong username or password");
        }
      });
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
            setDialog({ content: <></>, open: false });
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
            handleLogIn();
          }}
          color="primary"
          variant="contained"
        >
          Log In
        </Button>
      </CardActions>
    </Card>
  );
};

export default LogIn;

type ILogIn = {
  setDialog: (val: IAuthenticationDialog) => void;
  dialog: IAuthenticationDialog;
};
