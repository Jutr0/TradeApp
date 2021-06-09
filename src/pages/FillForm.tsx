import { Button, Container, Divider } from "@material-ui/core";
import { Box, CircularProgress, List } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import CharacterForm from "../components/FillForm/CharacterForm";
import HeroFillFormListItem from "../components/FillForm/HeroFillFormListItem";
import API from "../utils/API";
import { ICharacterData, IApiDataResponse } from "../utils/customTypes";

const FillForm = (props: IProps) => {
  const [characters, setCharacters] = useState<ICharacterData[]>();
  const apiResponse = useRef<IApiDataResponse>();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [dialog, setDialog] = useState<IDialogProps>({
    name: "test",
    thumbnail: "test",
    id: 120,
    open: false,
  });

  const { page: pageStr } = props.match.params;
  const page = Number.parseInt(pageStr);

  useEffect(() => {
    API.call("characters", { offset: 20 * page || 0 })
      .then((res) => {
        setLoading(true);
        return (apiResponse.current = res?.data);
      })
      .then((res) => {
        setLoading(false);
        setCharacters(res?.results);
      });
  }, [page]);

  const handlePageChange = (page: number) => {
    setLoading(true);
    history.push("/fillform/" + page);
  };

  return (
    <>
      <CharacterForm dialog={dialog} setDialog={setDialog} />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Container
          style={{
            padding: 50,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {page > 0 ? (
            <Button
              color="primary"
              variant="contained"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous Page
            </Button>
          ) : (
            <Button />
          )}
          {page < 74 ? (
            <Button
              color="primary"
              variant="contained"
              onClick={() => handlePageChange(page + 1)}
            >
              Next Page
            </Button>
          ) : (
            <Button />
          )}
        </Container>
        <Divider />

        <List component="div">
          {characters !== undefined && !loading ? (
            characters.map(({ id, thumbnail, name }) => {
              return (
                <HeroFillFormListItem
                  key={id}
                  dialog={dialog}
                  setDialog={setDialog}
                  id={id}
                  thumbnail={`${thumbnail.path}.${thumbnail.extension}`}
                  name={name}
                />
              );
            })
          ) : (
            <CircularProgress />
          )}
        </List>
        <Divider />
        <Container
          style={{
            padding: 50,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {page > 0 ? (
            <Button
              color="primary"
              variant="contained"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous Page
            </Button>
          ) : (
            <Button />
          )}
          {page < 74 ? (
            <Button
              color="primary"
              variant="contained"
              onClick={() => handlePageChange(page + 1)}
            >
              Next Page
            </Button>
          ) : (
            <Button />
          )}
        </Container>
      </Box>
    </>
  );
};

export default withRouter(FillForm);

type IProps = RouteComponentProps<{ page: string }>;

export type IDialogProps = {
  name: string;
  id: number;
  thumbnail: string;
  open: boolean;
};
