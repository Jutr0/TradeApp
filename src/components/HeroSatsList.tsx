import { List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@material-ui/core"


import ColorizeOutlinedIcon from '@material-ui/icons/ColorizeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import EmojiSymbolsOutlinedIcon from '@material-ui/icons/EmojiSymbolsOutlined';
import DirectionsRunOutlinedIcon from '@material-ui/icons/DirectionsRunOutlined';

import HeroStatsListItem from "./HeroStatsListItem";


const HeroStatsList = (props:IProps)=>{

    const {health,strength,ability,swiftness} = props.stats;

    return(
        <List>
            <HeroStatsListItem stat={{name:"Health",value:health}} icon={<FavoriteBorderOutlinedIcon />}/>
            <HeroStatsListItem stat={{name:"Strength",value:strength}} icon={<ColorizeOutlinedIcon />}/>
            <HeroStatsListItem stat={{name:"Ability",value:ability}} icon={<EmojiSymbolsOutlinedIcon />}/>
            <HeroStatsListItem stat={{name:"Swiftness",value:swiftness}} icon={<DirectionsRunOutlinedIcon />}/>
        </List>
    )
}

export default HeroStatsList

type IProps={
    stats:{
        health:number,
        strength:number,
        ability:number,
        swiftness:number
    }
}