import {
  Box,
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
import { Button, Typography } from "@material-ui/core";
import { LensTwoTone } from "@material-ui/icons";
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

const Register = (props: IRegister) => {
  const { setDialog, dialog } = props;

  return (
    <Button
      onClick={() =>
        setDialog({
          open: true,
          content: <RegisterForm setDialog={setDialog} dialog={dialog} />,
        })
      }
      color="secondary"
      variant="contained"
    >
      Register
    </Button>
  );
};

const RegisterForm = (props: IRegister) => {
  const classes = useStyles();

  const { setDialog, dialog } = props;
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const repPasswordRef = useRef("");

  const [usernameHelperText, setUsernameHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [repPasswordHelperText, setRepPasswordHelperText] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");

  const handleRegister = () => {
    if (usernameHelperText) setUsernameHelperText("");
    let register = true;
    if (!validateEmail(email)) {
      setEmailHelperText("Incorrect email");
      register = false;
    } else {
      setEmailHelperText("");
    }
    if (!validatePassword(password)) {
      setPasswordHelperText(
        "Password must contain minimum 8 characters, 1 letter and 1 number"
      );
      register = false;
    } else {
      setPasswordHelperText("");
    }
    if (password !== repPassword) {
      setRepPasswordHelperText("Passwords are different");
      register = false;
    } else {
      setRepPasswordHelperText("");
    }
    if (register) {
      API.isUser(username, email).then((res) => {
        if (res) {
          setUsernameHelperText("This username or email is already in use");
        } else if (res !== undefined) {
          API.addUser({ name: username, email, password }).then((res) =>
            {setUser(res)
            setDialog({...dialog,open:false})}
          );
        }
      });
    }
  };

  return (
    <Card>
      <CardHeader
        className={classes.title + " " + classes.subheader + " " + classes.root}
        title="Create your account"
        subheader="It's totally free"
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

          <ListItem>
            <FormControl fullWidth>
              <InputLabel htmlFor="repPassword">Repeat password</InputLabel>
              <Input
                value={repPassword}
                onChange={(e) => {
                  setRepPassword(e.target.value);
                }}
                inputProps={{ type: "password" }}
                error={!!repPasswordHelperText}
                id="repPassword"
                aria-describedby="repPasswordHelperText"
              />
              <FormHelperText id="repPasswordHelperText">
                {repPasswordHelperText}
              </FormHelperText>
            </FormControl>
          </ListItem>

          <ListItem>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                value={email}
                error={!!emailHelperText}
                id="email"
                aria-describedby="emailHelperText"
                onChange={(e) => {
                  emailRef.current = e.target.value;
                  setEmail(emailRef.current);
                }}
              />
              <FormHelperText id="emailHelperText">
                {emailHelperText}
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
            handleRegister();
          }}
          color="primary"
          variant="contained"
        >
          Register
        </Button>
      </CardActions>
    </Card>
  );
};

export default Register;

type IRegister = {
  setDialog: (val: IAuthenticationDialog) => void;
  dialog: IAuthenticationDialog;
};
