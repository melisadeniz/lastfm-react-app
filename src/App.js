// router
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import routes from "./routes";
import Header from "./components/Header";

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
