import { Card, CardMedia } from "@material-ui/core";
import React from "react";

const CardFromPack = (props: IProps) => {
  const { setOpenModal, image } = props;
  return (
    <Card
      elevation={0}
      onClick={() => {
        setOpenModal(image);
      }}
    >
      <CardMedia component="img" image={image} />
    </Card>
  );
};

export default CardFromPack;

type IProps = {
  image: string;
  setOpenModal: (image: string) => void;
};
