import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Rank from "./pages/rank";
import Portfolio from "./pages/Portfolio/Portfolio";
import Airdrops from "./pages/Portfolio/Airdrops";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import FooterPage from "./component/FooterPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rank" component={Rank} />
        <Route path="/hub/wallet" component={Portfolio} />
        <Route path="/hub/airdrop" component={Airdrops} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Switch>
      <FooterPage />
    </Router>
  );
}
export default App;
