import { Box, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import JourneyPage from "./pages/JourneyPage";
import TradePage from "./pages/TradePage";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import SettingsPage from "./pages/SettingsPage";
import ShopPage from "./pages/ShopPage";
import NavSider from "./components/NavSider";
import FillForm from "./pages/FillForm";
import { UserContext } from "./utils/UserContext";
import { useState } from "react";
import { IUser } from "./utils/customTypes";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Container>
          <NavSider />
          <Box style={{ marginBottom: 50 }} />
          <Switch>
            <Route path="/fillform/:page">
              <FillForm />
            </Route>
            <Route path="/inventory">
              <InventoryPage />
            </Route>
            <Route path="/journey">
              <JourneyPage />
            </Route>
            <Route path="/settings">
              <SettingsPage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/trade">
              <TradePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
