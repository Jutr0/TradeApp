import List from "@material-ui/core/List";
import React from "react";
import ShopPackListItem from "./ShopPackListItem";

const ShopPacksList = () => {

    const packsData = [
        {
            pack:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/5/57/Knights_of_the_Frozen_Throne_-_Card_pack.png",
            mainCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/b/bb/Thrall%2C_Deathseer%2862861%29.png",
            middleCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/2/26/Eternal_Servitude%2861835%29.png",
            lastCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/2/20/Blood-Queen_Lana%27thel%2861814%29.png",
        },
        {
            pack:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/e/e8/Forged_in_the_Barrens_-_Card_pack.png",
            mainCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/9/95/Firemancer_Flurgl%28487662%29.png",
            middleCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/7/7c/Kurtrus_Ashfallen%28487634%29.png",
            lastCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/b/b2/Shadow_Hunter_Vol%27jin%28463925%29.png",
        },
        {
            pack:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/1/14/Legacy_-_Golden_pack.png",
            mainCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/1/1d/High_Inquisitor_Whitemane%2890686%29.png",
            middleCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/9/9a/Bloodfen_Raptor%28464741%29.png",
            lastCard:"https://static.wikia.nocookie.net/hearthstone_gamepedia/images/6/63/Harvest_Golem%28386%29.png",
        
        }
    ]

  return (
    <List>

    {packsData?(packsData.map(step=><ShopPackListItem {...step} />)):null}

    </List>
  );
};

export default ShopPacksList;
