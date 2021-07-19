import { Route, Switch } from "react-router";
import styled from "styled-components";
import Nav from "./Components/Nav";
import GlobalStyles from "./GolbalStyles";
import Landing from "./pages/Home";
import Lounge from "./pages/Lounge";
import Play from "./pages/Play";
import Project from "./pages/Project";
import Story from "./pages/Story";
import Wallet from "./pages/Wallet";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/play" component={Play} />
        <Route path="/project" component={Project} />
        <Route path="/story" component={Story} />
        <Route path="/lounge" component={Lounge} />
        <Route path="/wallet" component={Wallet} />
      </Switch>
    </Container>
  );
}

export default App;
