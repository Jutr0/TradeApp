import { Box, Container, Grid, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import HeroCard from "../components/HeroCard/HeroCard";
import { IApiDataResponse, ICharacterData } from "../utils/customTypes";
import { callAPi } from "../utils/utils";

const InventoryPage = () => {
  const [characters, setCharacters] = useState<ICharacterData[]>();
  const apiResponse = useRef<IApiDataResponse>();

  useEffect(() => {
    callAPi("characters", { limit: 100 })
      .then((res) => (apiResponse.current = res?.data))
      .then((res) => setCharacters(res?.results));
  }, []);

  return (
    <Box>
      <Typography variant="h2">InventoryPage</Typography>
      <Container fixed>
        <Grid container spacing={5} justify="center">
          {characters ? (
            characters.map((step) => {
              return (
                <HeroCard
                  key={step.id}
                  id={step.id}
                  thumbnail={step.thumbnail}
                  name={step.name}
                />
              );
            })
          ) : (
            <Grid item>
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default withRouter(InventoryPage);
