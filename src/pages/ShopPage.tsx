import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import { withRouter } from "react-router-dom";
import ShopPacksList from "../components/Shop/ShopPacksList";

const ShopPage = () => {
  return (
    <Container fixed>
      <Typography variant="h2">ShopPage</Typography>

      <ShopPacksList />
    </Container>
  );
};

export default withRouter(ShopPage);
