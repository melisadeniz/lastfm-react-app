// react
import React, { Fragment } from "react";
// router
import { Routes, Route } from "react-router-dom";
// chakra-ui
import { ChakraProvider } from "@chakra-ui/react";
// routes
import routes from "./routes/routes";
import Header from "./pages/base/Header";

function App() {
  return (
    <ChakraProvider>
      <Fragment>
        <Header />
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.element />} />
          ))}
        </Routes>
      </Fragment>
    </ChakraProvider>
  );
}

export default App;
