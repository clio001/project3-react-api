import "./App.css";

// * Impoer components
import MainDisplay from "./MainDisplay";
import Navbar from "./Navbar";

// * Import MUI
import { Grid, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <MainDisplay />
      </Container>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
