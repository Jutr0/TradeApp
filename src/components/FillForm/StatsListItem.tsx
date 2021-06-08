import { ListItem, TextField } from "@material-ui/core";
import React from "react";

const StatsListItem = (props:IProps)=>{

    const {stat, setStat, statHelperText, name} = props;

    return(
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          value={stat}
          helperText={statHelperText}
          error={!!statHelperText}

          onChange={(e) => {setStat(+e.target.value) }}
          inputProps={{ max: 99, min: 0 }}
          style={{ minWidth: 150 }}
          type="number"
          id={name}
          label={name}
          variant="outlined"
        />
      </ListItem>
    )

}

export default StatsListItem

type IProps = {
    stat:number | null,
    setStat:(val:number)=>void,
    statHelperText:string,
    name:string,
}