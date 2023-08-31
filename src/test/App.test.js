import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "../components/Form";

describe("Form component", () => {
  it("renders form elements correctly", async () => {
    render(<Form />);

    const titleInput = screen.getByLabelText("Title");
    const descriptionTextarea = screen.getByLabelText("Description");
    const addButton = screen.getByText("Add Notes");

    expect(titleInput).toBeInTheDocument();
    expect(descriptionTextarea).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
});
