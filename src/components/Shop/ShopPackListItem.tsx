import { Button, CardActions, CardMedia, Divider, Grid, ListItem, Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import React from "react";

const ShopPackListItem = (props:IProps) => {

    const {pack, mainCard, middleCard, lastCard} = props;

    return(
        <>        
        <br/>
        <Divider/>
        <br/>
        <ListItem >
            <Grid container  spacing={1} xs={12} alignItems="center">
                <Grid item xs={4} style={{borderRight:"1px solid #dddddd90"}}>
                    <Card elevation={0}>
                        <CardMedia component="img" image={pack}/>
                    <CardActions disableSpacing style={{display:"flex", justifyContent:"center"}}>
                        <Button color="secondary" variant="contained" size="large" >Buy 25$</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3} >
                <Card elevation={0}>
                        <CardMedia component="img" image={mainCard}/>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                <Card elevation={0}>
                        <CardMedia component="img"  image={middleCard}/>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                <Card elevation={0}>
                        <CardMedia component="img" image={lastCard}/>
                    </Card>
                </Grid>
            </Grid>
            
        </ListItem>

        </>
    )
}

export default ShopPackListItem;

type IProps = {
    pack:string,
    mainCard:string,
    middleCard:string,
    lastCard:string
}