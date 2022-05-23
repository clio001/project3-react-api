// * Import hooks

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * Import CSS

import "./App.css";

// * Import Views
import ViewList from "../screens/ViewList";
import ViewLogin from "../screens/ViewLogin";
import ViewChat from "../screens/ViewChat";
import ViewHome from "../screens/ViewHome";
import ViewItem from "../screens/ViewItem";
import { MyContextProvider } from "../context/MyContext";

function App() {
  return (
    <Router>
      <MyContextProvider>
        <Routes>
          <Route path="list" element={<ViewList />} />
          <Route path="login" element={<ViewLogin />} />
          <Route path="chat" element={<ViewChat />} />
          <Route path="/" element={<ViewHome />} />
          <Route path="item" element={<ViewItem />} />
        </Routes>
      </MyContextProvider>
    </Router>
  );
}

export default App;
