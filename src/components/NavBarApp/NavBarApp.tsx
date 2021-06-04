import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const NavBarApp = (props: IProps) => {
  return (
    <AppBar>
      <Button
        onClick={() => {
          props.openMenu();
        }}
        startIcon={<MenuIcon />}
        style={{ height: 50 }}
      />
    </AppBar>
  );
};

export default NavBarApp;
type IProps = {
  openMenu: () => void;
};
