import "./App.css";

// * Import components
import MainDisplay from "./MainDisplay";
import Navbar from "./Navbar";
import Footer from "./Footer";

// * Import MUI
import { Grid, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <MainDisplay />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
