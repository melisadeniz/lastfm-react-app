// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// the component to test
import Header from "../pages/base/Header";

test("renders link of the logo", () => {
  render(<Header />);
  const LinkElement = screen.getByTestId("header");
  expect(LinkElement).toBeInTheDocument();
});
