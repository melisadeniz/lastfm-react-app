// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// the component to test
import Home from "../pages/Home";

test("Heading renders the correct text", () => {
  render(<Home />);
  const Heading = screen.getByTestId("homepage-heading");
  expect(Heading).toHaveTextContent("Welcome to Last.fm!");
});
