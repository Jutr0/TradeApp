import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, Modal } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import SiderMenuListItem from "./SiderMenuListItem";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import GavelOutlinedIcon from "@material-ui/icons/GavelOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  paper: {
    width: 200,
    boxShadow: "0px 0 50px -10px #444",
  },
});

const SiderMenu = (props: IProps) => {
  const classes = useStyles();
  const { open, setOpen } = props;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const menuOpts = [
    { text: "Home", icon: <HomeOutlinedIcon /> },
    { text: "Inventory", icon: <DashboardOutlinedIcon /> },
    { text: "Journey", icon: <MapOutlinedIcon /> },
    { text: "Shop", icon: <ShoppingCartOutlinedIcon /> },
    { text: "Trade", icon: <GavelOutlinedIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  ];
  return (
    <SwipeableDrawer
      classes={classes}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      open={open}
      ModalProps={{ onBackdropClick: () => setOpen(false) }}
      swipeAreaWidth={50}
      hysteresis={0.2}
      
      disableBackdropTransition
    >
      <List>
        {menuOpts.map(({ text, icon }, index) => {
          return (
            <SiderMenuListItem
              key={index}
              text={text}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={(num: number) => setSelectedIndex(num)}
              icon={icon}
              closeMenu={() => setOpen(false)}
            />
          );
        })}
      </List>
    </SwipeableDrawer>
  );
};

export default SiderMenu;

type IProps = {
  open: boolean;
  setOpen: (cal: boolean) => void;
};
