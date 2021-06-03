import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import React, { ReactNode } from "react";

const SiderMenuListItem = (props: IProps) => {
  const { index, selectedIndex, setSelectedIndex, icon, text } = props;

  return (
    <ListItem
      button
      selected={selectedIndex === index}
      onClick={() => setSelectedIndex(index)}
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
};
