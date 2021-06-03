import { Card, CardContent, CardMedia, Collapse, Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { Ithumbnail } from "../../utils/customTypes";
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

const HeroCard = (props:IProps) => {

  const {id,name,thumbnail} = props;

    const stats={strength:20,ability:23,swiftness:39,health:54}
  const [statsCollapsed, setStatsCollapsed] = useState(false)
  const classes = useStyles();
  const [raised, setRaised] = useState(false);

  return (
    <Grid
      style={{ justifyItems: "center" }}
      item
      xs={10}
      sm={4}
      md={3}
      lg={2}
      xl={1}
    >
      <Card
        raised={raised}
        style={{cursor:"pointer"}}
        onMouseEnter={() => setRaised(true)}
        onMouseLeave={() => {setRaised(false);/*setStatsCollapsed(false)*/}}
        onClick={()=>setStatsCollapsed(!statsCollapsed)}
      >
        <Typography
          className={classes.heading}
          
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <CardMedia
          className={classes.media}
          image={`${thumbnail.path}.${thumbnail.extension}`}
        />
        <CardContent >
            <Typography variant="subtitle2" >Stats</Typography>
            <Collapse style={id<0?{position:"absolute" ,background:"white", boxShadow:"0 5px 5px 0 #555"}:{}} in={statsCollapsed}>
            <HeroStatsList stats={stats}/>
            </Collapse>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HeroCard;

type IProps = {
  id:number,
  name:string,
  thumbnail:Ithumbnail,

}
