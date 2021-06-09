import Register from "./Register";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../utils/UserContext";
import { Dialog } from "@material-ui/core";

const Authentication = () => {
  const { user } = useContext(UserContext);

  const [dialog, setDialog] = useState<IAuthenticationDialog>({
    open: false,
    content: <></>,
  });

  return (
    <>
      {user ? (
        <LogOut />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: 200,
            justifyContent: "space-between",
          }}
        >
          <LogIn
            setDialog={(val: IAuthenticationDialog) => setDialog(val)}
            dialog={dialog}
          />
          <Register
            setDialog={(val: IAuthenticationDialog) => setDialog(val)}
            dialog={dialog}
          />
        </div>
      )}
      <Dialog
        scroll="body"
        open={dialog.open}
        onBackdropClick={() => setDialog({ ...dialog, open: false })}
      >
        {dialog.content}
      </Dialog>
    </>
  );
};

export default Authentication;

export type IAuthenticationDialog = {
  open: boolean;
  content: JSX.Element;
};
