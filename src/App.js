import GlobalStyles from "./styles/Global";
// router
import { Routes, Route } from "react-router-dom";
//context
import MainContextProvider from "./contexts/MainContextProvider";
//pages
import { Home, Details } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <MainContextProvider>
      <GlobalStyles />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/details"} element={<Details />} />
      </Routes>
      <Footer />
    </MainContextProvider>
  );
}

export default App;
