import { Button, CardActions, CardMedia, Divider, Grid, GridList, GridListTile, ListItem, Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import React, { useEffect, useRef, useState } from "react";
import { IImgModal } from "../../utils/customTypes";
import CardFromPack from "./CardFromPack";



const ShopPackListItem = (props:IProps) => {

    const [cardsToRender,setCardsToRender] = useState<JSX.Element[]>([])
    const {pack, cards, setOpenModal} = props;

    useEffect(()=>{
            let tempCardsToRender = Array<JSX.Element>(0);
            for(let i=0; i < cards.length ;i+=2){
                tempCardsToRender.push(
                    <GridListTile cols={2} rows={2}>
                        <CardFromPack image={cards[i]} setOpenModal={(image:string)=>setOpenModal(image)}/>
                        <CardFromPack image={cards[i+1]} setOpenModal={(image:string)=>setOpenModal(image)}/>
                    </GridListTile>
                )
            }

            setCardsToRender(tempCardsToRender);


    },[])

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
            {cardsToRender} 
            </GridList>
            
        </ListItem>

        </>
    )
}

export default ShopPackListItem;

type IProps = {
    pack:string,
    cards:string[],
    setOpenModal:(image:string)=>void
}