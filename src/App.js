import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ScrollToTop } from "./pages";
import Invoice from "./components/App";
import AuthContext from "./context/auth";
import { Header, Error } from "./pages";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              {user ? (
                <Invoice />
              ) : (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              )}
            </React.Fragment>
          }
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
