import {
  Button,
  CardHeader,
  Divider,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { Card, CardContent, Dialog, Slide, TextField } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import { useEffect, useState } from "react";
import { IDialogProps } from "../../pages/FillForm";
import API from "../../utils/API";

const CharacterForm = (props: IProps) => {
  const { open, name, thumbnail, id } = props.dialog;

  const [agility, setAgility] = useState<string | null>(null);
  const [strength, setStrength] = useState<string | null>(null);
  const [magic, setMagic] = useState<string | null>(null);
  const [resistance, setResistance] = useState<string | null>(null);

    useEffect(()=>{
        setAgility(null);
        setStrength(null);
        setMagic(null);
        setResistance(null);
    },[id])

  const handleSave = () => {
    if (magic && agility && strength && resistance && id) {
      API.addCharacter({
        name,
        thumbnail,
        characterId:id,
        stats: {
          agility: +agility,
          strength: +strength,
          magic: +magic,
          resistance: +resistance,
        },
      });
    }
  };

  return (
    <Dialog
      open={open}
      onBackdropClick={() => {
        props.setDialog({ ...props.dialog, open: false });
      }}
      TransitionComponent={Slide}
      transitionDuration={500}
      scroll="body"
    >
      <Card>
        <CardMedia component="img" height="300" src={thumbnail} />
        <CardHeader title={name} subheader={id} />
        <CardContent>
          <Divider />
          <form style={{ margin: 50 }} onSubmit={()=>handleSave()}>
            <Typography variant="h4">Stats</Typography>
            <List>
              <ListItem style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  value={agility}
                  onChange={(e) => setAgility(e.target.value)}
                  inputProps={{ max: 99, min: 0 }}
                  style={{ minWidth: 150 }}
                  type="number"
                  id="agility"
                  label="Agility"
                  variant="outlined"
                />
              </ListItem>
              <ListItem style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  value={magic}
                  onChange={(e) => setMagic(e.target.value)}
                  inputProps={{ max: 99, min: 0 }}
                  style={{ minWidth: 150 }}
                  type="number"
                  id="magic"
                  label="Magic"
                  variant="outlined"
                />
              </ListItem>
              <ListItem style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  value={resistance}
                  onChange={(e) => setResistance(e.target.value)}
                  inputProps={{ max: 99, min: 0 }}
                  style={{ minWidth: 150 }}
                  type="number"
                  id="resistance"
                  label="Resistance"
                  variant="outlined"
                />
              </ListItem>
              <ListItem style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  value={strength}
                  onChange={(e) => setStrength(e.target.value)}
                  inputProps={{ max: 99, min: 0 }}
                  style={{ minWidth: 150 }}
                  type="number"
                  id="strength"
                  label="Strength"
                  variant="outlined"
                />
              </ListItem>
            </List>
            <Button
              onClick={()=>handleSave()}
              fullWidth
              color="secondary"
              size="large"
              variant="contained"
            >
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default CharacterForm;

type IProps = {
  dialog: IDialogProps;
  setDialog: (val: IDialogProps) => void;
};

export type ICharacterInfo = {
  name: string;
  characterId: number;
  thumbnail:string,
  stats: {
    agility: number;
    magic: number;
    resistance: number;
    strength: number;
  };
};
