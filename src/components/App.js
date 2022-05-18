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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="list" element={<ViewList />} />
        <Route path="login" element={<ViewLogin />} />
        <Route path="chat" element={<ViewChat />} />
        <Route path="/" element={<ViewHome />} />
      </Routes>
    </Router>
  );
}

export default App;
