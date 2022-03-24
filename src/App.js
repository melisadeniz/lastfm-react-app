// router
import { Routes, Route } from "react-router-dom";
//context
import MainContextProvider from "./contexts/MainContextProvider";
import { ChakraProvider } from '@chakra-ui/react'
import Home from "./pages/Home"
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
// import { Footer } from "./components";

function App() {
  return (
    <MainContextProvider>
       <ChakraProvider>
      {/* <GlobalStyles /> */}
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/details"} element={<Details />} />
      </Routes>
      {/* <Footer /> */}
      </ChakraProvider>
    </MainContextProvider>
  );
}

export default App;
