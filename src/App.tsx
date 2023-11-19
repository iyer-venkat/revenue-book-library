import { BrowserRouter as Router } from "react-router-dom";
import { LayoutStyled, Main } from "./common/styles/layout";
import Screens from "./routes";
import Band from "./common/band";

const App = () => (
  <Router>
    <LayoutStyled>
      <Main>
        <Band>
          <Screens />
        </Band>
      </Main>
    </LayoutStyled>
  </Router>
);

export default App;
