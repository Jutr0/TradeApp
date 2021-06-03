import React from "react";

import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";

const useStyles = makeStyles({
    paper:{
        width:200,
        boxShadow:"0px 0 50px -10px #444"
    }
})


const SiderMenu = (props:IProps)=>{

    const classes = useStyles()
    const {open, setOpen} = props;


    return(
        <>
        <SwipeableDrawer classes={classes} 
        onOpen={()=>setOpen(true)}
        onClose={()=>setOpen(false)}
        open={open}
        ModalProps={{onBackdropClick:()=>setOpen(false)}}
        swipeAreaWidth={50}
        >
            Hello
        </SwipeableDrawer>

        </>
    )
}

export default SiderMenu;

type IProps = {
    open:boolean,
    setOpen:(cal:boolean)=>void
}