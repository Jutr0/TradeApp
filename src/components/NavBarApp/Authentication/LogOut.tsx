import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../../utils/UserContext";

const LogOut = () => {

  const { setUser } = useContext(UserContext);

  const handleLogOut = ()=>{

    setUser(null)

  }

  return (
    <Button onClick={handleLogOut} color="secondary" variant="contained">
      Log Out
    </Button>
  );
};

export default LogOut;
