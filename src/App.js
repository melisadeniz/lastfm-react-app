import React from "react";
// router
import { Routes, Route } from "react-router-dom";
// chakra-ui
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./pages/base/Header";
import routes from "./routes";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
