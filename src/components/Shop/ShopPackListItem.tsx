import { Button, CardActions, CardMedia, Divider, Grid, GridList, GridListTile, ListItem, Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import React, { useState } from "react";
import { IImgModal } from "../../utils/customTypes";



const ShopPackListItem = (props:IProps) => {


    const {pack, mainCard, middleCard, lastCard, setOpenModal} = props;

    return(
        <>        
        <br/>
        <Divider/>
        <br/>
        <ListItem >
            <GridList cellHeight="auto" cols={9} >
                <GridListTile cols={3} rows={2} style={{borderRight:"1px solid #dddddd90"}}>
                    <Card elevation={0}>
                        <CardMedia component="img" image={pack}/>
                    <CardActions disableSpacing style={{display:"flex", justifyContent:"center"}}>
                        <Button color="secondary" variant="contained" size="large" >Buy 25$</Button>
                    </CardActions>
                    </Card>
                </GridListTile>
                <GridListTile cols={2} rows={2} >
                <Card elevation={0} onClick={()=>{setOpenModal(true,mainCard)}} >
                        <CardMedia component="img" image={mainCard}/>
                    </Card>
                <Card elevation={0} onClick={()=>{setOpenModal(true,middleCard)}} >
                        <CardMedia component="img"  image={middleCard}/>
                    </Card>
                </GridListTile>
                <GridListTile cols={2} rows={2}>
                <Card elevation={0} onClick={()=>{setOpenModal(true,lastCard)}} >
                        <CardMedia component="img" image={lastCard}/>
                    </Card>
                <Card elevation={0} onClick={()=>{setOpenModal(true,mainCard)}} >
                        <CardMedia component="img" image={mainCard}/>
                    </Card>
                </GridListTile>
                <GridListTile cols={2} rows={2}>
                <Card elevation={0} onClick={()=>{setOpenModal(true,middleCard)}} >
                        <CardMedia component="img"  image={middleCard}/>
                    </Card>
                <Card elevation={0} onClick={()=>{setOpenModal(true,lastCard)}} >
                        <CardMedia component="img" image={lastCard}/>
                    </Card>
                </GridListTile>
            </GridList>
            
        </ListItem>

        </>
    )
}

export default ShopPackListItem;

type IProps = {
    pack:string,
    mainCard:string,
    middleCard:string,
    lastCard:string,
    setOpenModal:(open:boolean,image:string)=>void
}