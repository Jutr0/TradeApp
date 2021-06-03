import { Box, Container } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import JourneyPage from './pages/JourneyPage';
import TradePage from './pages/TradePage';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import SettingsPage from './pages/SettingsPage';
import ShopPage from './pages/ShopPage';
import NavSider from './components/NavSider';

function App() {


  return (
      <Router>
    <Container>
      <NavSider/>
      <Box style={{marginBottom:50}}/>
        <Switch>
          <Route path="/inventory"><InventoryPage/></Route>
          <Route path="/journey"><JourneyPage/></Route>
          <Route path="/settings"><SettingsPage/></Route>
          <Route path="/shop"><ShopPage/></Route>
          <Route path="/trade"><TradePage/></Route>
          <Route path="/"><HomePage/></Route>
        </Switch>
    </Container>
      </Router>
  );
}

export default App;
