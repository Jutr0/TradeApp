import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import React, { ReactNode } from "react";
import { useHistory, useLocation } from "react-router-dom";

const SiderMenuListItem = (props: IProps) => {
  const { index, selectedIndex, setSelectedIndex, icon, text, closeMenu } =
    props;
  const history = useHistory();
  const location = useLocation();

  return (
    <ListItem
      button
      selected={selectedIndex === index}
      onClick={() => {
        setSelectedIndex(index);
        if (
          !(
            location.pathname === "/" + text ||
            (text === "Home" && location.pathname === "/")
          )
        ) {
          history.push(text === "Home" ? "/" : `/${text}`);
        }
        closeMenu();
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};

export default SiderMenuListItem;

type IProps = {
  index: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  icon: ReactNode;
  text: string;
  closeMenu: () => void;
};
