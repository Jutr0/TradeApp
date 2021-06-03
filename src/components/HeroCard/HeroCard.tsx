import { Card, CardContent, CardMedia, Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import HeroStatsList from "./HeroSatsList";

const useStyles = makeStyles({
  media: {
    height: 100,
  },
  heading: {
    width: "100%",
    textAlign: "center",
    padding:"10px 0"
  },
});

const HeroCard = () => {

    const stats={strength:20,ability:23,swiftness:39,health:54}

  const classes = useStyles();
  const [raised, setRaised] = useState(false);

  return (
    <Grid
      style={{ justifyItems: "center" }}
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      xl={1}
    >
      <Card
        raised={raised}
        onMouseEnter={() => setRaised(true)}
        onMouseLeave={() => setRaised(false)}
      >
        <Typography
          className={classes.heading}
          
          variant="h5"
          component="div"
        >
          Iron Man
        </Typography>
        <CardMedia
          className={classes.media}
          image="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg"
        />
        <CardContent>
            <Typography variant="subtitle2" >Stats</Typography>
            <HeroStatsList stats={stats}/>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HeroCard;
