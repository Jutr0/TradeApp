import React, { useState } from "react";
import NavBarApp from "./NavBarApp/NavBarApp";
import SiderMenu from "./Sider/SiderMenu";

const NavSider = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <NavBarApp
        openMenu={() => {
          setOpenMenu(true);
        }}
      />
      <SiderMenu open={openMenu} setOpen={(val: boolean) => setOpenMenu(val)} />
    </>
  );
};

export default NavSider;
