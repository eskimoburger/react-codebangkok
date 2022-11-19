import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvents from "@testing-library/user-event"

import SearchBar from "./SearchBar";

test("type and get correct text on submit", async () => {
  const onSubmit = (text) => {
    expect(text).toBe("lion");
  };
  render(<SearchBar onSubmit={onSubmit} />);
  await userEvents.keyboard("lion{enter}")

//   const textbox = screen.getByRole("textbox");
//   fireEvent.change(textbox, {
//     target: {
//       value: "lion",
//     },
//   });
//   const form = screen.getByRole("search");
//   fireEvent.submit(form);
});
