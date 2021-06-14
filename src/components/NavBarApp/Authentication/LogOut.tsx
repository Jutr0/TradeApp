import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../../utils/UserContext";
import { IAuthenticationDialog } from "./Authentication";

const LogOut = (props: IProps) => {

  const { dialog, setDialog } = props;

  const {user, setUser } = useContext(UserContext);

  const handleLogOut = () => {
    setUser(null);
  };

  return (<div style={{display:"flex", alignItems:"center"}}>
    <span style={{marginRight:"1rem"}}>
      Hello {user?.name}! 
    </span>

    <Button onClick={handleLogOut} color="secondary" variant="contained">
      Log Out
    </Button>
  </div>
  );
};

export default LogOut;

type IProps = {
  dialog: IAuthenticationDialog;
  setDialog: (val: IAuthenticationDialog) => void;
};
