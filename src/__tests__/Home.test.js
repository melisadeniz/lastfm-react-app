// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// the component to test
import Home from "../pages/Home";

test("h1 renders the correct text", () => {
  render(<Home />);
  const h1 = screen.getByTestId("welcome-heading");;
  expect(h1).toHaveTextContent("Welcome to Last.fm!");
});
