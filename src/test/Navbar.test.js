import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("Navbar component renders correctly", () => {
  render(<Navbar />);

  const navbarBrand = screen.getByText("Note Management");
  expect(navbarBrand).toBeInTheDocument();
});
