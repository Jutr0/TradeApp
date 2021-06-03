import { Box, Container, Grid, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import HeroCard from "../components/HeroCard/HeroCard";

const InventoryPage = () => {
  return (
    <Box>
      <Typography variant="h2">InventoryPage</Typography>
      <Container fixed>
        <Grid container spacing={5} justify="center">
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </Grid>
      </Container>
    </Box>
  );
};

export default withRouter(InventoryPage);
