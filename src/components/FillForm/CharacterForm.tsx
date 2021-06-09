import {
  Button,
  CardHeader,
  Divider,
  List,
  ListItem,
  Snackbar,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { Card, CardContent, Dialog, Slide, TextField } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import { useEffect, useState } from "react";
import { IDialogProps } from "../../pages/FillForm";
import API from "../../utils/API";
import StatsListItem from "./StatsListItem";

const CharacterForm = (props: IProps) => {
  const { open, name, thumbnail, id } = props.dialog;

  const [agility, setAgility] = useState<number | null>(null);
  const [strength, setStrength] = useState<number | null>(null);
  const [magic, setMagic] = useState<number | null>(null);
  const [resistance, setResistance] = useState<number | null>(null);

  const [agilityHelperText, setAgilityHelperText] = useState<string>("");
  const [strengthHelperText, setStrengthHelperText] = useState<string>("");
  const [magicHelperText, setMagicHelperText] = useState<string>("");
  const [resistanceHelperText, setResistanceHelperText] = useState<string>("");

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);

  useEffect(() => {
    API.getCharacter(id)
      .then((res) => {
        console.log(res);
        setAgility(res?.stats?.agility || 0);
        setStrength(res?.stats?.strength || 0);
        setMagic(res?.stats?.magic || 0);
        setResistance(res?.stats?.resistance || 0);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const validateStats = () => {
    if (magic && agility && strength && resistance && id) {
      const a = agility >= 100 || agility < 0;
      const m = magic >= 100 || magic < 0;
      const r = resistance >= 100 || resistance < 0;
      const s = strength >= 100 || strength < 0;
      if (a) {
        setAgilityHelperText("Number must be between 0 and 100");
      } else {
        setAgilityHelperText("");
      }
      if (m) {
        setMagicHelperText("Number must be between 0 and 100");
      } else {
        setMagicHelperText("");
      }
      if (r) {
        setResistanceHelperText("Number must be between 0 and 100");
      } else {
        setResistanceHelperText("");
      }
      if (s) {
        setStrengthHelperText("Number must be between 0 and 100");
      } else {
        setStrengthHelperText("");
      }
      if (a || m || r || s) {
        return false;
      } else return true;
    }
    return false;
  };

  const handleSave = () => {
    if (magic && agility && strength && resistance && id) {
      if (validateStats()) {
        API.addCharacter({
          name,
          thumbnail,
          characterId: id,
          stats: {
            agility,
            strength,
            magic,
            resistance,
          },
        }).then(() => setOpenSnackBar(true));
      }
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
          <form style={{ margin: 50 }} onSubmit={() => handleSave()}>
            <Typography variant="h4">Stats</Typography>
            <List>
              <StatsListItem
                key="agility"
                name="Agility"
                stat={agility}
                setStat={setAgility}
                statHelperText={agilityHelperText}
              />
              <StatsListItem
                key="magic"
                name="Magic"
                stat={magic}
                setStat={setMagic}
                statHelperText={magicHelperText}
              />
              <StatsListItem
                key="resistance"
                name="Resistance"
                stat={resistance}
                setStat={setResistance}
                statHelperText={resistanceHelperText}
              />
              <StatsListItem
                key="strength"
                name="Strength"
                stat={strength}
                setStat={setStrength}
                statHelperText={strengthHelperText}
              />
            </List>
            <Button
              onClick={() => handleSave()}
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
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          variant="filled"
        >
          Succesfully updated stats!
        </Alert>
      </Snackbar>
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
  thumbnail: string;
  stats: {
    agility: number;
    magic: number;
    resistance: number;
    strength: number;
  };
};
