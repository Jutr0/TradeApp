import { Divider, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React, { ReactElement } from "react";

const HeroStatsListItem = (props:IProps)=>{

    const {icon, stat} = props;

    return(<>
    <Divider/>
        <ListItem>
        <ListItemAvatar style={{marginRight:-20,marginLeft:-10}}>
            {icon}
        </ListItemAvatar>
        <ListItemText primary={stat.name} secondary={stat.value}/>
    </ListItem>
    </>
    )
}

export default HeroStatsListItem;

type IProps = {
    stat:{
        name:string,
        value:number
    }
    icon:ReactElement
}