import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Notes from "../components/Notes";

test("Notes component displays note correctly", () => {
  const note = {
    id: 1,
    title: "Test Title",
    description: "Test Description",
  };

  const mockSetNotes = jest.fn();
  const mockSetEditId = jest.fn();

  render(
    <Notes
      element={note}
      notes={[note]}
      setNotes={mockSetNotes}
      setEditId={mockSetEditId}
    />
  );

  const cardTitle = screen.getByText("Test Title");
  const cardDescription = screen.getByText("Test Description");
  const editButton = screen.getByText("Edit");
  const deleteButton = screen.getByText("Delete");

  expect(cardTitle).toBeInTheDocument();
  expect(cardDescription).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});

test("Delete button calls deleteHandler", () => {
  const note = {
    id: 1,
    title: "Test Title",
    description: "Test Description",
  };

  const mockSetNotes = jest.fn();

  render(<Notes element={note} notes={[note]} setNotes={mockSetNotes} />);

  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(mockSetNotes).toHaveBeenCalledWith([]);
});
