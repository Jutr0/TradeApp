import { Button, Container } from '@material-ui/core';
import React, { useState } from 'react';
import NavBarApp from './components/NavBarApp';
import SiderMenu from './components/SiderMenu';


function App() {

  const [openMenu,setOpenMenu] = useState(false);

  return (
    <Container>
      <NavBarApp openMenu={()=>{setOpenMenu(true)}}/>
      <SiderMenu open={openMenu} setOpen={(val:boolean)=>setOpenMenu(val)}/>
    </Container>
  );
}

export default App;
