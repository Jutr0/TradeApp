import { Dialog, Modal } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import Authentication from "./Authentication/Authentication";

const NavBarApp = (props: IProps) => {
  const { openMenu } = props;

  return (
    <AppBar
      color="primary"
      style={{
        minHeight: 50,
        justifyContent: "space-between",
        padding: "0 20px",
        flexDirection: "row",
      }}
    >
      <Button
        onClick={() => {
          openMenu();
        }}
        startIcon={<MenuIcon fontSize="large" />}
        style={{ minWidth: 100, height: 50 }}
      />
      <Authentication />
    </AppBar>
  );
};

export default NavBarApp;
type IProps = {
  openMenu: () => void;
};
