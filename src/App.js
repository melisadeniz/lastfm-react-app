import React, { Fragment } from "react";
// router
import { Routes, Route } from "react-router-dom";
// chakra-ui
import { ChakraProvider } from "@chakra-ui/react";
// query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./pages/base/Header";
import routes from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    
    <ChakraProvider>
      <Fragment>
      <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
    </ChakraProvider>
  );
}

export default App;
