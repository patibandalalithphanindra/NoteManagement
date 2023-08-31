import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Form from "../components/Form";

test("Form component renders without errors", () => {
  render(
    <Form
      title=""
      setTitle={() => {}}
      description=""
      setDescription={() => {}}
      notes={[]}
      setNotes={() => {}}
    />
  );
});

test("Form component displays title error message when title is empty", () => {
  render(
    <Form
      title=""
      setTitle={() => {}}
      description=""
      setDescription={() => {}}
      notes={[]}
      setNotes={() => {}}
    />
  );
  const addButton = screen.getByText("Add Notes");

  fireEvent.click(addButton);

  const titleInput = screen.getByLabelText("Title");
  expect(titleInput).toHaveValue("");

  const titleError = screen.getByText(/Please enter a title/i);
  expect(titleError).toBeInTheDocument();
});

test("Form component displays description error message when description is empty", () => {
  render(
    <Form
      title=""
      setTitle={() => {}}
      description=""
      setDescription={() => {}}
      notes={[]}
      setNotes={() => {}}
    />
  );
  const addButton = screen.getByText("Add Notes");

  fireEvent.click(addButton);

  const descriptionInput = screen.getByLabelText("Description");
  expect(descriptionInput).toHaveValue("");

  const descriptionError = screen.getByText("Please enter a description");
  expect(descriptionError).toBeInTheDocument();
});
