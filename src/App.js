// router
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import routes from './routes';
import Navbar from "./components/Navbar";
// import { Footer } from "./components";

function App() {
  return (
    
       <ChakraProvider>
      {/* <GlobalStyles /> */}
      <Navbar />
      <Routes>
      {routes.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
      </Routes>
      {/* <Footer /> */}
      </ChakraProvider>
    
  );
}

export default App;
