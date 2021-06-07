import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { IDialogProps } from "../../pages/FillForm";

const HeroFillFormListItem = (props: IProps) => {
  const { name, thumbnail, id, dialog, setDialog } = props;

  const handleOnClick = () => {
    setDialog({
      name,
      thumbnail,
      id,
      open: true,
    });
  };

  return (
    <ListItem
      button
      onClick={() => {
        handleOnClick();
      }}
    >
      <ListItemAvatar>
        <Avatar src={thumbnail} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={id.toString()} />
    </ListItem>
  );
};

export default HeroFillFormListItem;

type IProps = {
  name: string;
  thumbnail: string;
  id: number;
  dialog: IDialogProps;
  setDialog: (val: IDialogProps) => void;
};
