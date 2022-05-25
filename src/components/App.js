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
import ViewAbout from "../screens/ViewAbout";
import ViewData from "../screens/ViewData";
import ViewContact from "../screens/ViewContact";
import { MyContextProvider } from "../context/MyContext";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <MyContextProvider>
          <Routes>
            <Route path="list" element={<ViewList />} />
            <Route path="login" element={<ViewLogin />} />
            <Route
              path="chat"
              element={
                <ProtectedRoute>
                  <ViewChat />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<ViewHome />} />
            <Route path="item" element={<ViewItem />} />
            <Route path="about" element={<ViewAbout />} />
            <Route path="data" element={<ViewData />} />
            <Route path="impressum" element={<ViewContact />} />
          </Routes>
        </MyContextProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
