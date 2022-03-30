// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// import query client provider
import { QueryClient, QueryClientProvider } from "react-query";

// the component to test
import Home from "../pages/Home";

test("h1 renders the correct text", () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
  const h1 = screen.getByTestId("welcome-heading");
  expect(h1).toHaveTextContent("Welcome to Last.fm!");
});
